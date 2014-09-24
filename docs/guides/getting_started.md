# Getting Started

QuickScript is optimized for Rails 3+. This guide will outline setting up QuickScript with Rails.

## Rails Integration

The easiest way to install QS is using Ramba (see [github](http://github.com/agquick/ramba)). Ramba is a simple package manager for the Rails asset pipeline. 
	
For Rails, first you need to add the gem to your Gemfile:

```ruby
#gem 'jquery-rails'		# comment this out
gem 'quick_script', github: 'agquick/quick_script'
gem 'ramba', github: 'agquick/ramba'
```

Now do a bundle install.

```sh
$ bundle install
```

Now create your Assetfile for use with Ramba.

```ruby
package "jquery", github: "jquery/jquery", tag: "2.1.0"
package "bootstrap", github: "twbs/bootstrap", tag: "v3.1.1"
package "quick_script", github: "agquick/quick_script.js", branch: "v2.0.1"

# optional packages
package "animate", github: "daneden/animate.css", branch: "master"
```

Now run a ramba install. This will install all javascript packages.

```sh
$ bundle exec ramba install
```

Now add Ramba to your javascript and stylesheet application manifests.

```javascript
// ... application.js
//= require ramba
...
```

```css
/* ... application.css
 *= require ramba
 ...
```

Next, you need to add the helpers to your <b>ApplicationController</b>.

```ruby
class ApplicationController
	include QuickScript::Interaction
	...
end
```

Next, setup your file hierarchy. This is how I set up mine for the TodoList example, but up to you. The javascript files should be added to your asset pipeline file.

```text
app/
	assets/
		views/
			todo_item/
				row.html.haml					# our partial template for a TodoItem row
			home.html.haml					# our root home view template (I use haml)
		javascripts/
			views.js.coffee					# for our application js views
			models.js.coffee				# for our application js models
		stylesheets/
			home.css.sass						# for our home css
```

One good thing about QuickScript is all of your client-side files are found in the `/assets` folder of your rails app. The view names correspond to their file path, as we will see later. For example, the `home.html.haml` view template is given the id 'view-home', while the `row.html.haml` template has the id 'view-todo_item-row'. You will use this id to reference the view when building your application.

Now update your application layout in `app/views/layouts/application.html.erb`.

```erb
<!DOCTYPE html>
<html>
	<head>
		<title>TodoListApp</title>
		<%= stylesheet_link_tag "application", :media => "all" %>
		<%= javascript_include_tag "application" %>
		<%= include_quick_script_views 'app/assets/views' %>
		<%= csrf_meta_tags %>
	</head>
	<body>
		<%= include_view_box %>
		<%= include_quick_script_init 'AppView' %>
	</body>
</html>
```
	
And update your routing rules in `config/routes.rb`

```coffeescript
TodoList::Application.routes.draw do
	scope "/api" do
		# your api routes go here
		match "todo_items" => "todo_items#index", :via => :get
		match "todo_item" => "todo_items#save", :via => :post
		match "todo_item" => "todo_items#delete", :via => :delete
	end

	# landing page route
	root :to => "application#layout_only"

	# all routes other than /api or /assets handled by client JS
	match "*path" => "application#layout_only", :constraints => QuickScript::DEFAULT_ROUTING_RULE
end
```

Now you are ready to start building your application.
