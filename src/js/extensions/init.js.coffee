QuickScript.initKO = ->
	# ko options
	#ko.options.deferUpdates = true

	# plugins
	ko.punches.enableAll()

	## PREPROCESSORS
	
	ko.punches.utils.setNodePreprocessor (node)->
		# only for <a> links
		if node.nodeType == 1 && node.nodeName == "A" && node.getAttribute('iref') != null
			iref = node.getAttribute('iref')
			click_db = "click : function() { App.redirectTo('#{iref}'); }"
			ko.utils.appendNodeDataBind(node, click_db)

	## COMPONENT LOADER

	ko.components.loaders.unshift
		loadTemplate : (name, config, callback)->
			#callback(null) if config.loader != 'QuickScript'

			errorCallback = (msg)->
				throw new Error("Component '#{name}': #{msg}.")
			applyStyles = (el)->
				if config.style?
					if typeof(config.style) == 'string'
						$('head').append("<style>#{config.style}</style>")
						callback(el)
					else
						$el = $(el)
						for sel, props of config.style
							$el.filter(sel).add($el.find(sel)).css(props)
						callback($el.toArray())
				else
					callback(el)
			if config.template_id? || typeof(config.element) == 'string'
				tid = config.template_id || config.element
				# check JST
				#QS.log "Looking for #{tid}"
				if JST? && (jst = JST[tid])?
					return applyStyles(ko.utils.parseHtmlFragment(jst()))
				else if (el = document.getElementById(tid))?
					applyStyles(ko.utils.parseHtmlFragment(el.text))
				else
					errorCallback("Template with id '#{tid}' not found")
			else if config.html?
				applyStyles(ko.utils.parseHtmlFragment(config.html))
			else if config.haml?
				errorCallback("You must include haml-js for haml support") if !Haml?
				html = Haml.render(config.haml.replace(/\t/g, "  "))
				applyStyles(ko.utils.parseHtmlFragment(html))
			else
				errorCallback("You must specify an element id or a markup")

	## TEMPLATE SOURCES

	class JSTTemplateSource
		constructor : (name)->
			@name = name
		text : (val)->
			if arguments.length == 0
				return JST[@name]()
			else
				JST[@name] = val
		data : (key, val)->
			jst = JST[@name]
			throw new Error("JST template not found.") if !jst?
			jst.data ||= {}
			if arguments.length > 1
				jst.data[key] = val
			else
				jst.data[key]
	ko.templateSources.jst = JSTTemplateSource

	templateEngine = new ko.nativeTemplateEngine()
	templateEngine.makeTemplateSource = (template, templateDocument)->
		if (typeof template == "string")
			templateDocument = templateDocument || document
			if JST? && (jst = JST[template])
				return new ko.templateSources.jst(template) if jst?
			if (elem = templateDocument.getElementById(template))
				return new ko.templateSources.domElement(elem)
			throw new Error("Cannot find template with ID " + template)
		else if (template.nodeType == 1 || template.nodeType == 8)
			return new ko.templateSources.anonymousTemplate(template)
		else
			throw new Error("Unknown template type: " + template)

	ko.setTemplateEngine(templateEngine)


	QS.initKOUtils()
	QS.initKOBindings()
	QS.initKOExtenders()
