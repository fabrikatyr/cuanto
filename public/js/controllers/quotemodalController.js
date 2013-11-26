

angular.module('mean.quotes').controller('quotemodalController',  function ($scope,$location,$modal,Global,$http,$resource,$log){

$scope.items = ['item1', 'item2', 'item3'];

	
	$scope.getquote = function (){

		var modalInstance = $modal.open({
		templateUrl: 'views/partials/quote_modal.html',
			controller: ModalInstanceCtrl,
				resolve: {
					items: function () {
					return $scope.items;
					}
				}
		});

		modalInstance.result.then(function (selectedItem) {
		$scope.selected = selectedItem;
		}, function () {
		$log.info('Modal dismissed at: ' + new Date());
		});
	};


	var ModalInstanceCtrl = function ($scope, $modalInstance, items) {

		

		$scope.selected = {
		};

	

	$scope.cancel = function () {
    $modalInstance.dismiss('cancel');
	};
	};
	
});