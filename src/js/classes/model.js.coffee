class QS.Model
	init : ->
	extend : ->
	constructor: (data, collection, opts) ->
		@_uuid = QS.utils.uuid()
		@fields = []
		@field_defaults = {}
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
	load : (data, opts)->
		opts = {callback: opts} if (!opts?) || (opts instanceof Function)
		data.includes = opts.includes if opts.includes?
		@adapter.load
			data : data
			success : (resp)=>
				ret_data = if opts.fields? then ko.copyObject(resp.data, opts.fields) else resp.data
				@handleData(ret_data)
				opts.callback?(resp)
		@model_state(ko.modelStates.LOADING)
	reloadFields : (fields, opts)->
		opts = {callback: opts} if (!opts?) || (opts instanceof Function)
		data = @reloadOpts()
		opts.fields = fields
		@load(data, opts)
	reload : (opts)->
		opts = {callback: opts} if (!opts?) || (opts instanceof Function)
		data = @reloadOpts()
		@load(data, opts)
	reloadOpts : =>
		{id : @id()}
	save : (fields, opts) ->
		opts = {callback: opts} if (!opts?) || (opts instanceof Function)
		QS.log("Saving fields #{fields}")
		if (@model_state() != ko.modelStates.READY)
			QS.log("Save postponed.")
			return
		if fields instanceof Array
			data = @toAPI(fields)
		else
			data = fields
		$.extend(data, opts.data) if opts.data?
		data.id = @id()
		@adapter.save
			data: data
			progress : (ev, prog)=>
				@save_progress( prog )
			callback : (resp, status)=>
				@handleData(resp.data)
				opts.callback?(resp, status)
		@model_state(ko.modelStates.SAVING)
	reset : ->
		#@model_state(ko.modelStates.LOADING)
		@resetFields()
		@save_progress(0)
		@model_state(ko.modelStates.READY)
	resetFields : (fields)->
		fields ||= @fields
		for field in fields
			prop = this[field]
			if prop.reset?
				prop.reset()
			else
				prop(@field_defaults[field])
		@db_state(@toJS())
	resetAuxillaryFields : ->
		fields = @fields.filter (f)-> f != 'id'
		@resetFields(fields)
	delete : (fields, opts)=>
		opts = {callback: opts} if (!opts?) || (opts instanceof Function)
		fields ||= ['id']
		if (@model_state() != ko.modelStates.READY)
			QS.log("Delete postponed.")
			return
		data = @toJS(fields)
		data.id = @id()
		@adapter.delete
			data : data
			success : (resp)=>
				@handleData(resp.data)
				@collection.handleItemDelete(resp.data) if @collection?
				opts.callback?(resp)
			error : (resp)=>
				QS.log("Delete error encountered")
				@model_state(ko.modelStates.READY)
				opts.callback?(resp)
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


