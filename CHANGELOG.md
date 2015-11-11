# CHANGELOG

NOTE: Generally, create a new version on every 8 changes

- Pending Changes
	- TODO: Add @location observable to Application, which keeps hash of path, path_parts, href, hash, and params
	- TODO: Set version in QS.version

- v2.11.0
	-	Updated login and logout support with `redirect_on_login`
	- Fixed core ajax utility function to not call error callback on upload error
	- Added smarter link handling
	- Changed build framework to gulp
	- Added disposal ability to Eventable
	- Collection `getScopedItems` now accepts scope
	- View `disposables` property and support
	- Can now pass params to `viewComponent` binding

- v2.10.0
	- Improved filters and sorting in collections
	- Improved option handling in Application
	- Added ability to pass in scope to Collection
	- Added ability to add subviews to view dynamically
	- Eventable handles options
	- View has scoped_items to filter and sort based on scope
	- addComputed now uses pure computed observable
	- PageTimer now supports self argument
	- viewComponents binding supports foreach argument
	- Added `elementContainsPoint` method in Utils
	- Added `revert` method to Model
	- Accept `data` argument in Collection load options
	- Added namespace for all classes with an install method
	- View template is optional in `addView`
	- Added `isContentTypeImage` to utils for use in FileModel

- v2.9.0
	- Added support for JST templates
	- Improved FileModel input object for versatile sources
	- Updated Knockout.js to v3.3.0

- v2.8.0
	- Fixed prepareAPIData, added option to convert arrays
	- Removed logic from model save and delete error handlers
	- Updated initialize logic to pass options
	- Added layout_attr observable to View
	- Upgraded Knockout.Punches to 0.5.1
	- Updated data handling within Model
	- Fixed toAPI and toJS in Model and FileModel. toAPI is for sending data to server, while toJS is for converting model back to basic javascript object (useful for checking in object is dirty and passing to another object).

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
