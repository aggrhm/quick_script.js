# View

Views hold the business logic for your application. They are bound to your view templates. Views can also be embedded in other views.

## Defining

`class @MyView extends @View`

To create a new `View` subclass, extend `View` using standard coffeescript. You should define `init` and `load` method. The `init` method is used to define any bindable variables for the view. The `load` method is called whenever the view is displayed, and should be used to update the variables defined in `init`. This usually involves loading data from the server.

The `load` function can also be used to handle routing. This is especially important for embedded views. The format for this is identical to how `handlePath` in **Application** works.

```coffeescript
class @TodoListView extends @View
	init : ->
		@todos = new TodoItem.Collection()
	load : =>
		@todos.load ['my_todos']
```

Every `View` instance has access to a few variables that help it do its job:

`@app` - the **Application** context  
`@owner` - the view that owns the current view  
`@name` - the name of the current view  

## Class Methods

### registerComponent

`MyView.registerComponent(component_name, template_name)`

This function allows you to register a view component with KnockoutJS, so that it can be reused throughtout your application. This is especially helpful when combined with a `Collection` as it allows you to render collection items while automatically binding them to a `View`. You can register as many components as you want to a `View`.

* `component_name` - the id for this component
* `template_name` - the name of the template to attach to this component

```coffeescript
class @TodoItemView extends @View
	@registerComponent 'todo-item', 'view-todo_item-row'
	...
end
```

You can then use the `viewComponents` custom binding to use the component, specifically with a collection of items:

```haml
.todo-items(data-bind="viewComponents : {name: 'todo-item', data: todos.items}")
	// views will render here for all todo items
```

When passing parameters directly into the `component` binding you should use the following API:

`component : {name: 'component_name', params: param_opts}`

Where the `params` hash has the following:

* `model` - this model bound to the `model` property of the view
* `owner` - the owner of the newly created view
* `view` - (optional) pass the already created view to bind to this component. The other options do nothing when this param is used


## Instance Methods

### init

`init : =>`

Initializes view by setting up observables. You should override this when subclassing the `View` class.

**It is important that anything bound to view templates (in a data-bind tag) be defined in `init` only, and preferably defined as an observable**. Otherwise weird things tend to happen.

```coffeescript
class @TodoListView extends @View
	init : ->
		@todos = new TodoItem.Collection()
```

### load

`load : =>`

Refreshes view by loading data from server, etc. Called when the view is made visible using `selectView`, and can also be called manually.

```coffeescript
class @TodoListView extends @View
	... 

	load : =>
		@todos.load ['my_todos']
```

### addView

`@addView(name, view_class, template_name)`

This method adds a view to your application.

* `name` - the name of the view. This is used with `selectView`
* `view_class` - the View-extending class that you want to render
* `template_name` - the name of the view template that should be bound to the view

```coffeescript
class @HomeView extends @View
	...

class @AppView extends @Application
	init : =>
		@addView('home', HomeView, 'view-home')
```

### selectView

`@selectView(name, [*args])`

This method selects an embedded view to be displayed and hides all other embedded views. It is typically called in the routing code of your application, as the view to be rendered usually corresponds with the url path. When called, it also calls the `load` method on view to be displayed, passing the additional arguments along.

* `name` - the name of the view to display
* `args` - arguments to pass to the `load` method of the view

```coffeescript
@selectView('item-view', @item)
# selects the 'todo-item' view, passing @item to the load function
```
