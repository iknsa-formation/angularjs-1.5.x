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
        it('should return added numbers', function() {
            expect($scope.addNumbers()).not.toEqual(8);
        });

        it('should return 25', function() {
            $scope.first = 12;
            $scope.second = 13;
            expect($scope.addNumbers()).toEqual(25);
            expect($scope.addNumbers()).not.toEqual(-25);
            expect($scope.addNumbers()).not.toEqual(0);
        });
    });
});