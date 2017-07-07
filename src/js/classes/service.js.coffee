class QS.Service
	QS.includeEventable(this)
	constructor: (@owner, @opts={})->
		@app = @owner.app if @owner?
		@disposables = []
		@init()
	init : ->
	addFields : (fields, def) =>
		ko.addFields(fields, def, this)
	addComputed : (field, fn_opts) ->
		ko.addComputed field, fn_opts, this
	dispose : ->
		for d in @disposables
			d.dispose()
		@disposables = []
	disposeLater : (ds...)=>
		@disposables.push.apply(@disposables, ds)
		return @disposables
