app.controller('ContactCtrl', ['$scope', 'ContactFactory', function ($scope, ContactFactory) {
    console.log('in ContactCtrl');
    console.log(ContactFactory.contacts);

    $scope.imgName = 'violet';
    $scope.pageTitle = 'Vous êtes sur la page de contact';

    $scope.new = function(contact) {

        ContactFactory.new(contact);
        console.log(ContactFactory.contacts);

        $scope.contact = {};
        $scope.form.$setPristine();
        $scope.form.$setUntouched();
    };
}]);
