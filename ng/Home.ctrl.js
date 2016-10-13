angular.module('myapp')
.controller('HomeCtrl', function (HomeSvc,SharedConstraintssvc, $scope) {

    $scope.Constraints = SharedConstraintssvc.Constraints;
    $scope.selectAction = function () {
        console.log($scope.SelectedCityFrom);
    };
    console.log('HomeCtrl');

    if (localStorage && localStorage.SupportedLocations != null) {
        $scope.SupportedLocations = JSON.parse(localStorage.SupportedLocations);
    }
    else {

        HomeSvc.fetchLocations()
  .then(function (SupportedLocations) {
      $scope.SupportedLocations = SupportedLocations
      if (localStorage) {
          localStorage.SupportedLocations = JSON.stringify(SupportedLocations);
      }
  })
    }
})