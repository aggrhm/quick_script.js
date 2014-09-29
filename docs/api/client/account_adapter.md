# AccountAdapter

The `AccountAdapter` class is a separate type of Adapter that follows the same conventions as a `ModelAdapter` but has a different set of default actions and endpoints. It is tailored for handling account actions such as logging a user in or out of a simple API server.

## Defining

`new AccountAdapter(opts)`

Defining an AccountAdapter is best done wherever you define your other models. The options you pass change the default URLs for the predefined methods.

You can use `route_method` to define other actions and endpoints as well.

```ruby
@SiteAccountAdapter = new AccountAdapter({login_url: '/account/sign_in'})
```

## Default Actions

By default, the actions and endpoints defined are:

* `login` - /account/login
* `register` - /account/register
* `save` - /account
* `logout` - /account/logout

