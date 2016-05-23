
class QS.Model
	init : ->
	extend : ->
	constructor: (data, collection, opts) ->
		@_uuid = QS.utils.uuid()
		@fields = []
		@submodels = {}
		@is_submodel = false
		@addFields(['id'], '')
		#@events = {}
		@adapter = if @initAdapter? then @initAdapter() else null
		@collection = collection
		@db_state = ko.observable({})
		@errors = ko.observable({})
		@errors.extend({errors: true})
		@model_state = ko.observable(0)
		@save_progress = ko.observable(0)
		if opts?
			@is_submodel = opts.is_submodel
		@extend()
		@init()
		@addComputed 'is_ready', ->
			@model_state() == ko.modelStates.READY
		@addComputed 'is_loading',
			read : ->
				@model_state() == ko.modelStates.LOADING
			write : (val)->
				if val == true then @model_state(ko.modelStates.LOADING) else @model_state(ko.modelStates.READY)
		@addComputed 'is_saving',
			read : ->
				@model_state() == ko.modelStates.SAVING
			write : (val)->
				if val == true then @model_state(ko.modelStates.SAVING) else @model_state(ko.modelStates.READY)
		@addComputed 'is_editing', ->
				@model_state() == ko.modelStates.EDITING
		@addComputed 'is_new', ->
				@id() == ''
		@addComputed 'is_dirty', ->
				JSON.stringify(@db_state()) != JSON.stringify(@toJS())
		@addComputed 'has_errors', ->
				@errors.any()
		@handleData(data || {})
	addFields : (fields, def_val) ->
		ko.addFields fields, def_val, this
	addComputed : (field, fn_opts) ->
		ko.addComputed field, fn_opts, this
	addSubModel : (field_name, class_name, nested) ->
		nested ||= false
		if nested == true || @is_submodel == false
			ko.addSubModel field_name, class_name, this
		@submodels[field_name] = class_name if typeof(field_name) == "string"
	handleData : (data) ->
		ko.absorbModel(data, this) if data?
		@model_state(ko.modelStates.READY)
		@db_state(@toJS())
	load : (opts, callback)->
		#@id(opts.id) if opts.id?
		@adapter.load
			data : opts
			success : (resp)=>
				ret_data = if opts.fields? then ko.copyObject(resp.data, opts.fields) else resp.data
				@handleData(ret_data)
				callback(resp) if callback?
		@model_state(ko.modelStates.LOADING)
	reloadFields : (fields, callback)->
		opts = @reloadOpts()
		opts['fields'] = fields
		@load(opts, callback)
	reload : (callback)->
		opts = @reloadOpts()
		@load(opts, callback)
	reloadOpts : =>
		{id : @id()}
	save : (fields, callback) ->
		QS.log("Saving fields #{fields}")
		if (@model_state() != ko.modelStates.READY)
			QS.log("Save postponed.")
			return
		if fields instanceof Array
			opts = @toAPI(fields)
		else
			opts = fields
		opts['id'] = @id()
		@adapter.save
			data: opts
			progress : (ev, prog)=>
				@save_progress( prog )
			callback : (resp, status)=>
				@handleData(resp.data)
				callback?(resp, status)
		@model_state(ko.modelStates.SAVING)
	reset : ->
		#@model_state(ko.modelStates.LOADING)
		@id('')
		@init()
		@db_state(@toJS())
		@save_progress(0)
		@model_state(ko.modelStates.READY)
	delete : (fields, callback)=>
		fields ||= ['id']
		if (@model_state() != ko.modelStates.READY)
			QS.log("Delete postponed.")
			return
		opts = @toJS(fields)
		opts['id'] = @id()
		@adapter.delete
			data : opts
			success : (resp)=>
				@handleData(resp.data)
				@collection.handleItemDelete(resp.data) if ((resp.meta == 200) && @collection?)
				callback?(resp)
			error : (resp)=>
				QS.log("Delete error encountered")
				@model_state(ko.modelStates.READY)
				callback?(resp)
		@model_state(ko.modelStates.SAVING)
	removeFromCollection : =>
		@collection.removeItemById(@id()) if @collection?
	##
	#	Convert this model into a basic javascript object.
	toJS : (flds)=>
		flds ||= @fields
		obj = {}
		for prop in flds
			if typeof(@[prop].toJS) == 'function'
				obj[prop] = @[prop].toJS()
			else
				obj[prop] = @[prop]()
		obj
	##
	#	Convert this model into an object that can be passed to AJAX request
	#	to be handled by server.
	toAPI : (flds)=>
		flds ||= @fields
		obj = {}
		for prop in flds
			val = null
			if typeof(@[prop].toAPI) == 'function'
				val = @[prop].toAPI()
			else if typeof(@[prop].toJS) == 'function'
				val = @[prop].toJS()
			else
				val = @[prop]()
			obj[prop] = val
		return QS.utils.prepareAPIData(obj)
	toAPIParam : (flds)=>
		QS.utils.prepareAPIParam(@toAPI(flds))
	toJSON : (flds)=>
		JSON.stringify(@toJS(flds))
	getClass : =>
		@constructor
	toClone : =>
		m = new(@getClass())
		m.absorb(this)
		return m
	checkDirty : (prop)=>
		@db_state()[prop] != @[prop]()
	revert : =>
		@handleData(@db_state())
	absorb : (model) =>
		@reset()
		@handleData(model.toJS())
