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
app.controller('projectsCRUDController', function projectsController($scope,$modal,projectsFactory,$http,$resource,$log,deleteID){
	
	$scope.projects = 	projectsFactory.query();

	$scope.update = function(){
    $scope.projects = 	projectsFactory.query();
	}
	
	$scope.del = function (id){
		deleteID.setProperty(id);
		
		var modalDelete =   $modal.open({
				templateUrl: '/views/projectDelete.html',
				controller: deleteModalController,
				resolve: {
						modalresolve: function () {
						return $scope.projects;
						}
				}
				
		  
			});
			modalDelete.result.then(function (deleteproject) {
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
			templateUrl: '/views/projectEdit.html',
			controller: editModalController,
			resolve: {
						projects: function () {
						return $scope.projects[id];
						}
				}
		});

		modalInstance.result.then(function (projects) {
		}, function () {
		$log.info('Modal dismissed at: ' + new Date());
		});
  };


var editModalController = function ($scope, $modalInstance,projects) {
	$scope.projects = projects;
	$scope.projectEdit = projects;
		$scope.selected = {
		projectEdit: $scope.projects
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

 
 
 
app.controller('CollapseDemoCtrl',function ($scope) {
  $scope.isCollapsed = false;
});


//This controller retrieves data from the projectsService and associates it with the $scope
//The $scope is bound to the orders view
app.controller('projectdetailController', function ($scope, projectsFactory) {
    $scope.projects = [];

    //I like to have an init() for controllers that need to perform some initialization. Keeps things in
    //one place...not required though especially in the simple example below
    init();

    function init() {
        $scope.projects = projectsFactory;
    }
});



//This controller is a child controller that will inherit functionality from a parent
//It's used to track the orderby parameter and ordersTotal for a Project. Put it here rather than duplicating 
//setOrder and orderby across multiple controllers.
app.controller('projectChildController', function ($scope) {
    $scope.orderby = 'id';
    $scope.reverse = false;
    $scope.ordersTotal = 0.00;

    init();

    function init() {
        //Calculate grand total
        //Handled at this level so we don't duplicate it across parent controllers
        if ($scope.project && $scope.project.fabprocess) {
            var total = 0.00;
            for (var i = 0; i < $scope.project.fabprocess.length; i++) {
                var costtotal = $scope.project.fabprocess[i].costperhour*$scope.project.fabprocess[i].duration;
                
                total += costtotal.orderTotal;
            }
            $scope.ordersTotal = total;
        }
    }

    $scope.setOrder = function (orderby) {
        if (orderby === $scope.orderby)
        {
            $scope.reverse = !$scope.reverse;
        }
        $scope.orderby = orderby;
    };

});
