//client/views/home.js
Template.login.rendered = function() {
};

Template.login.created = function() {
};

Template.login.destroyed = function() {
};
// onclick for login
// Should save information from form and put that into Task container
// Template.login.events({
//   'click #create' : function(event, template) {
//      event.preventDefault();
//     Router.go('/');
//   }
// });

//Logout button should take user back to login page

Template.login.events({
  'click #login-buttons-password' : function(event) {
    event.preventDefault();
    Router.go('/main')
  }
});
