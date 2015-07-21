angular.module('app.about', [
  'ui.router'
]);

angular.module('app.about').config(function config($stateProvider) {
  $stateProvider.state('about', {
    url: '^/about',
    views: {
      "main": {
        templateUrl: 'views/about/about.tpl.html',
        controller: 'AboutCtrl'
      }
    },
    data: {
      meta: {
        title: 'Angularplate - About',
        description: 'An Angular template/boilerplate implementing best practices and modern technologies',
        keywords: 'Angularplate, About, AngularJS, Boilerplate, Best-practice',
        canonical: 'About',
        url: 'about/'
      }
    }
  });
});
