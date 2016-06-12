/**
 * @author Khalid Sookia <khalidsookia@gmail.com>
 */
var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        controller: 'AppCtrl',
        templateUrl: 'templates/home.html'
    }).when('/about', {
        controller: 'AboutCtrl',
        templateUrl: 'templates/about.html'
    }).when('/contact', {
        controller: 'ContactCtrl',
        templateUrl: 'templates/contact.html'
    }).when('/friends', {
        controller: 'FriendsCtrl',
        templateUrl: 'templates/friends.html'
    }).when('/quotation', {
        controller: 'QuotationCtrl',
        templateUrl: 'templates/quotation.html'
    }).when('/recruitement', {
        controller: 'RecruitementCtrl',
        templateUrl: 'templates/recruitement.html'
    }).when('/test', {
        controller: 'TestCtrl',
        templateUrl: 'templates/test.html'
    }).when('/error/:code', {
        controller: 'ErrorCtrl',
        templateUrl: 'templates/error.html'
    }).otherwise({
        redirectTo: '/error/404'
    });
});

app.directive('maDirective', function() {
    return {
        restrict: 'AE',
        template: '<h1>My new directive</h1>'
    }
});

app.controller('ErrorCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {
    console.log('in ErrorCtrl');
    console.log('Error code: ' + $routeParams.code);
}]);

app.controller('AppCtrl', ['$scope', function ($scope) {
    console.log('in AppCtrl');
}]);

app.controller('AboutCtrl', ['$scope', function ($scope) {
    console.log('in AboutCtrl');
}]);

app.controller('ContactCtrl', ['$scope', function ($scope) {
    console.log('in ContactCtrl');
}]);

app.controller('FriendsCtrl', ['$scope', function ($scope) {
    console.log('in FriendsCtrl');
}]);

app.controller('QuotationCtrl', ['$scope', function ($scope) {
    console.log('in QuotationCtrl');
}]);

app.controller('RecruitementCtrl', ['$scope', function ($scope) {
    console.log('in RecruitementCtrl');
}]);

app.controller('TestCtrl', ['$scope', function ($scope) {
    console.log('in TestCtrl');
    $scope.who = ' tu';
    $scope.what = ' vas bien? ';
}]);

app.controller('ChildCtrl', ['$scope', function($scope){
    console.log('ChildCtrl');
    $scope.what = ' bien ou bienne? ';
}]);

app.controller('GrandChildCtrl', ['$scope', function($scope){
    console.log('GrandChildCtrl');
    $scope.who = ' Noemie';
    $scope.what = ' tu vas bien?';
}]);