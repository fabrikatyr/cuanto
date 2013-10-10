//Setting up route
window.app.config(['$routeProvider',
   function($routeProvider) {
        $routeProvider.
		when('/myPrice',
            {
                //controller: 'projectsCRUDController',
                templateUrl: 'views/partials/price.html'
            })
		.when('/myProjects',
            {
                controller: 'projectsCRUDController',
                templateUrl: 'views/partials/projects.html'
            })
         .when('/myMaterials',
            {
                controller: 'materialsController',
                templateUrl: 'views/partials/myMaterials.html'
            })
         .when('/materialpricing',
            {
                controller: 'materialsController',
                templateUrl: 'views/partials/materials.html'
            })
         .when('/myActivities',
            {
               // controller: 'projectsCRUDController',
                templateUrl: 'views/partials/projectdetail.html'
            })
     
		.when('/Map',
            {
				controller: 'mapController',
                templateUrl: 'views/partials/map.html'
            })
		.when('/', 
			{
            templateUrl: 'views/index.html'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);

//Setting HTML5 Location Mode
window.app.config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix("!");
    }
]);