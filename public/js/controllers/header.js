angular.module('mean.system').controller('HeaderController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;

    $scope.priceMenu = [ {
        "title": "Price by Keyword",
        "link": "pricebyKeyword"
    }, {
        "title": "Price by Material",
        "link": "pricebyMaterial"
    }, { 
		"title": "Price by color",
        "link": "pricebyColor"
    }, {
       "title": "Price by process",
        "link": "pricebyProcess"
		
    }];
	
	$scope.projectMenu = [ {
        "title": "My Projects",
        "link": "myProjects"
    }, { 
		"title": "My Activities",
        "link": "myActivities"
    }, {
       "title": "My Materials",
        "link": "myMaterials"
		
    }];
	
	$scope.aboutMenu = [ {
        "title": "About us",
        "link": "aboutus"
		
    }];
	
	
}]);
