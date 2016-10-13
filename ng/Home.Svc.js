angular.module('myapp')
.service('HomeSvc', function ($http) {
    this.fetchLocations = function () {

            return $http.get('/SupportedLocations')
    .then(function (response) {
       

        console.log("/SupportedLocations Called and got " + response.data);
        return response.data
    })
        
    }
})