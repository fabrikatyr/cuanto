

app.controller('projectEditController', function projectEditController(localStorage,$scope, $http) {
		
	$scope.addProject = function(){
		var id = $scope.projects.length;
        $http({
            method: 'POST',
            url: '/api/project',
            data: JSON.stringify( {
			label : id,
            projectName: $scope.newProject.projectName,
            unitquantity: $scope.newProject.unitquantity, 
            unitprice: $scope.newProject.unitprice, 
            duedate: $scope.newProject.duedate, 
            startdate: $scope.newProject.startdate
			} ),
            headers: {'Content-Type': 'application/json'}
        })
        .success(function(){
            $scope.$parent.update();
        });
    };
     
});