QS.Model.includeCollection = (self)->
	self ||= this
	self.Collection = class extends QS.Collection
		constructor : (opts)->
			super(opts)
			@adapter ||= self.Adapter
			@model = self
QS.Model.includeViewCollection = (self)->
	self ||= this
	self.Collection = class extends QS.ViewCollection
		constructor : (opts)->
			super(opts)
			@adapter = self.Adapter
			@model = self
QS.Model.includeAdapter = (adapter, self)->
	self ||= this
	if !adapter.save? && !adapter.load?
		adapter.type ||= QS.ModelAdapter
		adapter = new adapter.type(adapter)
	self.Adapter = adapter
	self::initAdapter = (=> adapter)

class QS.FileModel extends QS.Model
	extend : ->
		@input = {}
		# source
		@input.source = ko.observable(null)
		@input.source_type = ko.pureComputed ->
			source = @input.source()
			return null if !source
			return source.type
		, this
		# url helpers
		@input.url = ko.computed
			read : ->
				source = @input.source()
				return null if (!source? || source.type != 'url')
				return source.data
			write : (val)->
				@input.source({type: 'url', data: val})
			owner: this
		@input.has_url = ko.computed ->
			!QS.utils.isBlank(@input.url())
		, this
		# file
		@input.files = ko.observable([])
		@input.file = ko.computed ->
			if @input.files().length > 0 then @input.files()[0] else null
		, this
		@input.has_file = ko.computed ->
			@input.file()?
		, this
		@input.file_uri = ko.observable('')
		@input.files.subscribe (val)=>
			if val.length > 0 && FileReader?
				@input.file_uri('')
				reader = new FileReader()
				reader.onloadend = (ev)=>
					QS.log('input loaded')
					@input.file_uri(ev.target.result)
				reader.readAsDataURL(val[0])
		, this
		@input.filename = ko.computed ->
			if @input.has_file() then @input.file().name else ""
		, this

		# helpers
		@input.display_uri = ko.computed ->
			if @input.has_file()
				@input.file_uri()
			else
				fd = @input.source()
				if fd?
					fd.data
				else
					null
		, this
		@input.is_present = ko.computed ->
			return QS.utils.isPresent(@input.source()) || @input.has_file()
		, this
		@input.present = @input.is_present
		@input.is_image = ko.computed ->
			if (@input.has_file() && @input.file().type?)
				return QS.utils.isContentTypeImage(@input.file().type)
			else if @input.has_url()
				return /(jpg|gif|png|JPG|GIF|PNG|JPEG|jpeg)$/.test(@input.url())
			else if @input.source_type() == 'base64'
				return QS.utils.isContentTypeImage(@input.source().content_type)
			else
				return false
		, this
		@input.loadSource = (src)=>
			if src.type == 'base64'
				src.content_type = src.data.split(',')[0].split(':')[1].split(';')[0]
			@input.source(src)
			return src
		@input.clear = =>
			@input.source(null)
			@input.files([])
		@input.reset = @input.clear
		@input.handleData = (data)=>
			return if !data?
			@input.files(data.files)
			@input.source(data.source)
		@input.toJS = =>
			ret = {}
			ret.files = @input.files()
			ret.source = @input.source()
			return ret
		@input.toAPI = =>
			if @input.has_file()
				@input.file()
			else if @input.source() != null
				@input.source()
			else
				null
	reset : =>
		super()
		@input.clear()
	toJS : =>
		ret = super()
		ret.input = @input.toJS()
		return ret
	toAPI : =>
		@input.toAPI()
	toAPIParam : =>
		QS.utils.prepareAPIParam(@toAPI())

