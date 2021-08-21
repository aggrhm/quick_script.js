QuickScript.initKOUtils = ->
  ## UTILS
  
  ko.utils.appendNodeDataBind = (node, bind)->
    db = node.getAttribute('data-bind')
    if db?
      node.setAttribute('data-bind', "#{db}, #{bind}")
    else
      node.setAttribute('data-bind', bind)
        
  
  ko.absorbModel = (data, self) ->
    for prop, val of data
      continue if typeof(val) == "function"
      if !self[prop]?
        if self.submodels? && self.submodels[prop]?
          # add submodel
          ko.addSubModel(prop, self.submodels[prop], self)
          self[prop].handleData(val)
        else
          # add regular observable
          #self[prop] = ko.observable(val)
          ko.addField(prop, val, self)
      else if (typeof(self[prop].handleData) == "function")
        self[prop].handleData(val)
      else
        self[prop](val)
      self.fields.pushOnce(prop)

  ko.addFields = (fields, val, self) ->
    for prop in fields
      ko.addField prop, val, self

  ko.addField = (field, val, valid_fn, self) ->
    if !self?
      self = valid_fn
      valid_fn = null
    if (typeof(self[field]) != "function")
      if (val instanceof Array)
        self[field] = ko.observableArray(val)
      else
        self[field] = ko.observable(val)

      self["#{field}_valid"] = ko.computed( (-> (valid_fn.bind(self))(self[field]())), self) if valid_fn?
    else
      self[field](val)
    if (typeof(field) == "string")
      self.fields.pushOnce(field)
      self.field_defaults[field] = val
  
  ko.addComputed = (field, fn_opts, self) ->
    opts = {}
    if QS.utils.isFunction(fn_opts)
      opts = {read: fn_opts, pure: true}
    else
      opts = fn_opts
    opts.owner = self
    opts.deferEvaluation = true
    opts.pure = true unless opts.pure?
    c = self[field] = ko.computed opts, self
    self.disposeLater?(c)
    return c
  
  ko.validate_for = (field, fn, msg, self) ->
    self.validations = {} unless self.validations?
    self.validations[field] = [] unless self.validations[field]?
    self.validations[field].push {test : fn.bind(self), msg : msg}
    self[field].is_valid = ko.computed ->
      valid = true
      for val_obj in self.validations[field]
        valid &&= val_obj.test(self[field]())
      valid
    , self unless self[field].is_valid?


  ko.validate_fields = (fields, fn, self) ->
    msgs = []
    for field in fields
      for val_obj in self.validations[field]
        if !val_obj.test(self[field]())
          msgs.push val_obj.msg
    fn(msgs)

  ko.addSubModel = (field, model, self) ->
    if self[field]?
      self[field].reset()
    else
      self[field] = new model({}, null, {parentModel: self})
    self.fields.pushOnce(field) if typeof(field) == "string"

  ko.intercepter = (observable, write_fn, self) ->
    underlying_observable = observable
    return ko.dependentObservable
      read: underlying_observable,
      write: (val) ->
        if (val != underlying_observable())
          write_fn.call(self, underlying_observable, underlying_observable(), val)

  ko.dirtyFlag = (root, isInitiallyDirty) ->
      result = ->
      _initialState = ko.observable(ko.toJSON(root))
      _isInitiallyDirty = ko.observable(isInitiallyDirty)

      result.isDirty = ko.dependentObservable ->
        return _isInitiallyDirty() || (_initialState() != ko.toJSON(root))

      result.reset = ->
        _initialState(ko.toJSON(root))
        _isInitiallyDirty(false)

      return result

  ko.copyObject = (obj, fields) ->
    ret = {}
    for prop in fields
      ret[prop] = obj[prop]
    return ret

  ko.addTemplate = (templateName, templateMarkup) ->
    QS.utils.addTemplate(templateName, templateMarkup)

  ko.onNodeDisposed = (node, fn)->
    ko.utils.domNodeDisposal.addDisposeCallback(node, fn)

  ko.modelStates = {}
  ko.modelStates.READY = 1
  ko.modelStates.LOADING = 2
  ko.modelStates.SAVING = 3
  ko.modelStates.EDITING = 4
  ko.modelStates.INSERTING = 5
  ko.modelStates.APPENDING = 6
  ko.modelStates.UPDATING = 7
  ko.modelStates.DELETING = 8
  ko.editors = {}

  jQuery.fn.extend
    to_s : ->
      $('<div>').append(this.clone()).remove().html()
    koBind : (viewModel) ->
      this.each ->
        $(this).koClean()
        #$(this).attr('data-bind', "template : '#{tmpl}'") if tmpl?
        ko.applyBindings(viewModel, this)
    koClean : ->
      this.each ->
        #$(this).removeAttr('data-bind')
        ko.cleanNode(this)


  ko.addTemplate "viewbox", """
      <div data-bind='foreach : {data: views(), as: \"$view\"}'>
        <div data-bind="fadeVisible : is_visible(), template : { name : getViewTemplateID, afterRender : afterRender, if : is_visible() }, attr : { id : templateID, 'class' : templateID }, bindelem : true"></div>
      </div>
    """
  ko.addTemplate "viewbox-plain", """
      <div data-bind='foreach : {data: views(), as: \"$view\"}'>
        <div data-bind="template : { name : getViewTemplateID, afterRender : afterRender, if : is_visible() }, attr : { id : templateID, 'class' : templateID }, bindelem : true"></div>
      </div>
    """
  ko.addTemplate "viewbox-slide", """
      <div class="view-slider" data-bind="style : {width : transition.opts.width + 'px', height : transition.opts.height + 'px'}, carousel : {}">
        <div data-bind='foreach : views()'>
          <div class="slide-item" data-bind="template : { name : getViewTemplateID }, attr : {id : templateID, class : 'slide-item slide-item-' + $index()}, css : {}, style : {width : owner.transition.opts.width + 'px', height : owner.transition.opts.height + 'px'}, bindelem : true"></div>
        </div>
      </div>
    """
