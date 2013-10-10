//Projects service used for projects REST endpoint
angular.module('mean.projects').factory("activityFactory", ['$resource', function($resource) {
    return $resource('projects/:projectId/activity/', {
        projectId: '@_id'}
    }, {
        updateActivity: {
            method: 'PUT'
        }
    });
}]);