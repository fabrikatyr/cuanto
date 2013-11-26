
angular.module('mean.projects').controller('projectsCRUDController', ['$scope', '$routeParams', '$location', 'Global', 'Projects','$modal','$log', function ($scope, $routeParams, $location, Global, Projects, $modal,$http,$resource,log,deleteID) {
    
	$scope.global = Global;
	
    $scope.createProject = function() {
        var project = new Projects({
            projectName: $scope.newProject.projectName,
            unitquantity: $scope.newProject.unitquantity, 
            unitprice: $scope.newProject.unitprice, 
            duedate: $scope.newProject.duedate, 
            startdate: $scope.newProject.startdate
        });
        project.$save(function(response) {
          
        });

        this.projectName ="";
        this.unitprice="";
		this.unitquantity="";
        this.duedate ="";
        this.startdate="";
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

angular.module('mean.projects').controller('projectsEditController',  function ($scope,$location,$modal,Global,Projects,$http,$resource,$log,storeID){

	$scope.global = Global;
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
	

		
	$scope.edit = function (id) {
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
	
angular.module('mean.projects',['ui.bootstrap']).controller('projectCarouselCTLR', function($scope) {
  $scope.myInterval = 5000;
  var projects = $scope.projects = [];
  
});	
