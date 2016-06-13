app.controller('ContactCtrl', ['$scope', 'ContactFactory', function ($scope, ContactFactory) {
    console.log('in ContactCtrl');
    console.log(ContactFactory.list());

    $scope.imgName = 'violet';
    $scope.pageTitle = 'Vous êtes sur la page de contact';

    $scope.new = function(contact) {

        console.log(ContactFactory.contacts[contact.email]);
        ContactFactory.create(contact);
        console.log(ContactFactory.list());

        $scope.contact = {};
        $scope.form.$setPristine();
        $scope.form.$setUntouched();
    };

    $scope.list = function() {
        ContactFactory.list();
    };

    $scope.update = function(contact) {
        ContactFactory.update(contact);
    };

    $scope.delete = function (contact) {
        ContactFactory.delete(contact);
    };

    $scope.get = function(contact) {
        var contact = ContactFactory.get(contact);
    };
}]);
