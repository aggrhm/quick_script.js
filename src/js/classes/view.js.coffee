class QS.View
	QuickScript.includeEventable(this)
	init : ->
	constructor : (@name, @owner, @model, @opts)->
		@app = @owner.app if @owner?
		@views = ko.observableArray([])
		@registered_views = {}
		@views.name_map = {}
		@events = {}
		@opts ||= {}
		@disposables = []
		#@templateID ||= "view-#{@name}"
		@fields = []
		@field_defaults = {}
		@element = @opts.element if @opts.element?
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
	registerView : (name, view_class, opts={}) ->
		@registered_views[name] = {view_class: view_class, opts: opts}
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
		# lazy add view if registered
		rvo = @registered_views[view_name]
		if rvo?
			@addView view_name, rvo.view_class, rvo.opts
			@registered_views[view_name] = null
		last_view = @view
		view = @views.name_map[view_name]
		if (last_view != view)
			last_view.hide() if last_view?
			if view?
				setTimeout =>		# allow the hidden view to settle
					QS.log("View [#{view.name}] selected.", 2)
					view.load.apply(view, args[1..])
					window.onbeforeunload = view.events.before_unload
					view.show()
					@view = view
					@prev_task(@task())
					@task(view.name)
				, 50
			else
				QS.log("Subview unselected in #{@name}.", 2)
				@view = null
				@prev_task(@task())
				@task(null)
		else
			@view.reload.apply(@view, args[1..])
			view.show() if view.is_visible() != true
	template : =>
		return {name: @templateID, data: this}
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
	is_sync = topts.synchronous || false
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
					params.element = componentInfo?.element
					new_view = new new_view_class(vn, owner, model, params)
				else
					new_view.element = componentInfo?.element
				return new_view
		template: topts
		synchronous: is_sync
QS.View.registerComponent 'view-element',
	html: """
		<!-- ko template : {nodes : $componentTemplateNodes} -->
		<!-- /ko -->
	"""

