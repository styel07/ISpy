//Link router.js to Application Layout
Router.configure({
  layoutTemplate : 'BaseLayout'
});

// ============= Home Page ================
Router.route('/', function () {
  this.render('login', {
  });
});


// =========== tasks/new =================
Router.route('/main', function() {
  this.render('main');
});
