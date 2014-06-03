# QuickScript.js

Javascript Web Framework based on Knockout.js

## About

See the [docs](http://agquick.github.io/quick_script).

## Versioning

1. Checkout develop branch and add changes
2. Increment version in bower.json
3. Recompile assets

		$ rake compile

4. Commit to git
5. Tag with new version number

		$ git tag -a v2.0.1 -m "Version 2.0.1"

6. Set master to latest version

		$ git checkout master
		$ git reset --hard v2.0.1

7. Push code and tags

		$ git push github master develop --tags
