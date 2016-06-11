/**
 * @author Khalid Sookia <khalidsookia@gmail.com>
 */
var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        controller: 'AppCtrl',
        templateUrl: 'templates/home.html'
    }).otherwise({
        redirectTo: '404'
    });
});

app.controller('AppCtrl', ['$scope', function ($scope) {
    console.log('in AppCtrl');
}])