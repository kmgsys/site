# apostrophe-demo-login

This module automatically logs you in as the "admin" user, with the password "demo".

Obviously, this module only makes sense to include in a project that is a canned demo of Apostrophe, like the [Apostrophe sandbox demo](http://demo.apostrophenow.com).

The automatic login happens only if it has not been done already in the current browser session. That way, visitors can still choose to log out and log in as another user, in order to experience multiuser features of Apostrophe.

Note that if the admin password has been changed in `app.js` this module will not work. Nor should it! Why in the world are you using this module in a real project?
  
## Configuration

```javascript
// In app.js, when configuring apostrophe-site
modules: {
  // Other modules, then...
  apostrophe-demo-login: {
    enabled: true
  }
}
```

Note that you must explicitly set the `enabled` option to `true` to prevent against accidental activation. We suggest that you override this setting to `true` via your `data/local.js` file rather than ever doing that in `app.js`.

## Changelog

0.5.1: must be explicitly enabled with the `enabled` option.
