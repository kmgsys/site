module.exports = factory;

function factory(options, callback) {
  return new factory.Construct(options, callback);
}

factory.Construct = function(options, callback) {
  var self = this;

  if (!options.enabled) {
    return setImmediate(callback);
  }

  // "Protected" properties. We want related modules and subclasses to be able
  // to access these, thus no variables defined in the closure
  self._apos = options.apos;
  self._app = options.app;
  self._options = options;

  console.log('\n\n*** WARNING: the apostrophe-demo-login module should be REMOVED from\nyour own projects. It is only for use in the sandbox demo.\nRemove it from app.js and package.json in your project.\n\n');

  self._apos.mixinModuleAssets(self, 'demo-login', __dirname, options);

  self.pushAsset('script', 'forceLogin');

  if (callback) {
    // Invoke callback on next tick so that the constructor's return
    // value can be assigned to a variable in the same closure where
    // the callback resides
    process.nextTick(function() { return callback(null); });
  }
};
