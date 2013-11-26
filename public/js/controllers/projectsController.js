
angular.module('mean.projects').controller('projectsController', ['$scope', '$routeParams', '$location', 'Global', 'Projects','$modal','$log', function ($scope, $routeParams, $location, Global, Projects, $modal,$http,$resource,log,storeID,arraySize) {
    
	
	$scope.global = Global;
	
	
	$scope.update = function(){
    $scope.projects = 	Projects.query();
	}
	
    $scope.createProject = function() {
        var project = new Projects({
            projectName: $scope.newProject.projectName,
            unitquantity: $scope.newProject.unitquantity, 
            unitprice: $scope.newProject.unitprice, 
            duedate: $scope.newProject.duedate, 
            startdate: $scope.newProject.startdate,
			thumb : $scope.newProject.thumb
        });
		project.$save(function(response) {
        });
		
		$scope.$parent.update();

        this.projectName ="";
        this.unitprice="";
		this.unitquantity="";
        this.duedate ="";
        this.startdate="";
        $scope.update;
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
			
		var index =  index;
		storeID.setProperty(index);
				alert("index :" +index);
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
		alert("id1 :" +id);
		$scope.selected = {
			projectDel: $scope.moduleDel[id]
		};

		$scope.remove = function () {
			var id = storeID.getProperty();
			alert("id2 :" +id);
			
			alert($scope.moduleDel[id].projectName);
			$scope.moduleDel[id].$remove(function() {
			$scope.moduleDel.splice(id, 1 ); 			
				})
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
		
		editModal.$update(function() {})
			$modalInstance.close()
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
	
angular.module('mean.projects').service('arraySize', function(){
  var size= 1;
	
        return {
            getProperty: function () {
                
				return size;
            },
            setProperty: function(value) {
                size = value;
				
            }
        };
    });
	

angular.module('mean.projects').controller('projectCarouselCTLR', function($scope,Projects,$resource,arraySize){
	$scope.myInterval = 5000;
	var slides = $scope.slides = [];
	
	Projects.query(function(projects) {
		arraySize.setProperty(projects.length);
		});
		
	$scope.addSlide = function(i) {
		var foo = Projects.query(function(projects) {
		
		var newWidth = 200 + ((slides.length + (25 * slides.length)) % 150);		
				slides.push({
				image: 'http://placekitten.com/' + newWidth + '/200',
				text: projects[i].projectName,
				unitprice: projects[i].unitprice
				});
		});
  
	};
  
	
	for (var i=0; i<=arraySize.getProperty(); i++) {
			$scope.addSlide(i);
		  };
  });
  
  