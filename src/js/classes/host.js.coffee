class QS.Host
	constructor : (url)->
		@url = url
		@headers = {}
		@requests = []
		@state = QS.Host.READY
		@before_request = null
		@process_request = (req)->
			req.data = QS.utils.prepareAPIData(req.data, allowArrays: false)
			return req
		@process_response = (resp, status)-> return resp
	request : (req)=>
		#QS.log "#{req.method || "POST"} #{req.url} (#{@state})"
		# prepare request
		req.headers ||= {}
		@before_request?(req)

		if @state == QS.Host.PAUSED
			#QS.log "... adding request"
			@requests.push(req)
			req.loading?(true)
		else
			@executeRequest(req)
	executeQueuedRequests : =>
		while @requests.length > 0
			req = @requests.shift()
			#QS.log "Processing #{req.url}"
			@executeRequest(req)
	executeRequest : (req)=>
		req = @process_request(req)
		resp_fn = req.callback || req.success
		callback_fn = (resp, status)=>
			#QS.log "response : #{status}"
			resp = @process_response(resp, status)
			resp_fn?(resp, status)
		req.type = req.method = 'POST' if (!req.type? && !req.method?)
		req.url = @url + req.url
		req.success = callback_fn
		req.error = callback_fn if !req.error?
		for key, val of @headers
			req.headers[key] ||= val
		QS.ajax req
	pauseRequests : =>
		@state = QS.Host.PAUSED
	resumeRequests : =>
		#QS.log "Resuming #{@requests.length} requests"
		@state = QS.Host.READY
		@executeQueuedRequests()
QS.Host.READY = 1
QS.Host.PAUSED = 2
QS.Host.process_api_response = (resp, status)->
	if typeof(resp) == "string"
		resp = {success: false, meta : status, error : 'An error occurred.', data : resp}
	else
		resp

