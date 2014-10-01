# Extensions

This section outlines the additional template data-bindings, observable extension, and utilities defined by QuickScript.

## Data Bindings

### viewComponents

`viewComponents : {name: 'todo-item', data: todos.items}`

This binding renders the items in a collection, binding them each to a view component. The component can be pre-defined using `View.registerComponent`, or it can be defined anonymously using the inline template defined within the element.

* `name` - name of the component, if it does not exist it is created
* `data` - the data to iterate for rendering views
* `view` - (optional) if creating a component from an inline template, the `View` to bind the new component to
