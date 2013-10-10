window.app = angular.module('mean', ['ngCookies', 'ngResource', 'ui.bootstrap', 'ui.route', 'mean.system', 'mean.projects','charts','imageupload']);

angular.module('mean.system', []);
angular.module('mean.projects', []);
angular.module('charts', []);
angular.module('imageupload', []);