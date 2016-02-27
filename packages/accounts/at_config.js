AccountsTemplates.configure({
  defaultLayout: 'MasterLayout',
  defaultLayoutRegions: {},
  showForgotPasswordLink: true,
  defaultContentRegion: 'main'

});

AccountsTemplates.configureRoute('signIn', {
  name: 'login',
  path: '/login'
});

AccountsTemplates.configureRoute('signUp', {
  name: 'register',
  path: '/register'
});

AccountsTemplates.configureRoute('changePwd');
AccountsTemplates.configureRoute('forgotPwd');
AccountsTemplates.configureRoute('resetPwd');
