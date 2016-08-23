class QS.ViewCollection extends QS.Collection
	extend: (opts)->
		super()
		@views = ko.observableArray([])
		@view_model = (@opts.view || QS.View)
		@view_owner = (@opts.view_owner || null)
		@named_view_filters = {}
		@named_view_sorts = {}
		@view_filter = ko.observable({})
		@template = ko.observable(@opts.template)
		@filtered_views = @computeFilteredViews(@view_filter)
		@items.subscribe @updateViews
	updateViews : (items)=>
		view_cls = @view_model
		view_owner = @view_owner
		ra = items
		ca = @views()
		max_len = Math.max(ra.length, ca.length)

		# cache views by model
		mh = {}
		ca.forEach (view)->
			mh[view.model._uuid] = view
		#QS.log mh

		# iterate possible positions
		if max_len > 0
			for idx in [(max_len-1)..0]
				# here we will check if any of the views in the current list
				# have models that match ones in the new list
				rm = ra[idx]
				cm = if ca[idx]? then ca[idx].model else null

				if !rm?
					# item has been deleted
					ca.splice(idx, 1)
				else
					# models aren't the same
					# check if another view in list has model
					view_name = "view-#{rm.id()}"
					same_view = mh[rm._uuid]
					if same_view?
						ca[idx] = same_view
					else
						ca[idx] = new view_cls(view_name, view_owner, rm)
		@views.valueHasMutated()
	setView : (view_model, view_owner) =>
		@views([])
		@view_model = view_model
		@view_owner = view_owner
		@updateViews(@items())
	addViewFilter : (name, fn)=>
		@named_view_filters[name] = fn
		@["views_#{name}"] = ko.computed ->
			@views().filter(fn)
		, this
	addViewSort : (name, fn)=>
		@named_view_sorts[name] = fn
	computeFilteredViews : (filter)=>
		ko.computed ->
			fo = ko.unwrap(filter)
			fsv = fo.select || []
			sort = fo.sort || null
			fa = if fsv instanceof Array then fsv else [fsv]
			views = @views().filter (el)=>
				ret = true
				for filt in fa
					filt_fn = @named_view_filters[filt]
					ret = ret && filt_fn(el)
				ret
			views = views.sort(@named_view_sorts[sort]) if sort != null
			return views
		, this
	getViewById : (id)->
		list = @views().filter ((view)=> view.model.id() == id)
		ret = if list.length > 0 then list[0] else null
	nthViews : (n, offset) ->
		@views().filter (el, i)->
			(i-offset) % n == 0
	getTemplate : ->
		@template()


