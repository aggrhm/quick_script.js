window.QuickScript = window.QS = {}

QuickScript.log = (msg, lvl)->
	lvl ||= 1
	console.log(msg) if (QS.debug == true && lvl <= QS.log_level)
QuickScript.debug ||= true
QuickScript.log_level ||= 5
QuickScript.start_time = Date.now()
QuickScript.time = ->
	now = Date.now()
	return (now - QS.start_time) / 1000.0


QuickScript.install = (scope)->
	cns = ['Application', 'View', 'Model', 'FileModel', 'Collection', 'ViewCollection', 'Host', 'ModelAdapter', 'AccountAdapter', 'LocalStore']
	others = ['PageTimer', 'Notifier', 'AuthToken', 'TimeLength', 'SelectOpts', 'SupportManager', 'AssetsLibrary']
	install_class = (name)->
		scope[name] = QuickScript[name]
	for name in cns
		install_class(name)
	for name in others
		install_class(name)


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


