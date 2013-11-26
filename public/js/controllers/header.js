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
	
	$scope.popular = [ {
        "title": "Popular Materials",
        "link": "Pmat"
    }, { 
		"title": "Popular tags",
        "link": "Ptags"
    }
	];
	
	$scope.cuantomethod = [ {
		"title": "How is works",
		"link" : "cuantomethod"
		}];
	
}]);
