class QS.Service
	QS.includeEventable(this)
	constructor: (@app, @opts={})->
		@init()
	init : ->
	addFields : (fields, def) =>
		ko.addFields(fields, def, this)
	addComputed : (field, fn_opts) ->
		ko.addComputed field, fn_opts, this
