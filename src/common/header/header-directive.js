angular.module('common.header').directive('siteHeader', function HeaderDirective() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'components/header/header.html',
    controller: 'HeaderCtrl'
  };
});
