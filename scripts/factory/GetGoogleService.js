app.factory('GoogleService', ['$http', function ($http) {
    this.getGoogle = $http({
      method: 'GET',
      url: 'http://localhost:3000/#/'
    })
    .then(function successCallback(response) {
        console.log('success');
        console.log(response.data);

        return response.data;
    }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.log('error');
        console.log(response);
    });

    return this;
}]);