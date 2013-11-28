//Setting up route
window.app.config(['$routeProvider',
   function($routeProvider) {
        $routeProvider.
		when('/myProjects',
            {
               
                templateUrl: 'views/partials/projects.html'
            })
		.when('/pricebyMaterial',
            {
               
                templateUrl: 'views/partials/pricebyMat.html'
            })
			.when('/pricebyKeyword',
            {
               
                templateUrl: 'views/partials/pricebyKeyword.html'
            })
			.when('/pricebyColor',
            {
               
                templateUrl: 'views/partials/pricebyColor.html'
            })
			.when('/pricebyProcess',
            {
               
                templateUrl: 'views/partials/pricebyProcess.html'
            })
         .when('/myMaterials',
            {
                
                templateUrl: 'views/partials/myMaterials.html'
            })
         .when('/myActivities',
            {
				
                templateUrl: 'views/partials/projectdetail.html'
            })
     
		.when('/Pmat',
            {
				//controller: 'mapController',
                templateUrl: 'views/partials/Matcloud.html'
            })
		.when('/Pcolors',
            {
				//controller: 'mapController',
                templateUrl: 'views/partials/colorCloud.html'
            })
		.when('/Ptags',
            {
				//controller: 'mapController',
                templateUrl: 'views/partials/tagsCloud.html'
            })
		.when('/cuantomethod',
            {
				//controller: 'mapController',
                templateUrl: 'views/partials/method.html'
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