class QS.Collection
	init : ->
	constructor: (opts) ->
		@opts = {}
		for key,val of opts
			@opts[key] = val
		@events = {}
		@_reqid = 0
		@scope = ko.observable(@opts.scope || {})
		@items = ko.observableArray([])
		@page = ko.observable(1)
		@limit = ko.observable(@opts.limit || 100)
		@title = ko.observable(@opts.title || 'Collection')
		@count = ko.observable(0)
		@extra_params = ko.observable(@opts.extra_params || {})
		@model = @opts.model || QS.Model
		@adapter = @opts.adapter
		@adapter_endpoint = @opts.adapter_endpoint || 'index'
		@model_state = ko.observable(0)
		@named_filters = {}
		@named_sorts = {}
		@scoped_items = ko.pureComputed =>
			@getScopedItems()
		@is_ready = ko.dependentObservable ->
				@model_state() == ko.modelStates.READY
			, this
		@is_loading = ko.dependentObservable ->
				@model_state() == ko.modelStates.LOADING
			, this
		@is_updating = ko.dependentObservable ->
				@model_state() != ko.modelStates.READY
			, this
		@is_appending = ko.dependentObservable ->
				@model_state() == ko.modelStates.APPENDING
			, this
		@is_inserting = ko.dependentObservable ->
				@model_state() == ko.modelStates.INSERTING
			, this
		@loadOptions = ko.dependentObservable ->
				opts = @extra_params()
				opts['scope'] = @scope()
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
		do_append = opts.do_append || false
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

class QS.ViewCollection extends QS.Collection
	extend: (opts)->
		super()
		@views = ko.observableArray([])
		@view_model = (@opts.view || QS.View)
		@view_owner = (@opts.view_owner || null)
		@named_view_filters = {}
		@named_view_sorts = {}
		@view_filter = ko.observable({})
		@template = ko.observable(@opts.template)
		@filtered_views = @computeFilteredViews(@view_filter)
		@items.subscribe @updateViews
	updateViews : (items)=>
		view_cls = @view_model
		view_owner = @view_owner
		ra = items
		ca = @views()
		max_len = Math.max(ra.length, ca.length)

		# cache views by model
		mh = {}
		ca.forEach (view)->
			mh[view.model._uuid] = view
		#QS.log mh

		# iterate possible positions
		if max_len > 0
			for idx in [(max_len-1)..0]
				# here we will check if any of the views in the current list
				# have models that match ones in the new list
				rm = ra[idx]
				cm = if ca[idx]? then ca[idx].model else null

				if !rm?
					# item has been deleted
					ca.splice(idx, 1)
				else
					# models aren't the same
					# check if another view in list has model
					view_name = "view-#{rm.id()}"
					same_view = mh[rm._uuid]
					if same_view?
						ca[idx] = same_view
					else
						ca[idx] = new view_cls(view_name, view_owner, rm)
		@views.valueHasMutated()
	setView : (view_model, view_owner) =>
		@views([])
		@view_model = view_model
		@view_owner = view_owner
		@updateViews(@items())
	addViewFilter : (name, fn)=>
		@named_view_filters[name] = fn
		@["views_#{name}"] = ko.computed ->
			@views().filter(fn)
		, this
	addViewSort : (name, fn)=>
		@named_view_sorts[name] = fn
	computeFilteredViews : (filter)=>
		ko.computed ->
			fo = ko.unwrap(filter)
			fsv = fo.select || []
			sort = fo.sort || null
			fa = if fsv instanceof Array then fsv else [fsv]
			views = @views().filter (el)=>
				ret = true
				for filt in fa
					filt_fn = @named_view_filters[filt]
					ret = ret && filt_fn(el)
				ret
			views = views.sort(@named_view_sorts[sort]) if sort != null
			return views
		, this
	getViewById : (id)->
		list = @views().filter ((view)=> view.model.id() == id)
		ret = if list.length > 0 then list[0] else null
	nthViews : (n, offset) ->
		@views().filter (el, i)->
			(i-offset) % n == 0
	getTemplate : ->
		@template()

