angular.module('mean.projects').controller('activityController', ['$scope', '$routeParams', '$location', 'Global', 'Projects', function ($scope, $routeParams, $location, Global, Projects) {
    $scope.global = Global;
	
    $scope.remove = function(project) {
        project.$remove();  

        for (var i in $scope.projects) {
            if ($scope.projects[i] == project) {
                $scope.projects.splice(i, 1);
            }
        }
    };

    $scope.addActivity = function() {
		    var project = $scope.project;
			
			if (!project.updated) {
            project.updated = [];
			}
			
			project.updated.push(new Date().getTime());
			project.activity.push($scope.newActivity);
	
			project.$update(function() {
			});
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
	


app.controller('activityEDITController', function activityController($scope,$location,$modal,Global,Projects,$http,$resource,$log,arrayID,deleteID){
    $scope.global = Global;
	var project = $scope.project;
	
	
	$scope.delActivity = function (index,stepno){
			
		var index =  index;
		var stepno = stepno;
		deleteID.setProperty(index);
		arrayID.setProperty(stepno);
		
		var modalactivityDelete =   $modal.open({
				templateUrl: '/views/partials/activityDelete.html',
				controller: deleteactivityModalController,
				resolve: {
						moduleDel: function () {
						return $scope.project.activity;
						}
				}
				
		  
			});
			modalactivityDelete.result.then(function () {
			}, function () {
				alert('Modal dismissed at: ' + new Date());		
				$log.info('Modal dismissed at: ' + new Date());
			});   
	};
	
	
	var deleteactivityModalController = function ($scope, $modalInstance,moduleDel,deleteID,arrayID) {
		$scope.moduleDel = moduleDel;
		$scope.activityDel = moduleDel;
		var id = deleteID.getProperty();
		var stepno = arrayID.getProperty();
		
		$scope.selected = {
			activityDel: $scope.moduleDel[stepno]
		};

		$scope.remove = function () {
			var id = deleteID.getProperty();
			var stepno = arrayID.getProperty();
			
			$scope.moduleDel.splice(stepno, 1 ); 		
			
			$modalInstance.close(
			project.$update(function() {
				
				})
				);
			};
		
		$scope.cancel = function () {
			$modalInstance.dismiss('cancel');
		};
	};
	
	
$scope.editActivity = function (index,stepno) {
		
		var index =  index;
		var stepno = stepno;
		deleteID.setProperty(index);
		arrayID.setProperty(stepno);
	
		
		var modaleditActivity =   $modal.open({
			templateUrl: '/views/partials/activityEdit.html',
			controller: editactivityModalController,
			resolve: {
						moduleEdit: function () {
						return $scope.project.activity[stepno];
						}
				}
		});
		modaleditActivity.result.then(function (moduleEdit) {
		}, function () {
		$log.info('Modal dismissed at: ' + new Date());
		}); 
  };


var editactivityModalController = function ($scope, $modalInstance,moduleEdit,deleteID,arrayID) {
	
	$scope.moduleEdit = moduleEdit;
	$scope.activityEdit = moduleEdit;
	var stepno = arrayID.getProperty();
	
	$scope.selected = {
		activityEdit: $scope.moduleEdit
		};

	$scope.okActivity = function () {
		project.activity[stepno] = moduleEdit;
				project.$update(function() {})
			$modalInstance.close()
	};
	
	$scope.cancelActivity = function () {
    $modalInstance.dismiss('cancel');
	};
	

};
   	
});

angular.module('mean.projects').service('deleteID', function(){
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
	
app.service('arrayID', function(){
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

