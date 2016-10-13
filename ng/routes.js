angular.module('myapp')
.config(function ($routeProvider, $locationProvider) {
    
        console.log('Configuration called');
  $locationProvider.html5Mode(true)
  $routeProvider
  .when('/', {templateUrl: '/templates/home.html',controller: 'HomeCtrl'})
  .when('/Quotes', {templateUrl: '/templates/Quotes.html',controller: 'GetQuotesCtrl'})
})