class QS.View
	QuickScript.includeEventable(this)
	init : ->
	constructor : (@name, @owner, @model, @opts)->
		@app = @owner.app if @owner?
		@views = ko.observableArray([])
		@views.name_map = {}
		@events = {}
		@opts ||= {}
		@disposables = []
		#@templateID ||= "view-#{@name}"
		@fields = []
		@templateID = @opts.templateID if @opts.templateID?
		@model = @opts.model if @opts.model?
		@view_name = ko.computed ->
				@templateID
			, this
		@is_visible = ko.observable(false)
		@is_loading = ko.observable(false)
		@is_saving = ko.observable(false)
		@error = ko.observable('')
		@has_error = ko.pureComputed ->
			QS.utils.isPresent(@error())
		, this
		@view = null
		@task = ko.observable(null)
		@prev_task = ko.observable(null)
		@selected_view = ko.pureComputed =>
			task = @task()
			return @views.name_map[task] || null
		@layout_attr = ko.observable({})
		@transition = {type : 'fade', opts : {'slide_pos' : ko.observable(0), 'slide_index' : ko.observable(0)}}
		@transition.has_slide_css = (css, idx)=>
			@transition.opts['slide_css' + css]().includes? idx
		@init()
		@setupViewBox()
	show : ->
		@is_visible(true)
		@onShown() if @onShown?
	hide : ->
		for view in @views()
			view.hide()
		@is_visible(false)
		@view = null
		@task(null)
		@onHidden() if @onHidden?
	dispose : ->
		for view in @views()
			view.dispose()
		for d in @disposables
			#QS.log "Disposing observable.", 5
			d.dispose()
		@disposables = []
	disposeLater : (ds...)=>
		@disposables.push.apply(@disposables, ds)
		return @disposables
	setupViewBox : ->
		if @transition.type == 'slide'
			@task.subscribe (val)=>
				return
				opts = @transition.opts
				if val != null
					idx = @getViewBoxIndex(val)
					old_idx = opts.slide_index()
					new_el = $(@element).find('.slide-item-' + idx)
					old_el = $(@element).find('.slide-item-' + old_idx)
					if idx > old_idx
						new_el.addClass('next')
						new_el[0].offsetWidth if new_el[0]?
						new_el.addClass('left')
						old_el.addClass('left')
					else
						new_el.addClass('prev')
						new_el[0].offsetWidth if new_el[0]?
						new_el.addClass('right')
						old_el.addClass('right')
					setTimeout ->
						new_el.removeClass('next left prev right')
						old_el.removeClass('active next left prev right')
						new_el.addClass('active')
					, 600
					opts.slide_index(idx)
	load : ->
	reload : =>
		@load.apply(this, arguments)
	addView : (name, view_class, opts={}) ->
		return if @views.name_map[name]?
		if typeof(opts) == 'string'
			opts = {templateID: opts}
		view = new view_class(name, this, opts.model, opts)
		@views.push(view)
		@views[name] = @views.name_map[name] = view
		@["is_task_#{name}"] = ko.computed ->
				@task() == name
			, this
		@["select_task_#{name}"] = =>
			@selectView(name)
		return view
	addFields : (fields, def) =>
		ko.addFields(fields, def, this)
	addComputed : (field, fn_opts) ->
		ko.addComputed field, fn_opts, this
	validate_for : (field, fn, msg) =>
		ko.validate_for(field, fn, msg, this)
	validate_fields : (fields, fn) =>
		ko.validate_fields(fields, fn, this)
	viewCount : ->
		@views().length
	viewList : ->
		@views()
	selectView : (view_name) ->
		args = Array.prototype.slice.call(arguments)
		last_view = @view
		view = @views.name_map[view_name]
		if (last_view != view)
			QS.log("View [#{view.name}] selected.", 2)
			last_view.hide() if last_view?
			setTimeout =>		# allow the hidden view to settle
				view.load.apply(view, args[1..])
				window.onbeforeunload = view.events.before_unload
				view.show()
				@view = view
				@prev_task(@task())
				@task(view.name)
			, 50
		else
			@view.reload.apply(@view, args[1..])
			view.show() if view.is_visible() != true
	isTask : (task) ->
		@task() == task
	getViewTemplateID : (view) ->
		# returns template for subview
		return view.templateID
	getViewBoxTemplate : (view) ->
		switch view.transition.type
			when 'slide'
				'viewbox-slide'
			else
				'viewbox'
	getViewBoxIndex : (view_name) ->
		view = @views.name_map[view_name]
		arr.indexAt(view)
	getViewByIndex : (idx) ->
		@views()[idx]
	afterRender : =>
		if @transition.type == 'slide'
			return
			setTimeout =>
				idx = @getViewBoxIndex(@task())
				new_el = $(@element).find('.slide-item-' + idx)
				new_el.addClass('active')
			, 500
	ensure : (key, fn)=>
		@_ensure_fns ||= {}
		if fn?
			# write mode
			@_ensure_fns[key] = fn
		else
			# read mode
			unless (fn = @_ensure_fns[key]) == true
				fn()
				@_ensure_fns[key] = true
	toAPI : (flds)=>
		flds ||= @fields
		obj = {}
		for prop in flds
			val = null
			if typeof(@[prop].toAPI) == 'function'
				val = @[prop].toAPI()
			else if typeof(@[prop].toJS) == 'function'
				val = @[prop].toJS()
			else
				val = @[prop]()
			obj[prop] = QS.utils.prepareAPIParam(val)
		obj
	toAPIParam : (flds)=>
		QS.utils.prepareAPIParam(@toAPI(flds))
