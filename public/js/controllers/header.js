angular.module('mean.system').controller('HeaderController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;

    $scope.menu = [ {
        "title": "Price search",
        "link": "myPrice"
    }, {
        "title": "My Projects",
        "link": "myProjects"
    }, { 
		"title": "My Activities",
        "link": "myActivities"
    }, {
       "title": "My Materials",
        "link": "myMaterials"
    }];
}]);
