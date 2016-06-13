app.controller('ContactCtrl', ['$scope', 'ContactFactory', function ($scope, ContactFactory) {
    console.log('in ContactCtrl');
    console.log(ContactFactory.list());

    $scope.imgName = 'violet';
    $scope.pageTitle = 'Vous êtes sur la page de contact';

    $scope.new = function(contact) {

        ContactFactory.create(contact);
        console.log(ContactFactory.list());

        $scope.contact = {};
        $scope.form.$setPristine();
        $scope.form.$setUntouched();
    };
}]);
