angular.module('common.footer').directive('siteFooter', function FooterDirective() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'components/footer/footer.html',
    controller: 'FooterCtrl'
  };
});
