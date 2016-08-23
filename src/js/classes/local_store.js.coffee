QS.LocalStore =
	store: window.store
	cache: {}
	isEnabled : ->
		return !QS.LocalStore.store.disabled
	set: (key, val)->
		if QS.LocalStore.isEnabled()
			QS.LocalStore.store.set(key, val)
		else
			console.log "LocalStore:: An attempt to write to the local store was ignored because the store is not enabled."
			QS.LocalStore.cache[key] = val
	get : (key)->
		if QS.LocalStore.isEnabled()
			return QS.LocalStore.store.get(key)
		else
			console.log "LocalStore:: An attempt to read from the local store was ignored because the store is not enabled."
			return QS.LocalStore.cache[key]
	remove : (key)->
		if QS.LocalStore.isEnabled()
			QS.LocalStore.store.remove(key)
		else
			console.log "LocalStore:: An attempt to remove from the local store was ignored because the store is not enabled."
			QS.LocalStore.cache[key] = null


