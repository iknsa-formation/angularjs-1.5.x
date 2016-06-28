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