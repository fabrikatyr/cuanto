/*#######################################################################
  
  Dan Wahlin
  http://twitter.com/DanWahlin
  http://weblogs.asp.net/dwahlin
  http://pluralsight.com/training/Authors/Details/dan-wahlin

  Normally like the break AngularJS controllers into separate files.
  Kept them together here since they're small and it's easier to look through them.
  example. 

  #######################################################################*/


//This controller retrieves data from the projectsService and associates it with the $scope
//The $scope is ultimately bound to the projects view
app.controller('projectsController', function projectsController($scope,$modal,Projects,$http,$resource,$log,deleteID){
	
	$scope.projects = 	Projects.query();

	$scope.update = function(){
    $scope.projects = 	Projects.query();
	}
	
$scope.insertActivity = function (id){
	alert($scope.newActivity.process);
	var API_URL = '/api/project/'+ id +'/fabprocesses';
	
			  $http({
						method: 'PUT',
						url: API_URL,		
						data: JSON.stringify({
						tag : "add",
						process : $scope.newActivity.process,
						duration: $scope.newActivity.duration,
						material: $scope.newActivity.material,
						costperhour: $scope.newActivity.costperhour,
						id: $scope.newActivity.id
						} ),
						
						headers: {'Content-Type': 'application/json'}
					  }).success(function(){
            $scope.$parent.update();
        });
	}
	
	$scope.del = function (id){
		
		deleteID.setProperty(id);
		
		var modalDelete =   $modal.open({
				templateUrl: 'views/partials/projectDelete.html',
				controller: deleteModalController,
				resolve: {
						modalresolve: function () {
						return $scope.projects;
						}
				}
				
		  
			});
			modalDelete.result.then(function (projectdelete) {
			}, function () {
			$log.info('Modal dismissed at: ' + new Date());
			});   
	};
	
	
	var deleteModalController = function ($scope, $modalInstance,modalresolve,deleteID) {
		$scope.projects = modalresolve;
		$scope.projectdelete = modalresolve;
		var id = deleteID.getProperty();
		
		
		$scope.selected = {
		project: $scope.projects[id]
		};

		$scope.remove = function () {
			var id = deleteID.getProperty();
			$scope.projects = modalresolve;
			var API_URL = '/api/project/' + id;
			$scope.projects.splice( id, 1 ); 		
			$modalInstance.close(	
					$http({
						method: 'DELETE',
						url:API_URL,
						data: { id:  id } 
					})
					.success(function(){
					
					})
				);
			};
		
		$scope.cancel = function () {
			$modalInstance.dismiss('cancel');
		};
	};
	
	$scope.edit = function (id) {
	
		var modalInstance =   $modal.open({
			templateUrl: 'views/partials/projectEdit.html',
			controller: editModalController,
			resolve: {
						project: function () {
						return $scope.project[id];
						}
				}
		});

		modalInstance.result.then(function (projects) {
		}, function () {
		$log.info('Modal dismissed at: ' + new Date());
		});
  };

var editModalController = function ($scope, $modalInstance,project) {
	$scope.project = project;
	$scope.projectEdit = project;
		$scope.selected = {
		projectEdit: $scope.project
		};

	$scope.ok = function () {
		var API_URL = '/api/project/' + $scope.projects.id;
		$modalInstance.close(
			  $http({
						method: 'PUT',
						url: API_URL,
						data: JSON.stringify( {
						label : $scope.projectEdit.label,
						projectName: $scope.projectEdit.projectName,
						unitquantity: $scope.projectEdit.unitquantity, 
						unitprice: $scope.projectEdit.unitprice, 
						duedate: $scope.projectEdit.duedate, 
						startdate: $scope.projectEdit.startdate
						} ),
						headers: {'Content-Type': 'application/json'}
					})
					.success(function(){			   
					})
		);    
	};
	
	$scope.cancel = function () {
    $modalInstance.dismiss('cancel');
	};
	

};
	
 }); 

