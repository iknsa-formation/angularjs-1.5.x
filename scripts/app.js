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
    }).when('/contact/new', {
        controller: 'ContactCtrl',
        templateUrl: 'templates/contact-new.html'
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

    $scope.imgName = 'violet';
    $scope.pageTitle = 'Ooops... Je ne trouve pas cette page';
}]);

app.controller('AppCtrl', ['$scope', function ($scope) {
    console.log('in AppCtrl');

    $scope.imgName = 'rouge';
    $scope.pageTitle = 'Vous êtes sur la page d\'accueil';
}]);

app.controller('AboutCtrl', ['$scope', function ($scope) {
    console.log('in AboutCtrl');

    $scope.imgName = 'bleu';
    $scope.pageTitle = 'Vous êtes sur la page a porpos';
}]);

app.controller('ContactCtrl', ['$scope', function ($scope) {
    console.log('in ContactCtrl');

    $scope.imgName = 'violet';
    $scope.pageTitle = 'Vous êtes sur la page de contact';

    $scope.new = function(contact) {
        console.log(contact);
    };
}]);

app.controller('TestCtrl', ['$scope', function($scope){
    console.log('in TestCtrl');
    $scope.who = ' tu';
    $scope.what = ' vas bien? ';

    $scope.$on('evt', function (evt, msg) {
        console.log('Reçu dans parent : ' + msg);
        $scope.messageAuxDescendants = msg + 'Renvoyé';
    });
}]);

app.controller('ChildCtrl', ['$scope', function($scope){
    console.log('ChildCtrl');
    $scope.what = ' bien ou bienne? ';

    $scope.$on('evt', function (evt, msg) {
        console.log('Reçu dans ChildController : ' + msg);
    });
}]);

app.controller('GrandChildCtrl', ['$scope', function($scope){
    console.log('GrandChildCtrl');
    $scope.who = ' Noemie';
    $scope.what = ' tu vas bien?';

    // $scope.$emit('evt-e', 'Message aux parents de GrandChildController');
    $scope.$on('evt', function (evt, msg) {
        console.log('Reçu dans GrandChildController : ' + msg);
    });
}]);

app.controller('BroadcastCtrl', function($rootScope, $scope){
    $scope.send = function(){
        $rootScope.$broadcast('importantName', $scope.name)
    }

    $scope.name = "Misko Hevery";

    $scope.$watch('name', function(newValue, oldValue) {
        console.log('New value: ' + newValue);
        console.log('Old value: ' + oldValue);

        if(newValue === 'Khalid Sookia') {
            $rootScope.$broadcast('importantName', $scope.name);
        }
    });
});

app.controller('ReciverCtrl', function($scope){
  $scope.$on('importantName', function(events, args){
    console.log(args);
    $scope.name = args;
  })
});