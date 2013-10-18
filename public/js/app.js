window.app = angular.module('mean', ['ngCookies', 'ngResource', 'ui.bootstrap', 'ui.route', 'mean.system', 'mean.projects','mean.signup','charts','imageupload']);

angular.module('mean.system', []);
angular.module('mean.projects', []);
angular.module('mean.signup', ['ui.bootstrap']);
angular.module('charts', []);
angular.module('imageupload', []);