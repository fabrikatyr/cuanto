

angular.module('mean.signup',['ui.bootstrap']).controller('usermodalController',['$scope', '$routeParams', '$location', 'Global','$modal','$log',  function ($scope,$location,$modal,Global,Projects,$http,$resource,$log,storeID){

	$scope.global = Global;
	var project = $scope.project;
	
	$scope.siginup = function (index){
			
		var index =  index;
		
		storeID.setProperty(index);
		
		var usersignupModal =   $modal.open({
				templateUrl: '/views/partials/signupmodal.html',
				controller: signupModalController,
				resolve: {
						moduleDel: function () {
						return $scope.projects;
						}
				}
				
		  
			});
			usersignupModal.result.then(function () {
			}, function () {
				$log.info('Modal dismissed at: ' + new Date());
			});   
	};
	
	
	var signupModalController = function ($scope, $modalInstance,moduleDel,storeID) {
		$scope.moduleDel = moduleDel;
		$scope.projectDel = moduleDel;
		
		var id = storeID.getProperty();
		
		
		$scope.selected = {
			projectDel: $scope.moduleDel[id]
		};

		$scope.remove = function () {
			var id = deleteID.getProperty();
			$scope.moduleDel.splice(id, 1 ); 
			alert("stuff is working");			
			alert(moduleDel[id].projectName);
			moduleDel[id].$remove();
			$modalInstance.close();
			};
		
		$scope.cancel = function () {
			$modalInstance.dismiss('cancel');
		};
	};

}]);
