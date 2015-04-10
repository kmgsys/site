$(function() {
  if ($.cookie('a2DemoLogin')) {
    return;
  }
  $.cookie('a2DemoLogin', true);
  // Automatically stops working once you change the
  // admin password in app.js, but you should still remove
  // this module as well in app.js
  $.post('/login', {
    username: 'admin',
    password: 'demo'
  }, function(data) {
    window.location.reload(true);
  });
});
