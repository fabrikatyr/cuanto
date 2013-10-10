//Projects service used for projects REST endpoint
angular.module('mean.projects').factory("Images", ['$resource', function($resource) {
    return $resource('images/:imageId', {
        imageId: '@_id'
    }, 		
		{
			update: {
				method: 'PUT'
			}
		}
	);
}]);