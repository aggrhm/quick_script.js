# A Guide to Views

Views hold the logic that is bound to your templates. All of your application processing and model manipulation should happen here, keeping the templates to just binding to observables defined by the `View`.

## Creating a View

More coming here soon.

## Using View Components

Most of your application is built using predefined, connected views, but sometimes you will want to render a `View` for a list of objects dynamically. Knockout provides a cool feature to handle this called `Components`. A component is essentially a named `View` and `Template`. This is powerful because it allows you to, within your template, create new subviews on the fly.

QuickScript provides a function called `registerComponent` to create a new View Component. Let's take a look at an example with our TodoList app. We want to be able to bind a TodoListView class to each Todo item within our template.

Here's our Views:

```coffeescript
class @TodoListView extends @View
	init : =>
		@todos = TodoItem.Collection()

class @TodoItemView extends @View
	# we want to register this View with our row template
	@registerComponent 'todo-item', 'view-todo_item-row'
	init : =>
		# some extra view stuff we may want to do here, plus we have our bindings to the @app and @owner
	dispose : =>
		# get rid of any computeds bound to externals
```

Now let's render some TodoItemViews in our template

```haml
// this will bind the todo collection items to our component and dynamically manage the TodoItem views
.todo-items(data-bind="viewComponents : {name: 'todo-item', data: todos.items}")
```

Note also that we defined a `dispose` method. This is so that the dynamically created `View` will clean up after itself so we don't have any memory leaks.
