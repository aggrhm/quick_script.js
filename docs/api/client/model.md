# Model

Models hold the data objects to be managed by your application. To create a model, simply extend the `Model` class using coffeescript. For more information, see the `defining` section.

## Defining

`class @MyModel extends @Model`

To create your own `Model` subclass, you must extend the `Model` object using the standard coffeescript call. You can use `@addFields` to add attributes, which are stored as knockout `observables`. You can also use the standard Knockout `ko.computed` call to add computed observables to your models. You can add methods to the model as well.

```coffeescript
class @TodoItem extends Model
	init : =>
		@addFields ['description', 'notes'], ''
		@addFields ['done'], false
		@addFields ['created_at', 'updated_at'], 0
		@addComputed 'created_at_date', ->
			Date.from_utc(@created_at())
		@addComputed 'created_at_str', ->
			@created_at_date().format('longDate')
	setDone : =>
		@done(true)
```

## Methods

### Constructor

`new Model([attributes, [collection]])`

When instantiating a model, you can pass a JS object to it containing attributes to initialize the object with. You can also pass a collection that the object is bound to. This is set by default for collection-build model objects.

```coffeescript
@todo = new TodoItem(server_data)
```

### addFields

`@addFields(fields, default)`

Adds a field to the Model. The field is a `ko.observable` (see knockoutjs).

```coffeescript
class @TodoItem extends @Model
	init : =>
		@addFields ['description', 'notes'], ''
```

### addComputed

`@addComputed(field, function)`

Adds a computed field to the Model. The field is a `ko.computed` (see knockoutjs).

```coffeescript
class @TodoItem extends @Model
	init : =>
		@addComputed 'created_at_date', ->
			Date.from_utc(@created_at())
```

### load

`model.load(opts, [callback])`

Loads data from persistent storage using the assigned `ModelAdapter`.

`opts` - passed to the server indicating the record to fetch (typically an id).  
`callback(resp, status)` - function to call once the model has been loaded. The callback function is passed the response text from the server and the status of the response.

```coffeescript
@todo_item = new TodoItem()
@todo_item.load {id : 12345}, (resp)=>
	if resp.meta == 200
		# we just loaded an item
```

### save

`model.save(fields, [callback])`

Saves data to persistent storage using the assigned `ModelAdapter`.  
`fields` - an array that indicates the fields of the model that should be sent to the server. The `id` field is automatically included.
`callback(resp, status)` - a function to call once the model has been saved. The callback function is passed the response from the server.

```coffeescript
@todo_item = new TodoItem()
@todo_item.save ['description', 'done'], (resp)=>
	if resp.meta == 200
		# we just saved this item
```

### delete

`model.delete(fields, [callback])`

Deletes the model from persistent storage using the assigned `ModelAdapter`.  

`fields` - an array that indicates the fields of the model that should be sent to the server. The `id` field is automatically included.
`callback` - a function to call once the model has been deleted. The callback function is passed the response from the server.

```coffeescript
@todo_item.delete ['id'], (resp)=>
	if resp.meta == 200
		# we just deleted this item
```

### reset

`model.reset()`

Resets the model to its initialized state. The `id` of the model is also cleared.

```coffeescript
	@todo_item.reset()
	# item is now re-initialized
```

