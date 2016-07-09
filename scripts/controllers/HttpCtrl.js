app.controller('HttpCtrl', ['$scope', '$http', function ($scope, $http) {

    this.getGoogle = $http({
      method: 'GET',
      url: 'http://localhost:3000/#/'
    })
    .then(function successCallback(response) {
        console.log('success');
        $scope.data = response.data;

    }, function errorCallback(response) {
        console.log('error');
    });
}])