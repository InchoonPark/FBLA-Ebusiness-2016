AccountsTemplates.configure({
  defaultLayout: 'MasterLayout',
  defaultLayoutRegions: {},
  enablePasswordChange: true,
  showForgotPasswordLink: true,
  defaultContentRegion: 'main',
  texts: {
        title: {
            signIn: "Sign in to your Account"
        },
      },
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