QS.View.registerComponent = (name, template_opts, view_class)->
	view_class ||= this
	QS.registered_components ||= {}

	if typeof(template_opts) == 'string'
		topts = {template_id: template_opts}
	else
		topts = template_opts
	topts.loader = 'QuickScript'
	QS.registered_components[name] = {template_opts: topts, view_class: view_class}
	ko.components.register name,
		viewModel :
			createViewModel : (params, componentInfo)->
				context = ko.contextFor(componentInfo.element)
				new_view = null
				new_view_class = view_class
				if params.view?
					if typeof(params.view) == 'function'
						new_view_class = params.view
					else
						new_view = params.view
			
				if !new_view?
					model = params.model
					owner = params.owner || context['$view'] || context['$parent'] || context['$root']
					vn = if model? then "#{name}-#{model.id?()}" else name
					new_view = new new_view_class(vn, owner, model, params)
				new_view.element = componentInfo.element if componentInfo?
				return new_view
		template: topts
QS.View.registerComponent 'view-element',
	html: """
		<!-- ko template : {nodes : $componentTemplateNodes} -->
		<!-- /ko -->
	"""

class QS.Host
	constructor : (url)->
		@url = url
		@headers = {}
		@requests = []
		@state = QS.Host.READY
		@before_request = null
		@process_request = (req)-> return req
		@process_response = (resp, status)-> return resp
	request : (req)=>
		#QS.log "#{req.method || "POST"} #{req.url} (#{@state})"
		# prepare request
		req.headers ||= {}
		@before_request?(req)

		if @state == QS.Host.PAUSED
			#QS.log "... adding request"
			@requests.push(req)
			req.loading?(true)
		else
			@executeRequest(req)
	executeQueuedRequests : =>
		while @requests.length > 0
			req = @requests.shift()
			#QS.log "Processing #{req.url}"
			@executeRequest(req)
	executeRequest : (req)=>
		req = @process_request(req)
		resp_fn = req.callback || req.success
		callback_fn = (resp, status)=>
			#QS.log "response : #{status}"
			resp = @process_response(resp, status)
			resp_fn?(resp, status)
		req.type = req.method = 'POST' if (!req.type? && !req.method?)
		req.url = @url + req.url
		req.success = callback_fn
		req.error = callback_fn if !req.error?
		for key, val of @headers
			req.headers[key] ||= val
		QS.ajax req
	pauseRequests : =>
		@state = QS.Host.PAUSED
	resumeRequests : =>
		#QS.log "Resuming #{@requests.length} requests"
		@state = QS.Host.READY
		@executeQueuedRequests()
QS.Host.READY = 1
QS.Host.PAUSED = 2
QS.Host.process_api_response = (resp, status)->
	if typeof(resp) == "string"
		resp = {success: false, meta : status, error : 'An error occurred.', data : resp}
	else
		resp


