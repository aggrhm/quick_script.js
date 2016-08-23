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


