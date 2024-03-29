class QS.Application extends QS.View
  constructor : (opts)->
    @app = this
    @opts = opts
    # path
    @location = window.history.location || window.location
    @path_info = ko.observable({})
    @path = ko.observable(null)
    @previous_path = ko.observable(null)
    @path_anchor = ko.observable('')
    @path_params = ko.observable({})
    @path_parts = []
    @title = ko.observable('')
    @auth_method = @opts.auth_method || 'session'
    @configure()
    @account_model ||= (@opts.account_model || QS.Model)
    @current_user = new @account_model()
    @current_user_token = ko.observable(null) # NOTE: always use getUserToken()
    @window_bounds = ko.observable({scrollTop: 0, width: 0, height: 0}).extend({rateLimit : 100})
    @flash = QS.LocalStore.get('flash')
    QS.LocalStore.remove('flash') if @flash?

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
        @app.trigger 'app.logged_in'
      else
        @app.trigger 'app.logged_out'
    $(window).on 'scroll resize', =>
      @updateWindowBounds()
    @updateWindowBounds()
    @parsePath()
    QS.utils.updateStyles()
    super('app', null, null, @opts)
  configure : ->
  route : (opts={})->
    # update path vars
    @previous_path(@path())
    @parsePath()
    path = @path()
    QS.log("Loading path '#{path}'")
    @setTitle(@name, true) unless @opts.update_title == false
    @handlePath(path)
    @app.trigger 'path.changed', path
    @app.trigger 'app.path_changed', path
  parsePath : ->
    prev_info = @path_info()
    path = @location.pathname
    href = @location.href
    origin = @location.origin
    anchor = @location.hash.substring(1)
    fullpath = href.replace(origin, "")
    params = QS.utils.getURLParams(href)
    parts = path.split('/')
    parts.push('') unless parts[parts.length-1] == ''
    return if prev_info.href == href
    @path_parts = parts
    @path_params(params)
    @path_anchor(anchor)
    @path(path)
    info =
      href: href
      path: path
      origin: origin
      anchor: anchor
      fullpath: fullpath
      params: params
      parts: parts
      previous:
        path: prev_info.path
        fullpath: prev_info.fullpath
        parts: prev_info.parts
        params: prev_info.params
        anchor: prev_info.anchor
    @path_info(info)
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
      if replace? && replace == true
        history.replaceState(null, null, path)
      else
        history.pushState(null, null, path)
      @route()
    , 100
  navigateTo : (url, opts={})=>
    if opts.flash?
      QS.LocalStore.set 'flash', opts.flash
    window.location.href = url
  loginTo : (path, opts)->
    opts ||= {}
    @setUser(opts.user) if opts.user?
    @setUserToken(opts.token) if opts.token?
  logoutTo : (path, opts={})->
    cp = @app.path()
    @setUser(null)
    @setUserToken(null)
    @redirectTo(path)
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
    # update body data-bind
    $body = $('body')
    bdb = $body.attr('data-bind')
    if bdb?
      app_data_bind = "app: true, #{bdb}"
    else
      app_data_bind = "app: true"
    $body.attr('data-bind', app_data_bind)
    # layout bindings
    $body.koBind(this)
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

