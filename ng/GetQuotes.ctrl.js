angular.module('myapp')
.controller('GetQuotesCtrl', function (GetQuotesSvc, SharedConstraintssvc, $scope) {
    console.log(SharedConstraintssvc.Constraints);
    console.log('GetQuotesCtrl');
    GetQuotesSvc.getQuotes(SharedConstraintssvc.Constraints)
  .then(function (quotes) {
      console.log('quotes array length ' + quotes.length)

      $scope.Quotes = new Array();
      for (i = 0; i < quotes.length; i++) {
          $scope.Quotes.push(quotes[i].ProviderName + ' ' + quotes[i].ServiceType +':Rs' + quotes[i].Price);
      }


  })
})