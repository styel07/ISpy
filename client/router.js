"use strict";

Router.configure({
  layoutTemplate : 'BaseLayout',   // default layout always rendered;
  before : function () {
    if (!Meteor.user()) {
      if (Meteor.loggingIn()) {
        // just wait if logging in;
        // console.log('Router: logging in');
      } else {
        this.redirect('login');
        // console.log('Router: no user');
      }
    } else if (Router.current().route.getName() === 'login') {  // else user is loggedIn;
      this.redirect('main');
      // console.log('Router: redirecting');
    }
    // else
    //   console.log('Router: user exists');
    this.next();    // must call next() to get the Router to continue executing;
  }
});

Router.route('/', { template: '' });
Router.route('/login', { template: '' });
Router.route('/main');
// By default the router will render the capitalized name of the template, with punctuations removed and next letter capped.
