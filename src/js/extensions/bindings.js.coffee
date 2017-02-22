QuickScript.initKOBindings = ->
	# binding handlers
	ko.bindingHandlers.viewbox =
		init : (element, valueAccessor, bindingsAccessor, viewModel, bindingContext) ->
			ko.applyBindingsToNode(element, {template : 'viewbox'}, bindingContext)

	ko.bindingHandlers.fadeVisible =
		init : (element, valueAccessor) ->
			shouldDisplay = ko.unwrap(valueAccessor())
			if shouldDisplay then $(element).show() else $(element).hide()
		update : (element, valueAccessor, bindingsAccessor) ->
			bopts = bindingsAccessor()
			def_opts = ko.bindingHandlers.fadeVisible.defaults
			fadeInSpeed = bopts.fadeInSpeed || def_opts.fadeInSpeed
			fadeOutSpeed = bopts.fadeOutSpeed || def_opts.fadeOutSpeed
			shouldDisplay = ko.unwrap(valueAccessor())
			$el = $(element)
			if shouldDisplay
				$el.fadeIn(fadeInSpeed)
			else
				if fadeOutSpeed?
					$el.fadeOut(fadeOutSpeed)
				else
					$el.hide()
		defaults:
			fadeInSpeed: 'slow'
			fadeOutSpeed: null

	ko.bindingHandlers.slideVisible =
		init : (element, valueAccessor) ->
			shouldDisplay = ko.utils.unwrapObservable(valueAccessor())
			if shouldDisplay then $(element).show() else $(element).hide()
		update : (element, valueAccessor, allBindings) ->
			shouldDisplay = ko.utils.unwrapObservable(valueAccessor())
			speed = allBindings.get('slideVisibleSpeed') || 'fast'
			if shouldDisplay then $(element).slideDown(speed) else $(element).slideUp(speed)
	
	ko.bindingHandlers.visibleWithText =
		update : (element, valueAccessor) ->
			text = ko.unwrap(valueAccessor())
			$(element).text(text)
			if (text? && text.length > 0) then $(element).show() else $(element).hide()

	ko.bindingHandlers.dim =
		init : (element, valueAccessor) ->
			shouldDim = ko.utils.unwrapObservable(valueAccessor())
			if shouldDim then $(element).css({opacity : 0.3}) else $(element).css({opacity: 1.0})
		update : (element, valueAccessor) ->
			shouldDim = ko.utils.unwrapObservable(valueAccessor())
			if shouldDim then $(element).animate({opacity : 0.3}) else $(element).animate({opacity: 1.0})

	# buttonStatus - [is_loading, ready_str, loading_str, icon_classes]
	ko.bindingHandlers.buttonStatus =
		update : (element, valueAccessor) ->
			opts = ko.utils.unwrapObservable(valueAccessor())
			if opts[0]
				$(element).html(opts[2])
				$(element).attr('disabled', 'true')
			else
				if opts[3]?
					txt = "<i class='#{opts[3]}'></i> #{opts[1]}"
				else
					txt = opts[1]
				$(element).html(txt)
				$(element).removeAttr('disabled')

	# listStatus - [collection, none_str, loading_str, list]
	ko.bindingHandlers.listStatus =
		init : (element, valueAccessor, bindingsAccessor, viewModel) ->
			opts = ko.utils.unwrapObservable(valueAccessor())
			opts = {collection : opts[0], empty_str : opts[1], loading_str : opts[2], list : opts[3] || opts[0].items} if opts instanceof Array
			ko.computed ->
				if opts.collection.is_loading()
					if opts.loading_img?
						$(element).html("<img src='#{opts.loading_img}'/>")
					else
						$(element).html(opts.loading_str)
					$(element).show('fast')
				else
					if opts.list().length > 0
						$(element).hide('fast')
					else
						$(element).show()
						$(element).html(opts.empty_str)
			, viewModel
			#fn()
			#opts.list.is_loading.subscribe(fn)

	ko.bindingHandlers.loading =
		init : (element, valueAccessor, allBindings, viewModel, bindingContext) ->
			$el = $(element)
			# build html element
			loading_obs = ko.observable(false)
			loading_text = allBindings.get('loadingText') || ''
			new_context = bindingContext.extend({'$loadingObservable': loading_obs})
			html = """
			{{#if : $loadingObservable }}
			<i class='#{ko.bindingHandlers.loading.icon_class}'/> #{loading_text}
			{{/if }}
			{{#ifnot : $loadingObservable }}
			#{$el.html()}
			{{/ifnot }}
			"""
			$el.html(html)
			ko.applyBindingsToDescendants(new_context, element)
			sub = ko.computed ->
				is_loading = ko.unwrap(valueAccessor())
				new_context.$loadingObservable(is_loading)
				if is_loading
					$el.attr('disabled', 'true')
				else
					$el.removeAttr('disabled')
			ko.utils.domNodeDisposal.addDisposeCallback element, ->
				sub.dispose()
			return {controlsDescendantBindings: true}
		icon_class: 'fa fa-circle-o-notch fa-spin'

	ko.bindingHandlers.handleEnter =
		init : (element, valueAccessor, bindingsAccessor, viewModel) ->
			$(element).keypress (ev)->
				if (ev.keyCode == 13 && !ev.shiftKey)
					action = valueAccessor()
					val = bindingsAccessor().value || bindingsAccessor().textInput
					val($(element).val())
					action?.call(viewModel)

					if bindingsAccessor().handleEnterShouldBlur?
						$(element).blur()

					return false

	ko.bindingHandlers.handleTab =
		init : (element, valueAccessor, bindingsAccessor, viewModel) ->
			$(element).keydown (ev)->
				if (ev.keyCode == 9 && !ev.shiftKey)
					action = valueAccessor()
					val = bindingsAccessor().value
					val($(element).val())
					action.call(viewModel)
					return false

	ko.bindingHandlers.selected =
		update : (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) ->
			selected = ko.utils.unwrapObservable(valueAccessor())
			element.select() if selected

	ko.bindingHandlers.touchstart =
		init : (element, valueAccessor, bindingsAccessor, viewModel) ->
			element.addEventListener('touchstart', valueAccessor().bind(viewModel))

	ko.bindingHandlers.validate =
		update : (element, valueAccessor, bindingsAccessor, viewModel) ->
			opts = valueAccessor()
			test_fn = bindingsAccessor().value.is_valid
			err_css = 'field_invalid'
			ok_css = 'field_valid'
			if test_fn()
				$(element).removeClass(err_css)
				$(element).addClass(ok_css)
			else
				$(element).removeClass(ok_css)
				$(element).addClass(err_css)
				#opts.on_err() if opts.on_err?

	ko.bindingHandlers.allowChars =
		update : (element, valueAccessor, bindingsAccessor, viewModel) ->
			reg = new RegExp(valueAccessor(), 'g')
			$(element).keyup (ev)->
				if this.value.match(reg)
					this.value = this.value.replace(reg, '')

	ko.bindingHandlers.cropImage =
		update : (element, valueAccessor) ->
			opts = valueAccessor()
			if opts[0]?
				$(element).css
					backgroundImage : 'url(' + ko.utils.unwrapObservable(opts[0]) + ')',
					backgroundSize: 'cover',
					'background-position': 'center',
					width: opts[1],
					height: opts[2],
					display: 'inline-block'

	ko.bindingHandlers.containImage =
		update : (element, valueAccessor) ->
			opts = valueAccessor()
			if opts[0]?
				$(element).css
					backgroundImage : 'url(' + ko.utils.unwrapObservable(opts[0]) + ')',
					backgroundSize: 'contain',
					'background-position': 'center',
					backgroundRepeat: 'no-repeat',
					width: opts[1],
					height: opts[2],
					display: 'inline-block'

	ko.bindingHandlers.fadeInImage =
		update : (element, valueAccessor) ->
			src = ko.utils.unwrapObservable(valueAccessor())
			$(element).css(opacity: 0)
			img = new Image()
			img.onload = ->
				$(element).animate({opacity: 1.0}, 1000)
				element.src = src if element.tagName == "IMG"
			img.src = src

	ko.bindingHandlers.onImageLoad =
		init : (element, valueAccessor) ->
			element.onload = ->
				valueAccessor()(element)

	ko.bindingHandlers.preloadImage =
		init : (element, valueAccessor) ->
			opts = valueAccessor()
			img = new Image()
			img.onload = ->
				opts.after(element)
			img.src = opts.src
	
	ko.bindingHandlers.toggleHover =
		init: (element, valueAccessor, allBindingsAccessor) ->
			$(element).on 'mouseover', ->
				valueAccessor()(true)
			$(element).on 'mouseout', ->
				valueAccessor()(false)

	ko.bindingHandlers.checkedInt =
		init: (element, valueAccessor, allBindingsAccessor) ->
			observable = valueAccessor()
			interceptor = ko.computed
				read: ->
					return observable().toString()
				write: (newValue) ->
					observable(+newValue)
				owner: this
			ko.applyBindingsToNode(element, { checked: interceptor })

	ko.bindingHandlers.untabbable =
		update : (element, valueAccessor, bindingsAccessor, viewModel) ->
			if (valueAccessor())
				$(element).find('iframe, input, textarea, a, iframe').attr('tabIndex', -1)
			else
				$(element).find('input, textarea, a, iframe').removeAttr('tabIndex')

	ko.bindingHandlers.carousel =
		init : (element, valueAccessor, bindingsAccessor, viewModel) ->
			setTimeout ->
				idx = viewModel.getViewBoxIndex(viewModel.task())
				new_el = $(element).find('.slide-item-' + idx).first()
				#new_el.addClass('active')
			, 0
		update : (element, valueAccessor, bindingsAccessor, viewModel) ->
				opts = viewModel.transition.opts
				if viewModel.task() != null
					setTimeout ->
						idx = viewModel.getViewBoxIndex(viewModel.task())
						console.log(viewModel.name + ': updating slider to ' + idx)
						old_idx = opts.slide_index()
						new_el = $(element).find('.slide-item-' + idx).first()
						old_el = $(element).find('.slide-item-' + old_idx).first()
						if idx > old_idx
							new_el.addClass('next')
							new_el[0].offsetWidth if new_el[0]?
							old_el.addClass('left')
							new_el.addClass('left')
						else
							new_el.addClass('prev')
							new_el[0].offsetWidth if new_el[0]?
							old_el.addClass('right')
							new_el.addClass('right')
						setTimeout ->
							new_el.removeClass('next left prev right')
							old_el.removeClass('next left prev right')
							old_el.removeClass('active')
							new_el.addClass('active')
						, 600
						opts.slide_index(idx)
					, 0
	
	ko.bindingHandlers.formError =
		update : (element, valueAccessor) ->
			error = ko.unwrap(valueAccessor())
			$el = $(element)
			# reset element
			$el.removeClass('has-error')
			$el.find('.help-block-error').remove()

			if error?
				$el.addClass('has-error')
				$el.append("<div class='help-block help-block-error'>#{error}</div>")

	ko.bindingHandlers.bindelem =
		init : (element, valueAccessor, bindingsAccessor, viewModel) ->
			val = valueAccessor()
			if val == true
				el_str = "element"
			else
				el_str = val
			viewModel[el_str] = element
			setTimeout ->
				viewModel.onElementBound?(el_str, element)
			, 50

	ko.bindingHandlers.jsfileupload =
		init : (element, valueAccessor, bindingsAccessor, viewModel) ->
			model = valueAccessor()
			$(element).fileupload(model.input.options)
			$(element).change (evt)->
				model.input.files(evt.target.files)
			model.fileupload = $(element).fileupload.bind($(element))
			model.selectFile = ->
				$(element).click()

	ko.bindingHandlers.fileupload =
		init : (element, valueAccessor, bindingsAccessor, viewModel) ->
			model = valueAccessor()
			$(element).change (evt)->
				model.input.files(evt.target.files)
			model.selectFile = model.promptFile = ->
				$(element).click()

	ko.bindingHandlers.fileselect =
		init : (element, valueAccessor, bindingsAccessor, viewModel) ->
			handler = valueAccessor()
			$el = $(element)
			name = $el.attr('name')
			$el.change (ev)->
				files = ev.target.files
				handler(files, {event: ev, view: viewModel, element: element})
			viewModel.file_inputs ||= {}
			viewModel.file_inputs[name] = {
				element: element
				promptFile: ->
					$el.click()
			}
			ko.utils.domNodeDisposal.addDisposeCallback element, ->
				viewModel.file_inputs[name] = null if viewModel.file_inputs?


	ko.bindingHandlers.filedrop =
		init : (element, valueAccessor, bindingsAccessor, viewModel) ->
			$el = $(element)
			dest = valueAccessor()
			$el.on 'dragover', (ev)->
				ev.preventDefault()
				ev.originalEvent.dataTransfer.dropEffect = 'copy'
			$el.on 'drop', (ev)->
				ev.stopPropagation()
				ev.preventDefault()
				files = ev.originalEvent.dataTransfer.files
				if dest.input? && dest.input.files?
					dest.input.files(files)
				else
					dest?(files, {event: ev, view: viewModel, element: element})

	ko.bindingHandlers.jqtabs =
		init : (element, valueAccessor, bindingsAccessor, viewModel) ->
			$(element).addClass('ui-tabs ui-widget ui-widget-content ui-corner-all')
			$(element).children('ul').first().addClass('ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all')
			$(element).children('ul').first().children('li').addClass('ui-state-default ui-corner-top')
			$(element).children('div').addClass('ui-tabs-panel ui-widget-content ui-corner-bottom')
			$(element).children('ul').first().find('li a').each (idx, el)->
				tab_id = $(el).parent()[0].id
				$(el).click ->
					valueAccessor()(tab_id)
		update : (element, valueAccessor, bindingsAccessor, viewModel) ->
			sel_tab = ko.utils.unwrapObservable(valueAccessor())
			$(element).children('ul').first().children('li').removeClass('ui-tabs-selected ui-state-active')
			$(element).children('ul').first().children("li##{sel_tab}").addClass('ui-tabs-selected ui-state-active')
			$(element).children('div').addClass('ui-tabs-hide')
			$(element).children("div##{sel_tab}").removeClass('ui-tabs-hide')

	ko.bindingHandlers.tabs =
		init : (element, valueAccessor, bindingsAccessor, viewModel) ->
			$(element).children('li').each (idx, el)->
				tab_id = $(el)[0].id
				$(el).click ->
					valueAccessor()(tab_id)
		update : (element, valueAccessor, bindingsAccessor, viewModel) ->
			sel_tab = ko.utils.unwrapObservable(valueAccessor())
			$(element).children('li').removeClass('active')
			$(element).children("li##{sel_tab}").addClass('active')
	ko.bindingHandlers.tab_views =
		update : (element, valueAccessor, bindingsAccessor, viewModel) ->
			sel_tab = ko.utils.unwrapObservable(valueAccessor())
			$(element).children('div').addClass('hidden').removeClass('active')
			$(element).children("div##{sel_tab}").addClass('active').removeClass('hidden')

	ko.bindingHandlers.tabpanes =
		init : (element, valueAccessor, bindingsAccessor, viewModel) ->
			# find panes
			$el = $(element)
			$panes = $el.children('pane')
			pane_data = $panes.toArray().map (p)->
				$p = $(p)
				return {
					title: $p.attr('title'),
					key: $p.attr('data-key'),
					html: p.innerHTML,
					visible: $p.attr('data-visible')
				}

			# prepare observable
			tab_obs = valueAccessor()
			viewModel[tab_obs] = ko.observable(pane_data[0].key) unless viewModel[tab_obs]?

			# build panes properly
			str = "<div class='tabbable'><ul class='nav nav-tabs'>"
			for pane in pane_data
				click_db = "click : function(){#{tab_obs}('#{pane.key}');}"
				visible_db = if pane.visible? then ", visible : #{pane.visible}" else ""
				str += "<li data-bind=\"css : {active : #{tab_obs}() == '#{pane.key}'}\"><a href='' data-bind=\"#{click_db}#{visible_db}\">#{pane.title}</a></li>"
			str += "</ul>"
			str += "<div class='tab-content'>"
			for pane in pane_data
				str += "<div class='tab-pane' data-bind=\"css : {active : #{tab_obs}() == '#{pane.key}'}\">#{pane.html}</div>"
			str += "</div></div>"
			element.innerHTML = str

			# bindings applied automatically to descendants

	ko.bindingHandlers.calendar =
		init : (element, valueAccessor, bindingsAccessor, viewModel) ->
			console.log('calendar init')
			$(element).fullCalendar('destroy')
			opts = $.extend({}, ko.utils.unwrapObservable(valueAccessor()))
			$(element).fullCalendar(opts)
			viewModel.calendar = $(element).fullCalendar.bind($(element))

	ko.bindingHandlers.center =
		init : (element, valueAccessor, bindingsAccessor, viewModel) ->
			fn = ->
				setTimeout ->
						$(element).center()
					, 1
			viewModel.task.subscribe(fn)
			viewModel.is_visible.subscribe(fn)

	ko.bindingHandlers.placeholder =
		init: (element, valueAccessor) ->
			fn = ->
				if ($(element).val().length > 0)
					$(element).siblings('label').hide()
				else
					$(element).siblings('label').show()
			$(element).on('blur change keyup', fn)
		update: (element, valueAccessor) ->
			if ($(element).val().length > 0)
				$(element).siblings('label').hide()
			else
				$(element).siblings('label').show()

	ko.bindingHandlers.linkify =
		update : (element, valueAccessor, bindingsAccessor, viewModel, bindingContext) ->
			text = ko.utils.unwrapObservable(valueAccessor())
			$(element).html(QS.utils.linkify(text))
	
	# radioClick : [<observable>, <value>]
	ko.bindingHandlers.radioClick =
		init : (element, valueAccessor) ->
			obs = valueAccessor()[0]
			val = valueAccessor()[1]
			$(element).click ->
				obs(val)
				return false
		update : (element, valueAccessor) ->
			obs = valueAccessor()[0]
			val = valueAccessor()[1]
			if obs() == val
				$(element).addClass('active')
			else
				$(element).removeClass('active')
	
	ko.bindingHandlers.viewComponents =
		init : (element, valueAccessor, bindingsAccessor, viewModel, bindingContext) ->
			$el = $(element)
			opts = valueAccessor()
			name = opts.name
			data = opts.data
			owner = opts.owner || viewModel
			view = opts.view || QS.View
			params = opts.params || {}
			params.owner ||= owner
			feopts = opts.foreach || {}
			feopts.data = data
			if !ko.components.isRegistered(name)
				# component not registered, add it
				#tpl = $el.html()
				tpl = (node.outerHTML for node in ko.virtualElements.childNodes(element)).join(" ")
				tpl_name = "component-#{name}"
				ko.addTemplate tpl_name, tpl
				view.registerComponent(name, tpl_name)
			bc = {}
			bc.$componentOwner = owner
			bc.$componentCollectionData = data
			bc.$componentCollectionParams = params
			bc.$componentParamsForContext = (context)->
				return $.extend({model: context.$data}, context.$componentCollectionParams)
			$tpl = $("
				<!-- ko component : {name: '#{name}', params: $componentParamsForContext($context)} -->
				<!-- /ko -->
			")
			ko.virtualElements.setDomNodeChildren(element, $tpl)
			ko.applyBindingsToNode(element, {foreach: feopts}, bindingContext.extend(bc))
			return {controlsDescendantBindings: true}
	ko.virtualElements.allowedBindings.viewComponents = true

	ko.bindingHandlers.withView =
		init : (element, valueAccessor, bindingsAccessor, viewModel, bindingContext) ->
			view_class = valueAccessor()
			view_options = bindingsAccessor().withViewOptions || bindingsAccessor().viewOptions || {}
			view_options.element = element
			view_options.model ||= bindingsAccessor().withViewModel
			view_options.owner ||= bindingsAccessor().withViewOwner
			owner = view_options.owner || bindingContext['$view'] || bindingContext['$parent'] || bindingContext['$root']
			model = view_options.model
			view = new view_class("view", owner, model, view_options)
			child_context = bindingContext.createChildContext(view)
			child_context.$view = view
			ko.utils.domNodeDisposal.addDisposeCallback element, ->
				view.dispose?()
			ko.applyBindingsToDescendants(child_context, element)
			return {controlsDescendantBindings: true}
	ko.virtualElements.allowedBindings.withView = true

	ko.bindingHandlers.updateContext =
		init : (element, valueAccessor, bindingsAccessor, viewModel, bindingContext) ->
			props = valueAccessor()
			if typeof(props) == "string"
				bindingContext[props] = viewModel
			else
				for prop, val of props
					bindingContext[prop] = val
	ko.bindingHandlers.context = ko.bindingHandlers.updateContext
	ko.bindingHandlers.scopeAs =
		init : (element, valueAccessor, bindingsAccessor, viewModel, bindingContext) ->
			prop = valueAccessor()
			vr = {}
			vr[prop] = viewModel
			new_context = bindingContext.extend(vr)
			ko.applyBindingsToDescendants(new_context, element)
			return {controlsDescendantBindings: true}
	ko.virtualElements.allowedBindings.scopeAs = true

	ko.bindingHandlers.app =
		init : (element, valueAccessor, bindingsAccessor, viewModel, bindingContext)->
			# update binding context createChildContext function
			orig_child_fn = bindingContext.constructor.prototype['createChildContext']
			bindingContext.constructor.prototype['createChildContext'] = ->
				ctx = orig_child_fn.apply(this, arguments)
				if arguments[0] instanceof QS.View
					view = arguments[0]
					ctx['$view'] = view
					ctx[view.bindingContextVariable] = view if view.bindingContextVariable?
				return ctx

			new_context = bindingContext.extend('$app': viewModel, '$view': viewModel)
			viewModel.bindingContext = bindingContext
			ko.applyBindingsToDescendants(new_context, element)
			return {controlsDescendantBindings: true}

	ko.bindingHandlers.onScrollVisible =
		init : (element, valueAccessor, bindingsAccessor, viewModel, bindingContext)->
			fn = valueAccessor()
			bounds = bindingsAccessor.get('scrollVisibleBounds') || bindingContext['$app'].window_bounds
			bounds_sub = null
			check_if_visible = (val)->
				if val? && viewModel.is_scrolled_visible != true && QS.utils.elementWithinBounds(element, val)
					fn(viewModel)
					viewModel.is_scrolled_visible = true
			bounds_sub = bounds.subscribe check_if_visible

			check_if_visible(bounds())

			ko.utils.domNodeDisposal.addDisposeCallback element, ->
				bounds_sub.dispose() if !bounds_sub?


