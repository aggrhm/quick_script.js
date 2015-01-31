@QuickScript = {}
@QS = QuickScript

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
		return obj.constructor == Object
	uuid : ->
		Math.random().toString().substring(2)
	linkify : (text)->
		exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig
		return text.replace(exp,"<a target='_blank' href='$1'>$1</a>")
	toUSDString : (amt) ->
		amt_usd = amt / 100.0
		"$ #{amt_usd.toFixed(2)}"
	getMouseCoords : (ev, type, opts)->
		type ||= 'absolute'
		coords = null
		if ev.originalEvent.offsetX? && ev.originalEvent.offsetY?
			coords = {x: ev.originalEvent.offsetX, y: ev.originalEvent.offsetY}
		else
			coords = {x: ev.originalEvent.layerX, y: ev.originalEvent.layerY}

		if type == 'relative'
			ts = {w: ev.currentTarget.offsetWidth, h: ev.currentTarget.offsetHeight}
			return {x: (coords.x / ts.w) * 100, y: (coords.y / ts.h) * 100}
		else
			return coords
	getElementPosition : (el)->
		ret = $(el).offset()
		ret.width = el.offsetWidth
		ret.height = el.offsetHeight
		return ret
	isBlank : (val)->
		return true if !val?
		return val == ""
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
			ret[kv[0]] = kv[1] unless QS.utils.isBlank(kv[0])
		return ret
	prepareAPIParam : (val)=>
		if val instanceof File
			return val
		else if val == null
			return ''
		else if typeof(val) == 'object'
			return JSON.stringify(val)
		else
			return val
	prepareAPIData : (data)=>
		ret = {}
		for key, val of data
			ret[key] = @prepareAPIParam(val)
		return ret



QuickScript.log = (msg, lvl)->
	lvl ||= 1
	console.log(msg) if (QS.debug == true && lvl <= QS.log_level)
QuickScript.debug ||= true
QuickScript.log_level ||= 5
QuickScript.start_time = Date.now()
QuickScript.time = ->
	now = Date.now()
	return (now - QS.start_time) / 1000.0

QuickScript.includeEventable = (self)->
	self::handle = (ev, callback)->
		@_events ||= {}
		@_events[ev] ||= []
		@_events[ev].push callback
	self::trigger = (ev, data)->
		QS.log "EVENTABLE::TRIGGER : #{ev}", 5
		@_events ||= {}
		cbs = @_events[ev]
		if cbs?
			cbs.forEach (callback)->
				callback(data)


if SupportManager.hasFormData()
	QuickScript.ajax = (opts)->
		data = new FormData()
		req = new XMLHttpRequest()
		url = opts.url
		opts.async = true unless opts.async?
		opts.data ||= {}

		if opts.type == "GET"
			url = url + "?"
			first = true
			for key, val of opts.data
				if val instanceof Array
					for aval in val
						url = url + "#{key}#{escape('[]')}=#{escape(aval)}&"
				else
					url = url + "#{key}=#{escape(val)}&"
			url = url.substring(0, url.length - 1)
		else
			for key, val of opts.data
				data.append key, val
		req.onreadystatechange = (ev)->
			if req.readyState == 4
				opts.loading(false) if opts.loading?
				try
					resp = JSON.parse(req.responseText)
				catch
					resp = req.responseText
				if req.status == 200
					opts.success(resp, req.status)
				else
					opts.error(resp, req.status) if opts.error?
		req.upload.addEventListener('error', opts.error) if opts.error?
		if opts.progress?
			req.upload.addEventListener 'progress', (ev)->
				opts.progress(ev, Math.floor( ev.loaded / ev.total * 100 ))
		req.open opts.type, url, opts.async
		for key, val of opts.headers
			req.setRequestHeader(key, val) if val?
		req.withCredentials = true
		opts.loading(true) if opts.loading?
		if opts.type == "GET" then req.send() else req.send(data)
		return req
else
	# IE compliant
	QuickScript.ajax = (opts)->
		#data = new FormData()
		req = new XMLHttpRequest()
		url = opts.url
		opts.async = true unless opts.async?

		# build data
		data_s = ''
		for key, val of opts.data
			if val instanceof Array
				for aval in val
					data_s = data_s + "#{key}#{escape('[]')}=#{escape(aval)}&"
			else
				data_s = data_s + "#{key}=#{escape(val)}&"
		data_s = data_s.substring(0, data_s.length - 1)
		if opts.type == "GET"
			url = url + "?" + data_s
		req.onreadystatechange = (ev)->
			if req.readyState == 4
				opts.loading(false) if opts.loading?
				try
					resp = JSON.parse(req.responseText)
				catch
					resp = req.responseText
				if req.status == 200
					opts.success(resp, req.status)
				else
					opts.error(resp, req.status) if opts.error?
		###
		req.upload.addEventListener('error', opts.error) if opts.error?
		if opts.progress?
			req.upload.addEventListener 'progress', (ev)->
				opts.progress(ev, Math.floor( ev.loaded / ev.total * 100 ))
		###
		req.open opts.type, url, opts.async
		for key, val of opts.headers
			req.setRequestHeader(key, val) if val?
		req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
		req.withCredentials = true
		opts.loading(true) if opts.loading?
		req.send(data_s)
		return req

