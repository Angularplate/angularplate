angular.module('app').controller('AppCtrl', function AppCtrl($scope) {
  $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
    if (angular.isDefined(toState.data.meta)) {
      $scope.meta = toState.data.meta;
    }
  });
});
