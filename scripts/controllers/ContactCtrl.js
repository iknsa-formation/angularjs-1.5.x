app.controller('ContactCtrl', ['$scope', 'ContactFactory', '$routeParams', function ($scope, ContactFactory, $routeParams) {
    console.log('in ContactCtrl');

    $scope.imgName = 'violet';
    $scope.pageTitle = 'Vous êtes sur la page de contact';

    if($routeParams.action === 'edit') {
        $scope.contact = ContactFactory.get($routeParams.email);
    }

    $scope.new = function(contact) {
        ContactFactory.create(contact);

        $scope.contact = {};
        $scope.form.$setPristine();
        $scope.form.$setUntouched();
    };

    $scope.list = ContactFactory.list();

    $scope.update = function(contact) {
        ContactFactory.update(contact);

        $scope.form.$setPristine();
        $scope.form.$setUntouched();
    };

    if ($routeParams.action === 'delete') {
        ContactFactory.delete($routeParams.email);
    }
}]);
