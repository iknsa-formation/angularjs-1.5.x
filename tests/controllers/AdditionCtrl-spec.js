describe('AdditionCtrl', function() {
    var $rootScope, $scope, controller;

    beforeEach(function() {
        module('tests');

        inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            controller = $injector.get('$controller')('AdditionCtrl', {$scope: $scope});
        });
    });

    describe('addNumbers', function() {
        it('should return added numbers', function() {
            expect($scope.addNumbers()).toEqual(5);
        });
    });
});