class QS.ModelAdapter
	constructor : (opts)->
		@save_url = null
		@load_url = null
		@index_url = null
		@host = QS.ModelAdapter.host
		@notifier = null
		@event_scope = null
		for prop,val of opts
			@[prop] = val
	setNotifier : (notif, scope)->
		@notifier = notif
		@event_scope = scope
	load : (opts)->
		opts.type = 'GET'
		opts.url = @load_url
		opts.data["_cv"] = Date.now() if opts.data?
		opts.event_name = "updated"
		@send opts
	index : (opts)->
		opts.type = 'GET'
		opts.url = @index_url || @load_url
		opts.data["_cv"] = Date.now() if opts.data?
		@send opts
	save_old : (opts)->
		$.ajax
			type : 'POST'
			url : @host + @save_url
			data : opts.data
			success : opts.success
			error : opts.error
	save : (opts)->
		opts.url = @save_url
		opts.event_name = "updated"
		@send opts
	send : (opts)->
		@host.request(opts)
	delete : (opts)->
		opts.type = 'DELETE'
		opts.url = @save_url
		opts.event_name = "deleted"
		@send opts
	add_method : (fn_name, fn)->
		@[fn_name] = fn.bind(this)
	route_method : (fn_name, url, http_m)->
		http_m ||= 'POST'
		@add_method fn_name, (opts)->
			opts.url = url
			opts.type = http_m
			@send opts
	add_endpoint : =>
		@route_method.apply(this, arguments)
			
QS.ModelAdapter.host = new QS.Host("/api/")

class QS.AccountAdapter
	constructor : (opts)->
		@login_url = "/account/login"
		@logout_url = "/account/logout"
		@register_url = "/account/register"
		@enter_code_url = "/account/enter_code"
		@reset_url = "/account/reset"
		@activate_url = "/account/activate"
		@save_url = "/account/save"
		@load_url = "/account"
		@login_key = "email"
		@password_key = "password"
		@host = QS.ModelAdapter.host
		for prop,val of opts
			@[prop] = val
	login : (opts)->
		opts.url = @login_url
		@send opts
	logout : (opts)->
		opts.url = @logout_url
		@send opts
	register : (opts)->
		opts.url = @register_url
		@send opts
	sendInviteCode : (opts)->
		opts.url = @enter_code_url
		@send opts
	save : (opts) ->
		opts.url = @save_url
		@send opts
	load : (opts) ->
		opts ||= {}
		opts.type = 'GET'
		opts.url = @load_url
		@send opts
	resetPassword : (login, opts)->
		opts.data = {}
		opts.data[@login_key] = login
		opts.url = @reset_url
		@send opts
	activate: (token, opts)->
		opts.data = {token : token}
		opts.url = @activate_url
		@send opts
	send : (opts)->
		@host.request(opts)
	delete : (opts)->
		opts.type = 'DELETE'
		opts.url = @save_url
		@send opts
	add_method : (fn_name, fn)->
		@[fn_name] = fn.bind(this)
	route_method : (fn_name, url, http_m)->
		http_m ||= 'POST'
		@add_method fn_name, (opts)->
			opts.url = url
			opts.type = http_m
			@send opts


QS.LocalStore =
	store: window.store
	isEnabled : ->
		return !QS.LocalStore.store.disabled
	set: (key, val)->
		if QS.LocalStore.isEnabled()
			QS.LocalStore.store.set(key, val)
		else
			console.log "LocalStore:: An attempt to write to the local store was ignored because the store is not enabled."
	get : (key)->
		if QS.LocalStore.isEnabled()
			QS.LocalStore.store.get(key)
		else
			console.log "LocalStore:: An attempt to read from the local store was ignored because the store is not enabled."
			return null
	remove : (key)->
		if QS.LocalStore.isEnabled()
			QS.LocalStore.store.remove(key)
		else
			console.log "LocalStore:: An attempt to remove from the local store was ignored because the store is not enabled."
			return null


