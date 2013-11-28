
angular.module('mean.projects').controller('projectController', ['$scope', '$routeParams', '$location','Global','Projects','$modal','$log', function ($scope, $routeParams, $location,Global, Projects, $modal,$http,$resource,log,deleteID) {

	$scope.global = Global;
		
   $scope.createProject = function() {
   
		
		var project = new Projects({
			projectName: $scope.projectNew.projectName,
            unitquantity: $scope.projectNew.unitquantity, 
            unitprice: $scope.projectNew.unitprice, 
            enddate: $scope.projectNew.enddate, 
            startdate: $scope.projectNew.startdate
        });
		
		project.$save(function(response) {
			//$location.path("projects/" + response._id);
		});
        
		$scope.projectNew.projectName ="";
        $scope.projectNew.unitprice="";
		$scope.projectNew.unitquantity="";
        $scope.projectNew.duedate ="";
        $scope.projectNew.startdate="";
	alert("operation Sucessful");
    };


     $scope.find = function(query) {
        Projects.query(query, function(projects) {
            $scope.projects = projects;
        });
    };

    $scope.findOne = function() {
        Projects.get({
            projectId: $routeParams.projectId
        }, function(project) {
            $scope.project = project;
        });
    };
	
	}]);

angular.module('mean.projects').controller('projectEditController',  function ($scope,$location,$modal,Projects,$http,$resource,$log,storeID){

	
	var project = $scope.project;
	
	$scope.delProject = function (index){
		
		storeID.setProperty(index);
		
		var modalprojectDelete =   $modal.open({
				templateUrl: '/views/partials/projectDelete.html',
				controller: deleteprojectModalController,
				resolve: {
						moduleDel: function () {
						return $scope.projects;
						}
				}
			});
			
			modalprojectDelete.result.then(function () {
			}, function () {
				$log.info('Modal dismissed at: ' + new Date());
			});   
	};
	
	
	var deleteprojectModalController = function ($scope, $modalInstance,moduleDel,storeID) {
		$scope.moduleDel = moduleDel;
		$scope.projectDel = moduleDel;
		
		var id = storeID.getProperty();
		
		
		$scope.selected = {
			projectDel: $scope.moduleDel[id]
		};

		$scope.remove = function () {
			var id = storeID.getProperty();
			$scope.moduleDel.splice(id, 1 ); 
			moduleDel[id].$remove();
			$modalInstance.close();
			};
		
		$scope.cancel = function () {
			$modalInstance.dismiss('cancel');
		};
	};
	

		
	$scope.editProject = function (id) {
	var projects = $scope.projects;
	
	var modalInstance =   $modal.open({
			templateUrl: '/views/partials/projectEdit.html',
			controller: editModalController,
			resolve: {
						editModal: function () {
						return $scope.projects[id];
						}
				}
		});

		modalInstance.result.then(function (projects) {
		}, function () {
		
		});
  };


	var editModalController = function ($scope, $modalInstance,editModal) {
		$scope.project = editModal;
		$scope.projectEdit = editModal;
				
		$scope.selected = {
			projectEdit: $scope.editModal
			};

		$scope.ok = function () {
		
		editModal.$update(function() {});
			$modalInstance.close();
		};
		
		$scope.cancel = function () {
		$modalInstance.dismiss('cancel');
		};
		

	};

});

angular.module('mean.projects').service('storeID', function(){
  var id= null;
	
        return {
            getProperty: function () {
                
				return id;
            },
            setProperty: function(value) {
                id = value;
				
            }
        };
    });
	
