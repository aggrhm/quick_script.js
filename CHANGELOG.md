# CHANGELOG

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
