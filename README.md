# QuickScript.js

Javascript Web Framework based on Knockout.js

## About

See the [docs](http://agquick.github.io/quick_script).

## Versioning

1. Checkout develop branch and add changes
2. Update docs
3. Increment version in bower.json
4. Add updates to CHANGELOG
5. Recompile assets

		$ rake compile

6. Commit to git. (Optionally push develop to github to check docs)
7. Tag with new version number

		$ git tag -a v2.0.1 -m "Version 2.0.1"

8. Set master to latest version

		$ git checkout master
		$ git reset --hard v2.0.1

9. Push code and tags

		$ git push github master develop --tags
