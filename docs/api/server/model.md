# Server Model

The server model is used to persist data to your object store (e.g. MySQL, Mongo, etc.). There needs to be a few hooks in order to work properly with QuickScript. The examples provided are specifically for a Rails server environment.

## Defining

`class Model < ActiveRecord::Base`

When defining the model, simply define it the way you would for a standard web application.

```ruby
class TodoItem < ActiveRecord::Base
	attr_accessible :description, :done, :notes

	...
end
```

## Methods

### to_api

`to_api(format = :full)`

Builds the Ruby hash to be JSON-ified and sent to the client for a model. You may specify a format here, which allows you to build a different hash depending on the value of the format variable.

```ruby
def to_api
	ret = {}
	ret[:id] = self.id
	ret[:description] = self.description
	ret[:done] = self.done
	ret[:notes] = self.notes
	ret[:created_at] = self.created_at.utc.to_i
	ret[:updated_at] = self.updated_at.utc.to_i
	return ret
end
```

