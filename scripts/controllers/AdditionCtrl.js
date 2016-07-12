var tests = angular.module('tests', []);

tests.controller('AdditionCtrl', ['$scope', function($scope){
    $scope.first = 3;
    $scope.second = 2;

    $scope.addNumbers = function() {
        return $scope.first + $scope.second;
    }
}])