class QS.Application extends QS.View
	constructor : (opts)->
		@app = this
		@opts = opts
		@location = window.history.location || window.location
		@path = ko.observable(null)
		@previous_path = ko.observable(null)
		@path_anchor = ko.observable('')
		@path_params = ko.observable({})
		@path_parts = []
		@title = ko.observable('')
		@redirect_on_login = ko.observable(null)
		@auth_method = @opts.auth_method || 'session'
		@redirect_on_login(QS.LocalStore.get('app.redirect_on_login'))
		@redirect_on_login.subscribe (val)=>
			QS.LocalStore.set('app.redirect_on_login', val)
		@configure()
		@account_model ||= (@opts.account_model || QS.Model)
		@current_user = new @account_model()
		@current_user_token = ko.observable(null)	# NOTE: always use getUserToken()

		@is_logged_in = ko.computed ->
			if @auth_method == 'session'
				!@current_user.is_new()
			else if @auth_method == 'token'
				@current_user_token()?
			else
				false
		, this
		@is_logged_in.subscribe (val)=>
			if val == true
				# redirect if necessary
				if (rol = @redirect_on_login())?
					@redirectTo(rol)
					@redirect_on_login(null)
				@app.trigger 'app.logged_in'
			else
				@app.trigger 'app.logged_out'
		super('app', null, null, @opts)
	configure : ->
	route : ->
		path = @location.pathname
		QS.log("Loading path '#{path}'")
		@setTitle(@name, true) unless @opts.update_title == false
		@previous_path(@path())
		@path_parts = path.split('/')
		@path_parts.push('') unless @path_parts[@path_parts.length-1] == ''
		@path(path)
		@path_params(QS.utils.getURLParams(@location.href))
		@path_anchor(@location.hash.substring(1))
		@handlePath(path)
		@app.trigger 'path.changed', path
	handlePath : (path) ->
	setUser : (data)->
		QS.log(data, 2)
		if data? then @current_user.handleData(data) else @current_user.reset()
	setUserToken : (data)->
		QS.log(data, 2)
		if data?
			token = new QS.AuthToken(data)
			QS.LocalStore.set('app.current_user_token', token.data)
			@current_user_token(token)
		else
			QS.LocalStore.set('app.current_user_token', null)
			@current_user_token(null)
	getUserToken : =>
		data = QS.LocalStore.get('app.current_user_token')
		token = if data? then new QS.AuthToken(data) else null
		# cache new token
		old_token = @current_user_token()
		if token? && old_token?
			if token.access_token != old_token.access_token
				@current_user_token(token)
		else if token != old_token
			@current_user_token(token)
		return token
	loadUser : (adapter)->
		adapter.load
			loading : @is_loading
			callback : (resp)=>
				@setUser(resp.data) if resp.meta == 200
				@route()
	updateUser : (adapter)->
		adapter.load
			callback : (resp)=>
				@setUser(resp.data) if resp.meta == 200
	redirectTo : (path, replace, opts) ->
		opts ||= {}
		setTimeout =>
			@redirect_on_login(opts.on_login) if opts.on_login?
			if replace? && replace == true
				history.replaceState(null, null, path)
			else
				history.pushState(null, null, path)
			@route()
		, 100
	loginTo : (path, opts)->
		opts ||= {}
		if !@redirect_on_login()?
			@redirect_on_login(path)
		@setUser(opts.user) if opts.user?
		@setUserToken(opts.token) if opts.token?
	logoutTo : (path, opts={})->
		cp = @app.path()
		@setUser(null)
		@setUserToken(null)
		if opts.save_path == true
			@setRedirectOnLogin(cp)
		@redirectTo(path)
	setRedirectOnLogin : (path, opts={})->
		opts.force = true if !opts.force?
		rol = @redirect_on_login()
		if opts.force == false && rol?
			return rol
		@redirect_on_login(path)
		return path
	runLater : (callback)->
		setTimeout callback, 10
	host : =>
		window.location.host
	setTitle : (title, setFull)->
		@title(title)
		setFull = setFull || false
		if setFull
			$('title').text(title)
		else
			$('title').text("#{@name} - #{title}")
	bindToBody : =>
		# layout bindings
		$('body').koBind(this)
		@afterRender()

		# override links
		app = this
		$('body').on 'click', 'a', ->
			if this.getAttribute("global") == "true" || QS.utils.isPresent(this.download)
				return true
			else if (this.origin == window.location.origin) && (app.opts.handle_links != false)
				app.redirectTo(this.href)
				return false
			else if (path = this.getAttribute('path'))?
				app.redirectTo(path)
				return true
			else
				return true


QuickScript.initialize = (opts)->

	# initialization
	QuickScript.initKO()
	app = new opts.app_class(opts)

	# navigation
	window.onpopstate = ->
		#QS.log 'handling state change'
		app.route()

	app.bindToBody()

	app.route()
	return app

