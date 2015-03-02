# CHANGELOG

- Pending Changes
	- Fixed prepareAPIData, added option to convert arrays
	- Removed logic from model save and delete error handlers
	- Updated initialize logic to pass options

- v2.7.0
	- Various model fixes
	- Added 'scopeAs' binding for declaring view model scope within template
	- Added Array findAndMap prototype function
	- Updated 'selectView' to not set task until new view is loaded
	- Added QS.utils.prepareAPIParams
	- Added support for url uploads in FileModel
	- Added support for components with inline html and styles

- v2.6.1
	- Updated ko.Bind to not clear data-bind attributes
	- Added updateContext binding
	- Added $view to context for views rendered with 'viewbox' template

- v2.6.0
	- Updated LocalStorage to use store.js
	- Changed current_user_token functionality to store and read from LocalStorage
	- Added process_request to Host

- v2.5.4
	- Moved tooltip binding to Overlay.js
	- Removed old bindings

- v2.5.3
	- Updated Collection to default to Collection.UPDATE in handleData
	- Prevent id from being set in Model load function
	- Changed radioClick binding to use 'active' class

- v2.5.2
	- Added registered_components to App
	- Updated History API support with https://github.com/devote/HTML5-History-API
	- Added @path_anchor param to App, now all browser state changes should call App.route()

- v2.5.1
	- Added `view` option to params for components
	- `Model.save` now accepts data hash

- v2.5.0
	- Updated to Knockout.js v.3.2.0
	- Separated ViewCollection from Collection. Must now use @includeViewCollection if want full View functionality
	- Added `registerComponent` function for defining components for use with Collections
	- Added support for `path` attribute with `<a>` elements for routing
	
- v2.4.0
	- Added 'ensure' method for postponing initializations
	- Updated view filters and sorting

- v2.3.0
	- ModelAdapter now uses Host to send requests
	- Host supports request pausing (for token refresh)
	- Utility functions moved to core.js file

- v2.2.0
	- Added Host class to use with ModelAdapters (for setting headers)
	- Added view filters to Collection
	- Removed TinyMCE bindings

- v2.1.0
	- Removed Overlay and Popover support, placed in new library
