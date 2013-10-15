//Setting up route
window.app.config(['$routeProvider',
   function($routeProvider) {
        $routeProvider.
		when('/myProjects',
            {
                //controller: 'projectsCRUDController',
                templateUrl: 'views/partials/projects.html'
            })
		.when('/pricebyMaterial',
            {
                controller: 'projectsCRUDController',
                templateUrl: 'views/partials/pricebyMat.html'
            })
			.when('/pricebyKeyword',
            {
                controller: 'projectsCRUDController',
                templateUrl: 'views/partials/pricebyKeyword.html'
            })
			.when('/pricebyColor',
            {
                controller: 'projectsCRUDController',
                templateUrl: 'views/partials/pricebyColor.html'
            })
			.when('/pricebyProcess',
            {
                controller: 'projectsCRUDController',
                templateUrl: 'views/partials/pricebyProcess.html'
            })
         .when('/myMaterials',
            {
                controller: 'materialsController',
                templateUrl: 'views/partials/myMaterials.html'
            })
         .when('/myActivities',
            {
               // controller: 'projectsCRUDController',
                templateUrl: 'views/partials/projectdetail.html'
            })
     
		.when('/aboutus',
            {
				//controller: 'mapController',
                templateUrl: 'views/partials/aboutus.html'
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