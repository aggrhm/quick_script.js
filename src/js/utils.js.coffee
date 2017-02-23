QuickScript.utils =
	buildOptions : (hash)->
		ret = []
		for key, val of hash
			ret.push {value: key, text: val}
		return ret
	renderToString : (tmpl, vm)->
		$el = $("<div data-bind='template: #{tmpl}'>")
		$el.koBind(vm)
		html = $el[0].innerHTML
		$el.koClean()
		return html
	pluralize : (count, single, plural)->
		if count == 1
			return "#{count} #{single}"
		else
			return "#{count} #{plural}"
	isFunction : (fn)->
		return (typeof(fn) == 'function')
	isRegularObject : (obj)->
		return obj? && (obj.constructor == Object)
	isArray : (obj)->
		obj instanceof Array
	uuid : ->
		Math.random().toString().substring(2)
	linkify : (text)->
		exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig
		return text.replace(exp,"<a target='_blank' href='$1'>$1</a>")
	toUSDString : (amt) ->
		amt_usd = amt / 100.0
		"$ #{amt_usd.toFixed(2)}"
	getMouseCoords : (ev, type, opts={})->
		type ||= 'absolute'
		coords = null

		if type == 'document'
			coords = {x: ev.originalEvent.pageX, y: ev.originalEvent.pageY}
			return coords

		if ev.originalEvent.offsetX? && ev.originalEvent.offsetY?
			coords = {x: ev.originalEvent.offsetX, y: ev.originalEvent.offsetY}
		else
			coords = {x: ev.originalEvent.layerX, y: ev.originalEvent.layerY}

		if type == 'relative'
			ts = {w: ev.currentTarget.offsetWidth, h: ev.currentTarget.offsetHeight}
			return {x: (coords.x / ts.w) * 100, y: (coords.y / ts.h) * 100}
		else
			return coords
	elementContainsPoint : (el, point)->
		rect = QS.utils.getElementPosition(el)
		in_x = (point.x >= rect.left) && (point.x <= rect.left + rect.width)
		in_y = (point.y >= rect.top) && (point.y <= rect.top + rect.height)
		return in_x && in_y
	elementWithinBounds : (elem, bounds, opts={})->
		opts.full ||= false
		$el = $(elem)
		dt = bounds.scrollTop
		db = dt + bounds.height
		rect = QS.utils.getElementPosition(elem)
		et = rect.top
		eb = et + rect.height
		if opts.full
			return ((eb <= db) && (et >= dt))
		else
			return (et > dt && et < db) || (eb < db && eb > dt)
	getElementPosition : (el)->
		ret = $(el).offset()
		ret.width = el.offsetWidth
		ret.height = el.offsetHeight
		return ret
	isBlank : (val)->
		return true if !val?
		return val == ""
	isPresent : (val)->
		return !QS.utils.isBlank(val)
	objectToArray : (obj)->
		ret = for key, val of obj
			{'key': key, 'value': val}
	preventDefault : (view, ev)=>
		ev.preventDefault?()
	getURLPath : (url)=>
		ms = []
		i = url.indexOf("?")
		ms.push(i) if i != -1
		j = url.indexOf("#")
		ms.push(j) if j != -1
		if ms.length == 0
			return url
		else
			x = Math.min.apply(null, ms)
			url.substring(0, x)
	getURLParams : (url)=>
		i = url.indexOf("?")
		return {} if i == -1
		str = url.substring(i+1)
		ret = {}
		for pair in str.split("&")
			kv = pair.split("=")
			ret[kv[0]] = unescape(kv[1]) unless QS.utils.isBlank(kv[0])
		return ret
	prepareAPIParam : (val, opts)=>
		opts ||= {allowArrays: false}
		if val instanceof File
			return val
		else if (val instanceof Array) && opts.allowArrays == true
			return val
		else if val == null
			return ''
		else if typeof(val) == 'object'
			return JSON.stringify(val)
		else
			return val
	prepareAPIData : (data, opts)=>
		return null if !data?
		ret = {}
		for key, val of data
			ret[key] = QS.utils.prepareAPIParam(val, opts)
		return ret
	imageContentTypes : ['image/jpeg', 'image/png', 'image/gif', 'image/bmp', 'image/tiff']
	isContentTypeImage : (content_type)->
		return false if !content_type?
		return QS.utils.imageContentTypes.includes(content_type.toLowerCase())
	addTemplate : (templateName, templateMarkup)->
		window.JST ||= {}
		window.JST[templateName] = -> templateMarkup


QuickScript.includeEventable = (self)->
	self::handle = (ev, callback, opts={})->
		@_events ||= {}
		@_events[ev] ||= []
		cbs = @_events[ev]
		opts.callback = callback
		opts.dispose = ->
			cbs.remove(opts)
		cbs.push opts
		return opts
	self::trigger = (ev, data)->
		QS.log "EVENTABLE::TRIGGER : #{ev}", 5
		@_events ||= {}
		cbs = @_events[ev] || []
		rems = []
		for opts in cbs
			opts.callback(data)
			rems.push(opts) if opts.once == true
		# remove any only to be ran once
		for opts in rems
			cbs.remove(opts)
	self::removeHandler = (ev, evo)->
		@_events ||= {}
		cbs = @_events[ev] || []
		rems = []
		for opts in cbs
			rems.push(opts) if opts == evo
		for opts in rems
			cbs.remove(opts)

QuickScript.STATES = {}
QuickScript.STATES.READY = 1
QuickScript.STATES.LOADING = 2
QuickScript.STATES.SAVING = 3
QuickScript.STATES.EDITING = 4
QuickScript.STATES.INSERTING = 5
QuickScript.STATES.APPENDING = 6
QuickScript.STATES.UPDATING = 7

