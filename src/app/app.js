angular.module('app', [
  // Angular modules
  'ui.router',
  'ngSanitize',
  'ngAnimate',

  // Common modules
  'common.header',
  'common.footer',

  // App specific modules
  'app.home',
  'app.about'
]);

angular.module('app').config(function appConfig($stateProvider, $locationProvider,
                                                $urlRouterProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  $urlRouterProvider.otherwise('/');
});

// Handle routing errors and success events
angular.module('app').run(function run() {

});
