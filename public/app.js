/*
var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/main.html',
            controller: 'MainCtrl'
        })
        .when('/show', {
            templateUrl: 'partials/login.html',
            controller: 'show.controller'
        })
        .otherwise({
            redirectTo: '/'
        });

    $locationProvider.html5Mode(true);
});

*/

var bookWishlistApp = angular.module('bookWishlistApp', [
    'ngRoute',
    'bookWishlistAppControllers'
]);

bookWishlistApp.config(['$routeProvider','$locationProvider', function( $routeProvider,$locationProvider) {
    $locationProvider.hashPrefix('');

    $routeProvider.
    when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'LoginController'
    }).
    when('/signup', {
        templateUrl: 'partials/signup.html',
        controller: 'SignupController'
    }).
    when('/', {
        templateUrl: 'partials/index.html',
        controller: 'MainController'
    }).
    otherwise({
        redirectTo: '/'
    });


}]);
