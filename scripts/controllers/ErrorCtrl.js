app.controller('ErrorCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {
    console.log('in ErrorCtrl');
    console.log('Error code: ' + $routeParams.code);

    $scope.imgName = 'violet';
    $scope.pageTitle = 'Ooops... Je ne trouve pas cette page';
}]);
