## EXTENSIONS
Array.prototype.indexAt = (val) ->
	for i in [0...this.length]
		if this[i] == val
			return i
	return -1
Array.prototype.includes = (val) ->
	return this.indexAt(val) != -1
Array.prototype.itemAt = (val)->
	return this.slice(val)[0]
Array.prototype.pushOnce = (item) ->
	if (!this.includes(item))
		this.push(item)
Array.prototype.remove = (item) ->
	idx = this.indexOf(item)
	this.splice(idx, 1) if idx > -1
Array.prototype.first = ->
	this[0]
Array.prototype.last = ->
	this[this.length-1]
Array.prototype.findAndMap = (params, field, def)->
	res = this.filter (itm)->
		for key, val of params
			return false if itm[key] != val
		return true
	result = res[0]
	if result?
		if typeof(field) == 'function'
			return field(result)
		else if typeof(field) == 'string'
			result[field]
		else
			result
	else
		return def
	
Date.from_utc = (utc) ->
	new Date(utc * 1000)
Date.from_now = ->
	new Date()
Date.from_str = (str)->
	str = "#{str}"
	d = new Date()
	d.setYear( +(str.substring(0, 4)) )
	d.setMonth( +(str.substring(4, 6)) - 1)
	d.setDate( +(str.substring(6, 8)) )
	d.remove_time()
	return d
Date.now_utc = ->
	Math.round( (new Date()).getTime() / 1000.0)
Date.prototype.to_utc = ->
	Math.round(this.getTime() / 1000.0)
Date.prototype.remove_time = ->
	this.setHours(0)
	this.setMinutes(0)
	this.setSeconds(0)
	this.setMilliseconds(0)
	return this
String.prototype.endsWith = (suffix) ->
	this.indexOf(suffix, this.length - suffix.length) != -1
String.prototype.includes = (str) ->
	this.indexOf(str) != -1
String.prototype.truncate = (val)->
	ret = this.substring(0, val)
	ret = ret + "..." if this.length > val
	return ret
String.prototype.rjust = (length, char)->
	ret = this
	while (ret.length < length)
		ret = char + ret
	return ret

History.getRelativeUrl = ->
	url = History.getState().url
	"/#{url.replace(History.getRootUrl(), '')}"

## SELECTOPTS
class @SelectOpts
	constructor : ->
		@options = []
	add : (val, str)=>
		@options.push {val : val.toString(), str : str}
		return this
	find : (val)=>
		for obj in @options
			return obj.str if (obj.val == val.toString())
		return ""

## PAGETIMER
class @PageTimer
	constructor: (func, time, self) ->
		@self = self || this
		@callback = func.bind(self)
		@frequency = time * 1000
		@t_id = -1
	start : (opts={run_now: false})=>
		return unless @t_id == -1
		@t_id = setInterval(@callback, @frequency)
		if opts.run_now == true
			@callback()
	stop : =>
		clearInterval(@t_id)
		@t_id = -1
	isRunning : =>
		@t_id != -1
	setFrequency : (time) =>
		@stop()
		@frequency = time * 1000
		@start()
	getFrequency : =>
		return @frequency / 1000
	increasePollTime : =>
		@setFrequency( @getFrequency() + (if @getFrequency() % 5 == 0 then 9 else 1) )

