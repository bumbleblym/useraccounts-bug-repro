AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');
AccountsTemplates.configureRoute('ensureSignedIn');

Router.configure({
  layoutTemplate: 'layout',
});

Router.route('home');

Router.onBeforeAction(function() {
  console.log('before');
  this.next();
});

Router.onBeforeAction(AccountsTemplates.ensureSignedIn, {
  only: ['home']
});

Router.onAfterAction(function() {
  console.log('after');
});
