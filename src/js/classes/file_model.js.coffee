class QS.FileModel extends QS.Model
	extend : ->
		@input = {}
		# source
		@input.source = ko.observable(null)
		@input.source_type = ko.pureComputed ->
			source = @input.source()
			return null if !source
			return source.type
		, this
		# url helpers
		@input.url = ko.computed
			read : ->
				source = @input.source()
				return null if (!source? || source.type != 'url')
				return source.data
			write : (val)->
				@input.source({type: 'url', data: val})
			owner: this
		@input.has_url = ko.computed ->
			!QS.utils.isBlank(@input.url())
		, this
		# file
		@input.files = ko.observable([])
		@input.file = ko.pureComputed
			read : ->
				if @input.files().length > 0 then @input.files()[0] else null
			write : (val)->
				if val? then @input.files([val]) else @input.files([])
			owner: this
		@input.has_file = ko.computed ->
			@input.file()?
		, this
		@input.file_uri = ko.observable('')
		@input.files.subscribe (val)=>
			if val.length > 0 && FileReader?
				@input.file_uri('')
				reader = new FileReader()
				reader.onloadend = (ev)=>
					QS.log('input loaded')
					@input.file_uri(ev.target.result)
				reader.readAsDataURL(val[0])
		, this
		@input.filename = ko.computed ->
			if @input.has_file() then @input.file().name else ""
		, this

		# helpers
		@input.display_uri = ko.computed ->
			if @input.has_file()
				@input.file_uri()
			else
				fd = @input.source()
				if fd?
					fd.data
				else
					null
		, this
		@input.is_present = ko.computed ->
			return QS.utils.isPresent(@input.source()) || @input.has_file()
		, this
		@input.present = @input.is_present
		@input.is_image = ko.computed ->
			if (@input.has_file() && @input.file().type?)
				return QS.utils.isContentTypeImage(@input.file().type)
			else if @input.has_url()
				return /(jpg|gif|png|JPG|GIF|PNG|JPEG|jpeg)$/.test(@input.url())
			else if @input.source_type() == 'base64'
				return QS.utils.isContentTypeImage(@input.source().content_type)
			else
				return false
		, this
		@input.loadSource = (src)=>
			if src.type == 'base64'
				src.content_type = src.data.split(',')[0].split(':')[1].split(';')[0]
			@input.source(src)
			return src
		@input.clear = =>
			@input.source(null)
			@input.files([])
		@input.reset = @input.clear
		@input.handleData = (data)=>
			return if !data?
			@input.files(data.files)
			@input.source(data.source)
		@input.toJS = =>
			ret = {}
			ret.files = @input.files()
			ret.source = @input.source()
			return ret
		@input.toAPI = =>
			if @input.has_file()
				@input.file()
			else if @input.source() != null
				@input.source()
			else
				null
	reset : =>
		super()
		@input.clear()
	toJS : =>
		ret = super()
		ret.input = @input.toJS()
		return ret
	toAPI : =>
		@input.toAPI()
	toAPIParam : =>
		QS.utils.prepareAPIParam(@toAPI())

