
angular.module('mean.quotes').controller('quotemodalController', ['$scope', '$routeParams', '$location','Global','Quotes','$modal','$log', function ($scope, $routeParams, $location,Global, Quotes, $modal,$http,$resource,log,deleteID) {


$scope.getquote = function (){

		/* var Quote = $scope.newQuote; */

			var modalInstance = $modal.open({
			templateUrl: 'views/partials/quote_modal.html',
				controller: ModalInstanceCtrl,
			/* resolve: {
						Quote: function () {
						return $scope.newQuote;
						}
				} */
			});

			modalInstance.result.then(function (newQuote) {
		
			}, function () {
			$log.info('Modal dismissed at: ' + new Date());
			});
		};


	var ModalInstanceCtrl = function ($scope, $modalInstance) {

		$scope.selected = {
		
		};

		$scope.createQuote = function(newQuote) {
		
		/* alert(newQuote.quoteName); */
		var quote = new Quotes({
            quoteName: newQuote.quoteName, 
			description: newQuote.description,
			region: newQuote.region,
            unitquantity: newQuote.unitquantity, 
            unitprice: newQuote.unitprice, 
            matstring: newQuote.matstring,
			tagstring: newQuote.tagstring,
			colorstring: newQuote.colorstring
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
		
		$modalInstance.close();
		};


		$scope.cancel = function () {
			$modalInstance.dismiss('cancel');
			};
	
	};

}]);