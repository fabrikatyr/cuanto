angular.module('mean.system').controller('IndexController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;
}]);

angular.module('mean.projects').controller('PCRUD', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;
}]);