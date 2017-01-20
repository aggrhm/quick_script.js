class QS.Collection
  init : ->
  constructor: (opts) ->
    @opts = {}
    for key,val of opts
      @opts[key] = val
    @events = {}
    @_reqid = 0
    @items = ko.observableArray([])
    @scope = ko.observable(@opts.scope || {})
    @includes = ko.observable(@opts.includes || [])
    @sort = ko.observable(@opts.sort || "")
    @page = ko.observable(1)
    @limit = ko.observable(@opts.limit || 100)
    @title = ko.observable(@opts.title || 'Collection')
    @count = ko.observable(0)
    @pages_count = ko.observable(0)
    @extra_params = ko.observable(@opts.extra_params || {})
    @model = @opts.model || QS.Model
    @adapter = @opts.adapter
    @adapter_endpoint = @opts.adapter_endpoint || 'index'
    @model_state = ko.observable(ko.modelStates.READY)
    @named_filters = {}
    @named_sorts = {}
    @scoped_items = ko.pureComputed =>
      @getScopedItems()
    @is_ready = ko.dependentObservable ->
        @model_state() == ko.modelStates.READY
      , this

    gen_observable = (state) =>
      ko.pureComputed
        read : =>
          @model_state() == state
        write : (val) =>
          if val == true then @model_state(state) else @model_state(ko.modelStates.READY)

    @is_loading = gen_observable(ko.modelStates.LOADING)

    @is_appending = gen_observable(ko.modelStates.APPENDING)

    @is_inserting = gen_observable(ko.modelStates.INSERTING)

    @is_updating = ko.dependentObservable ->
        @model_state() != ko.modelStates.READY
      , this

    @loadOptions = ko.dependentObservable ->
        opts = @extra_params()
        opts['scope'] = @scope()
        opts['includes'] = @includes()
        opts['sort'] = @sort()
        opts['limit'] = @limit()
        opts['page'] = @page()
        opts
      , this
    @scope = ko.intercepter @scope, (obs, prev, curr) ->
        obs(curr)
        #QS.log("Scope changed from #{prev} to #{curr}")
        #@load()
      , this
    @hasItems = ko.pureComputed ->
        @items().length > 0
      , this
    @has_items = ko.pureComputed ->
      @items().length > 0
    , this
    @is_empty = ko.pureComputed ->
      @items().length == 0
    , this
    @length = ko.pureComputed ->
        @items().length
      , this
    @extend(opts)
    @init()
  extend : (opts)=>
  setScope : (scp, args) =>		# NOTE: Deprecated
    opts = args
    opts.unshift(scp)
    @scope(opts)
  _load : (scope, op, load_opts)->
    #QS.log("Loading items for #{scope}")
    op ||= QS.Collection.REPLACE
    if load_opts.overwrite_request == false
      reqid = @_reqid
    else
      reqid = ++@_reqid
    opts = @loadOptions()
    $.extend(opts, load_opts.data) if load_opts.data?
    opts.scope = if (scope instanceof Array) then scope else JSON.stringify(scope)
    @adapter[@adapter_endpoint]
      data : opts
      success : (resp)=>
        if @_reqid != reqid
          QS.log 'Collection request has been preempted'
          return
        @handleData(resp.data, op)
        @count(resp.count) if resp.count?
        @pages_count(resp.pages_count) if resp.pages_count?
        load_opts.callback(resp) if load_opts.callback?
        @events.onchange() if @events.onchange?
    if op == QS.Collection.REPLACE
      @model_state(ko.modelStates.LOADING)
    if op == QS.Collection.UPDATE
      @model_state(ko.modelStates.UPDATING)
    else if op == QS.Collection.APPEND
      @model_state(ko.modelStates.APPENDING)
    else if op == QS.Collection.INSERT
      @model_state(ko.modelStates.INSERTING)
  load : (scope, opts)=>
    opts = {callback: opts} if (!opts?) || (opts instanceof Function)
    @reset() unless opts.reset? && !opts.reset
    @page(opts.page) if opts.page?
    @limit(opts.limit) if opts.limit?
    @includes(opts.includes) if opts.includes?
    @sort(opts.sort) if opts.sort?
    @scope(scope) if scope?
    @_load(@scope(), QS.Collection.REPLACE, opts)
  update : (opts)=>
    opts = {callback: opts} if (!opts?) || (opts instanceof Function)
    @_load(@scope(), QS.Collection.UPDATE, opts)
  insert : (scope, opts)->
    opts = {callback: opts} if (!opts?) || (opts instanceof Function)
    @_load(scope, QS.Collection.INSERT, opts)
  append : (scope, opts)->
    opts = {callback: opts} if (!opts?) || (opts instanceof Function)
    @_load(scope, QS.Collection.APPEND, opts)
  appendNextPage : (opts)->
    opts = {callback: opts} if (!opts?) || (opts instanceof Function)
    @page(@page() + 1)
    @_load(@scope(), QS.Collection.APPEND, opts)
  handleData : (data, op) =>
    return if !data?
    #QS.log "COLLECTION::HANDLE_DATA : Starting (#{QS.time()}).", 3
    models = []
    op ||= QS.Collection.UPDATE
    curr_a = @items()
    # build temp id hash
    id_h = {}
    for itm in curr_a
      id_h[itm.id()] = itm


    if op == QS.Collection.UPDATE
      curr_len = @items().length
      new_a = data
      new_len = data.length
      max_len = Math.max(curr_len, new_len)

      # iterate possible positions
      if max_len > 0
        for idx in [(max_len-1)..0]
          c_el = curr_a[idx]
          c_id = if c_el? then c_el.id() else null
          r_el = new_a[idx]
          r_id = if r_el? then r_el.id else null

          if c_id == r_id
            # absorb if ids are the same
            c_el.handleData(r_el)
          else if r_id == null
            # this position is now empty, need to delete
            curr_a.splice(idx, 1)
          else
            # item ids aren't the same
            #	find item in temp hash
            same_itm = id_h[r_id]
            if same_itm?
              # replace old with new
              curr_a[idx] = same_itm
              curr_a[idx].handleData(r_el)
            else
              # item not found, must be new
              curr_a[idx] = new @model(r_el, this)

      @items.valueHasMutated()

    else if op == QS.Collection.REPLACE
      models = for item in data
        new @model(item, this)
      @items(models)
    else
      # update items with same id, keep track of leftovers
      leftovers = []
      for item, idx in data
        # check if already in data
        same_itm = id_h[item.id]
        if same_itm?
          same_itm.handleData(item)
        else
          model = new @model(item, this)
          leftovers.push(model)

      #QS.log "COLLECTION::HANDLE_DATA : Finished building data #{QS.time()}.", 3
      if op == QS.Collection.INSERT
        @items(leftovers.concat(@items())) if leftovers.length > 0
      else if op == QS.Collection.APPEND
        @items(@items().concat(leftovers)) if leftovers.length > 0
    @model_state(ko.modelStates.READY)
  handleItemData : (data, opts={})=>
    do_append = opts.do_append || opts.append || false
    item = @getItemById(data.id)
    item.handleData(data) if item?
    if !item? && do_append == true
      item = new @model(data, this)
      @addItem(item)
    return item
  handleItemDelete : (data)=>
    @removeItemById(data.id)
  addNamedFilter : (name, fn, opts = {store: false})=>
    @named_filters[name] = fn
    if opts.store == true
      @["filter_#{name}"] = ko.pureComputed ->
        @items().filter(fn)
      , this
  addNamedSort : (name, fn)=>
    @named_sorts[name] = fn
    @["sort_#{name}"] = ko.pureComputed ->
      @items().sort(fn)
    , this
  getFilteredItems : (filter)=>
    fo = ko.unwrap(filter)
    fsv = fo.select || []
    sort = fo.sort || null
    fa = if fsv instanceof Array then fsv else [fsv]
    items = @items().filter (el)=>
      ret = true
      for filt in fa
        filt_fn = @named_filters[filt]
        ret = ret && filt_fn(el)
      ret
    items = items.sort(@named_sorts[sort]) if sort != null
    return items
  getScopedItems : (scope)=>
    scope ||= @scope()
    items = @items().filter (el)=>
      ret = true
      for filt, params of scope
        continue if filt == 'sort'
        filt_fn = @named_filters[filt]
        continue if !filt_fn?
        ret = ret && filt_fn.call(this, el, params)
      ret
    if scope.sort?
      sort_key = scope.sort[0]
      sort_asc = scope.sort[1]
      items = items.sort (m1, m2)->
        return 0 if m1 == m2
        val = if m1[sort_key]() < m2[sort_key]() then -1 else 1
        if sort_asc == false then val * -1 else val
    return items
  nextPage : =>
    @page(@page() + 1)
    @update()
  prevPage : =>
    @page(@page() - 1)
    @update()
  updateScope : (scope, opts={})=>
    do_replace = false unless opts.replace == true || opts.clear == true
    do_update = true unless opts.do_update == false
    if do_replace
      @scope(scope)
    else
      cs = @scope()
      ns = $.extend({}, cs, scope)
      @scope(ns)
    @page(opts.page) if opts.page?
    @update() if do_update == true
  toggleSort : (field, opts={})=>
    ns = {}
    scope = @scope()
    csort = scope.sort
    if !csort? || csort[0] != field
      ns.sort = [field, true]
    else
      ns.sort = [field, !csort[1]]
    @updateScope(ns, opts)
  hasItems : =>
    @items().length > 0
  length : =>
    @items().length
  addItem : (item, notify)->
    notify ||= true
    item.collection = this
    @items().push(item)
    @items.valueHasMutated() if notify
    return item
  addItemData : (data)->
    item = new @model(data, this)
    @addItem(item)
  removeItem : (idx, notify)->
    notify ||= true
    @items().splice(idx, 1)
    @items.valueHasMutated() if notify
  moveItem : (from, to, notify)->
    notify ||= true
    @items().splice(to, 0, @items().splice(from, 1)[0])
    @items.valueHasMutated() if notify
  getItemById : (id)->
    list = @items().filter ((item)=> item.id() == id)
    ret = if list.length > 0 then list[0] else null
  getIndexById : (id)->
    idx = 0
    for item in @items()
      return idx if item.id() == id
      idx = idx + 1
    return null
  removeDuplicates : ->
    ids = []
    @items().forEach (item, idx, array)=>
      if ids.includes(item.id())
        @items.splice(idx, 1)
      else
        ids.push(item.id())
  removeIf : (callback)->
    @items().forEach (item, idx, array)=>
      if callback(item, idx)
        @items.splice(idx, 1)
  removeItemById : (id)->
    @removeIf (item)=>
      item.id() == id
  reset : ->
    @clear()
    @_reqid = 0
    @page(1)
    @scope({})
  clear : ->
    @items([])
  absorb : (model) =>
    @reset()
    @handleData(model.toJS())
  toJS : =>
    objs = []
    for item in @items()
      objs.push(item.toJS())
    objs
  toAPI : =>
    objs = []
    for item in @items()
      objs.push(item.toAPI())
    objs
  toAPIParam : =>
    QS.utils.prepareAPIParam(@toAPI())

QS.Collection.REPLACE = 0
QS.Collection.INSERT = 1
QS.Collection.APPEND = 2
QS.Collection.UPDATE = 3
