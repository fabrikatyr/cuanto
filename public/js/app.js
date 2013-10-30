window.app = angular.module('mean', ['ngCookies', 'ngResource', 'ui.bootstrap', 'ui.route', 'mean.system', 'mean.projects','mean.signup','mean.quotes','charts','imageupload']);

angular.module('mean.system', []);
angular.module('mean.projects', []);
angular.module('mean.quotes', []);
angular.module('mean.signup', []);
angular.module('charts', []);
angular.module('imageupload', []);