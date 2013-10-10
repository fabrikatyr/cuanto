angular.module('imageupload').controller('imageCtrl',['$scope','Projects','Images','$routeParams', '$location', 'Global', function($scope, $http, Images,$resource,log,Projects) {
    
			$scope.addImage = function() {
        var project = new Projects({
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
			/* {
				var image = new Projects({
					thumb : "FOO"
					});
				image.$save(function(response) {
					$location.path("images/" + response._id);
					});
			}; */
/* 
			  $scope.single = function(image) {
                    var formData = new FormData();
                    formData.append('image', image, image.name);

                    $http.post('upload', formData, {
                        headers: { 'Content-Type': false },
                        transformRequest: angular.identity
                    }).success(function(result) {
                        $scope.uploadedImgSrc = result.src;
                        $scope.sizeInBytes = result.size;
                    });
                }; */
 }]);
 
