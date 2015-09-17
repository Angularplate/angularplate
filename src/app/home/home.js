angular.module('app.home', [
  'ui.router'
]);

angular.module('app.home').config(function config($stateProvider) {
  $stateProvider.state('home', {
    url: '/',
    views: {
      "main": {
        templateUrl: '/views/home/home.tpl.html',
        controller: 'HomeCtrl'
      }
    },
    data: {
      meta: {
        title: 'Angularplate - Home',
        description: 'An Angular template/boilerplate implementing best practices and modern technologies',
        keywords: 'Angularplate, Home, AngularJS, Boilerplate, Best-practice',
        canonical: 'Home',
        url: '/'
      }
    }
  });
});
