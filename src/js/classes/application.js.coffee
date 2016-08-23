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
		@window_bounds = ko.observable({scrollTop: 0, width: 0, height: 0}).extend({rateLimit : 100})
		

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
		$(window).on 'scroll resize', =>
			@updateWindowBounds()
		@updateWindowBounds()
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
	navigateTo : (url)=>
		window.location.href = url
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
	updateWindowBounds : =>
		$window = $(window)
		ret =
			scrollTop: $window.scrollTop()
			width: $window.width()
			height: $window.height()
		@window_bounds(ret)

