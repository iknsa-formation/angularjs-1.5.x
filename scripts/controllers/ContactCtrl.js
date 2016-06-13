app.controller('ContactCtrl', ['$scope', function ($scope) {
    console.log('in ContactCtrl');

    $scope.imgName = 'violet';
    $scope.pageTitle = 'Vous êtes sur la page de contact';

    $scope.new = function(contact) {
        $scope.contact = {};

        $scope.form.$setPristine();
        $scope.form.$setUntouched();
    };
}]);
