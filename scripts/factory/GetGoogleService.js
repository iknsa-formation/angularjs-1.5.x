app.factory('GoogleService', ['$http', function ($http) {
    this.getGoogle = $http({
      method: 'GET',
      url: 'https://www.google.fr/'
    })
    .then(function successCallback(response) {
        console.log('success');
        console.log(response);
    }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.log('error');
        console.log(response);
    });

    return this;
}]);