app.service('deleteID', function(){
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
 
app.controller('CollapseDemoCtrl',function ($scope) {
  $scope.isCollapsed = false;
});

app.controller('projectdetailController', function ($scope, Projects) {
    $scope.projects = [];
    init();

    function init() {
        $scope.projects = projectsFactory;
    }
});

//This controller is a child controller that will inherit functionality from a parent
//It's used to track the orderby parameter and ordersTotal for a Project. Put it here rather than duplicating 
//setOrder and orderby across multiple controllers.
app.controller('activitytableController', function activityController($scope,$modal,Projects,$http,$resource,$log,arrayID,deleteID){
    $scope.orderby = 'id';
    $scope.reverse = false;
    $scope.projectTotal = 0.00;
	
    init();

    function init() {
        //Calculate grand total
        //Handled at this level so we don't duplicate it across parent controllers
        if ($scope.project && $scope.project.fabprocesses) {
            var total = 0.00;
            for (var i = 0; i < $scope.project.fabprocesses.length; i++) {
                var costtotal = $scope.project.fabprocesses[i].costperhour*$scope.project.fabprocesses[i].duration;
                total += costtotal.projectTotal;
            }
            $scope.projectTotal = total;
        }
    }

    $scope.setOrder = function (orderby) {
        if (orderby === $scope.orderby)
        {
            $scope.reverse = !$scope.reverse;
        }
        $scope.orderby = orderby;
    };

	$scope.delActivity = function (index,stepno){
		
		
		var index =  index;
		var stepno = (stepno);
		deleteID.setProperty(index);
		arrayID.setProperty(stepno);
		
		var modalactivityDelete =   $modal.open({
				templateUrl: 'views/partials/activityDelete.html',
				controller: deleteactivityModalController,
				resolve: {
						moduleDel: function () {
						return $scope.projects[index].fabprocesses;
						}
				}
				
		  
			});
			modalactivityDelete.result.then(function (deleteactivity) {
			}, function () {
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
			var API_URL = '/api/project/'+ id +'/fabprocesses';
			$scope.moduleDel.splice(stepno, 1 ); 		
			$modalInstance.close(	
					$http({
						method: 'DELETE',
						url:API_URL,
						data: { stepno: stepno } 
					})
					.success(function(){
					})
				);
			};
		
		$scope.cancel = function () {
			$modalInstance.dismiss('cancel');
		};
	};
	
	
$scope.editActivity = function (index,stepno) {
		
		var index =  index;
		var stepno = (stepno);
		deleteID.setProperty(index);
		arrayID.setProperty(stepno);
		
		
		
		var modaleditActivity =   $modal.open({
			templateUrl: '/views/activityEdit.html',
			controller: editactivityModalController,
			resolve: {
						fabprocesses: function () {
						return $scope.projects[index].fabprocesses[stepno];
						}
				}
		});

		modaleditActivity.result.then(function (projects) {
		}, function () {
		$log.info('Modal dismissed at: ' + new Date());
		});
  };


var editactivityModalController = function ($scope, $modalInstance,fabprocesses,deleteID,arrayID) {
	
	var id = deleteID.getProperty();
	var stepno = arrayID.getProperty();
	
	$scope.fabprocesses = fabprocesses;
	$scope.activityEdit = fabprocesses;
	
	
	$scope.selected = {
		activityEdit: $scope.fabprocesses
		};

	$scope.okactivity = function () {
		var API_URL = '/api/project/'+ id +'/fabprocesses';
		var stepno = arrayID.getProperty();	
		$modalInstance.close(
			  $http({
						method: 'PUT',
						url: API_URL,		
						data: JSON.stringify({
						tag : "edit",
						stepno : stepno,
						process : $scope.activityEdit.process,
						duration: $scope.activityEdit.duration,
						material: $scope.activityEdit.material,
						costperhour: $scope.activityEdit.costperhour,
						id: $scope.activityEdit.id
						} ),
						
						headers: {'Content-Type': 'application/json'}
					})
					.success(function(){			   
					})
		);    
	};
	
	$scope.cancelactivity = function () {
    $modalInstance.dismiss('cancel');
	};
	

};
   	
});
