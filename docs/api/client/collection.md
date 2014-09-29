# Collection

The `Collection` class allows you to maintain lists of Model instances. Because most of the functionality is the same despite the Model subclass, you can easily define a collection class for your Model, as seen below.

## Defining

`Model.includeCollection(this)`

To define a Collection for a Model, simply add the code as seen below. This will create a `Model.Collection` class.

```coffeescript
class @TodoItem extends @Model
	@includeCollection()
	init : ->
		...

# now you can use the TodoItem.Collection class
```

## Methods

### constructor

`collection = new Model.Collection()`

To create an instance of a collection is easy. See below.

```coffeescript
@todo_items = new TodoItem.Collection()
```

### load

`collection.load(scope, [callback])`

Loads data from persistent storage using the `ModelAdapter` assigned to the `Model`.

* `scope` - an array defining the scope of the items to be fetched from the storage. The first item in the array denotes the scope method, the following items are arguments to be passed to the scope method. The scope methods are defined at the server. More info about how this works can be found in the Server section of the documentation.
* `callback` - the function to call once the server returns. The function is passed the response from the server.

```coffeescript
@todo_items = new TodoItem.Collection()
@todo_items.load ['all'], (resp)=>
	if resp.meta == 200
		# collection loaded
```

### addItem

`collection.addItem(model)`

Adds a model instance to the collection.

* `model` - model to add to the collection

```coffeescript
@todo = new TodoItem()
@todo_items = new TodoItem.Collection()
@todo_items.addItem(@todo)
```

### removeItemById

`collection.removeItemById(id)`

Removes a model with the corresponding `id` from the collection. This does not interact with the server or ModelAdapter. To remove an item from the server, you should call `delete` on the model instance, and call this method once the server returns that it succeeded. You can also call `removeFromCollection` on the model, which calls this method internally.

* `id` - id of the model to remove

```coffeescript
@todo_items.removeItemById('12345')
```

### setView

`collection.setView(view_class, owner)`

Sets the `View` class that should be instantiated to be bound against each item of the collection when rendered. By default, each element is bound to a default `View` class object. Setting the view allows you to have more control over the functionality provided to each bound collection element when rendered.

* `view_class` - class to be bound against collection element. When the `view_class` is instantiated for each element of the collection, the `@model` variable is set to the collection model for that element.
* `owner` - the instance that should be the owner of each element's view (usually just pass `this` unless you are doing something more complicated)

```coffeescript
class @TodoItemView extends @View
	init : =>
		@todo_item = @model

class @HomeView extends @View
	init : =>
		@todo_items = new TodoItem.Collection()
		@todo_items.setView(TodoItemView, this)
```
