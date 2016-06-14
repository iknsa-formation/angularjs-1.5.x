app.controller('GoogleCtrl', ['$scope', 'GoogleService', function ($scope, GoogleService) {
    var google = GoogleService;
    console.log(google);

    $scope.data = google;
}])