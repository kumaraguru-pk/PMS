angular.module('myapp')
.service('GetQuotesSvc', function ($http) {
    this.getQuotes = function (Constraints) {
        console.log(Constraints);
        return $http.post('/RetrieveQuotes', Constraints)
    .then(function (response) {
        console.log(response.data);
        return response.data
    })
    }
})