## NOTIFIER
class @Notifier
	constructor: ->
		@popup = null
		@tid = null
		@nids = []
	hasSupport : ->
		if (window.webkitNotifications)
			return true
		else
			return false
	hasPermission : ->
		return (window.webkitNotifications.checkPermission() == 0)
	requestPermission : (cb) ->
		window.webkitNotifications.requestPermission ->
			cb(window.webkitNotifications.checkPermission() == 0) if (cb)
	notify : (icon, title, body, opts) ->
		if (@hasSupport() && @hasPermission() && !@isActive())
			opts = {} if !opts?
			stay = opts["stay"]
			delay = opts["delay"]
			nid = opts["nid"]
			if (nid?)
				if (@nids.includes(nid))
					return false
				else
					@nids.pushOnce(nid)
			@popup = window.webkitNotifications.createNotification(icon, title, body)
			if (!stay? || !stay)
				@popup.ondisplay = ->
					setTimeout('notifier.Hide()', 5000)

			if (delay?)
				@tid = setTimeout('notifier.popup.show()', delay * 1000)
			else
				@popup.show()
			return true

		return false

	hide : ->
		if (@popup != null)
			@popup.cancel()
			@popup = null
		if (@tid != null)
			clearTimeout(@tid)
			@tid = null
	isActive : ->
		if (@popup != null)
			return true
		else
			return false


## TIMELENGTH
class @TimeLength
	constructor : (@date1, @date2)->
		@date2 = new Date() unless @date2?
	seconds : ->
		Math.floor( ( @date2.getTime() - @date1.getTime() ) / 1000 )
	minutes : ->
		Math.floor( @seconds() / 60 )
	hours : ->
		Math.floor( @seconds() / (60 * 60) )
	days : ->
		Math.floor( @seconds() / (24 * 60 * 60) )
	weeks : ->
		Math.floor( @seconds() / (24 * 60 * 60 * 7) )
	months : ->
		Math.floor( @seconds() / (24 * 60 * 60 * 31) )
	years : ->
		Math.floor( @seconds() / (24 * 60 * 60 * 365) )
	toString : ->
		val = 0
		str = ""
		if @years() > 0
			val = @years()
			str = "year"
		else if @months() > 0
			val = @months()
			str = "month"
		else if @weeks() > 0
			val = @weeks()
			str = "week"
		else if @days() > 0
			val = @days()
			str = "day"
		else if @hours() > 0
			val = @hours()
			str = "hour"
		else if @minutes() > 0
			val = @minutes()
			str = "minute"
		else if @seconds() > 0
			val = @seconds()
			str = "second"
		else
			val = 0
			str = "seconds"
		attr = str + ( if (val > 1) then "s" else "" )
		"#{val} #{attr}"
TimeLength.DAY = 86400
TimeLength.YEAR = 31536000

# SUPPORTMANAGER
class @SupportManager
SupportManager.hasFormData = ->
	(window.FormData?)
SupportManager.canUpload = ->
	SupportManager.hasFormData()

# AUTHTOKEN
class @AuthToken
	constructor : (@data)->
		for key,val of @data
			@[key] = val
		@received_at = @data.received_at = Date.now_utc() if !@data.received_at?
		@expires_at = @data.expires_at = @received_at + @expires_in if !@data.expires_at?
	timeLeft : =>
		return @expires_at - Date.now_utc()
	is_expired : =>
		return true if !@expires_at?
		return @timeLeft() <= 0
	toJSON : =>
		JSON.stringify(@data)

@AssetsLibrary = {}

unless window.console?
	window.console =
		log : ->

# Helpful functions
loadScript = (u, d) ->
	d = typeof(d) != 'undefined' ? d : ""
	$.ajax({type: "POST", url: u, data: d, dataType: "script"})

timeFromUnix = (tm) ->
	date = new Date(tm * 1000)
	return date.toLocaleTimeString()

cropImage = (img_url, img_width, img_height) ->
	return $('<div>').css({
		background: 'url(' + img_url + ')',
		backgroundSize: 'cover',
		'background-position': 'center',
		backgroundColor: '#FFF',
		width: img_width,
		height: img_height,
		display: 'inline-block'
	})

link_to = (text, url) ->
	return $('<a>').attr('href', url).html(text)
link_to_rel = (text, url) ->
	return $('<a>').attr('href', "#" + url).html(text)
link_to_span = (text) ->
	return $('<span>').addClass('clickable').html(text)

fadeInElement = (elem) ->
	$(elem).hide().fadeIn()

