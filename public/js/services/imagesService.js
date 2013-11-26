//Images service used for imagess REST endpoint
angular.module('imageupload').factory('Images', ['$resource', function($resource) {
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