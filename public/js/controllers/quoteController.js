
angular.module('mean.quotes').controller('quoteController', ['$scope', '$routeParams', '$location','Quotes','$modal','$log', function ($scope, $routeParams, $location, Quotes, $modal,$http,$resource,log,deleteID) {
   
	
    $scope.createQuote = function() {
	alert("quote button firing");
        var quote = new Quotes({
            quoteName: $scope.newQuote.quoteName,
			description: $scope.newQuote.description,
			region: $scope.newQuote.region,
            unitquantity: $scope.newQuote.unitquantity, 
            unitprice: $scope.newQuote.unitprice, 
            matstring: $scope.newQuote.matstring,
			tagstring: $scope.newQuote.tagstring,
			colorstring: $scope.newQuote.colorstring
        });
        quote.$save(function(response) {
          alert("quote saved");
        });
	this.quoteName="";
	this.description="";
	this.region=""; 
    this.unitquantity="";
	this.unitprice="";
	this.matstring="";
	this.tagstring="";
	this.colorstring="";
    };


     $scope.find = function(query) {
        Quotes.query(query, function(quotes) {
            $scope.quotes = quotes;
        });
    };

    $scope.findOne = function() {
        Quotes.get({
            quoteId: $routeParams.quoteId
        }, function(quote) {
            $scope.quote = quote;
        });
    };

	 }]);
	
	
	
angular.module('mean.quotes').controller('quoteeditController',  function ($scope,$location,$modal,Quotes,$http,$resource,$log,storeID){

	
	var quote = $scope.quote;
	
	$scope.delQuote = function (index){
			
		var index =  index;
		
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
	
	
	var deletequoteModalController = function ($scope, $modalInstance,moduleDel,storeID) {
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
	

		
	$scope.editQuote = function (id) {
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

angular.module('mean.quotes').service('storeID', function(){
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
