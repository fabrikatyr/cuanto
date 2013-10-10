    /*#######################################################################
  
  Dan Wahlin
  http://twitter.com/DanWahlin
  http://weblogs.asp.net/dwahlin
  http://pluralsight.com/training/Authors/Details/dan-wahlin

  Normally like the break AngularJS controllers into separate files.
  Kept them together here since they're small and it's easier to look through them.
  example. 

  #######################################################################*/


//This controller retrieves data from the materialsService and associates it with the $scope
//The $scope is ultimately bound to the materials view
app.controller('materialsController', function ($scope, materialsService) {

    //I like to have an init() for controllers that need to perform some initialization. Keeps things in
    //one place...not required though especially in the simple example below
    init();

    function init() {
        $scope.materials = materialsService.getMaterials();
    }

    $scope.insertMaterial = function () {
        var materialName = $scope.newMaterial.materialName;
        var descriptor = $scope.newMaterial.descriptor;
        var UOM = $scope.newMaterial.UOM;
        var unitcost = $scope.newMaterial.unitcost;
        var currentstock = $scope.newMaterial.currentstock;
       
        
        materialsService.insertMaterial(materialName, descriptor, UOM, unitcost, currentstock);
       $scope.newMaterial.projectlName='';
       $scope.newMaterial.descriptor='';
       $scope.newMaterial.UOM='';
       $scope.newMaterial.unitcost='';
       $scope.newMaterial.currentstock='';
       
    };

    $scope.deleteMaterial = function (id) {
        materialsService.deleteMaterial(id);
    };

});

//This controller retrieves data from the materialsService and associates it with the $scope
//The $scope is bound to the order view
app.controller('MaterialOrdersController', function ($scope, $routeParams, materialsService) {
    $scope.Material = {};
    $scope.ordersTotal = 0.00;

    //I like to have an init() for controllers that need to perform some initialization. Keeps things in
    //one place...not required though especially in the simple example below
    init();

    function init() {
        //Grab MaterialID off of the route        
        var MaterialID = ($routeParams.MaterialID) ? parseInt($routeParams.MaterialID) : 0;
        if (MaterialID > 0) {
            $scope.Material = materialsService.getMaterial(MaterialID);
        }
    }

});

//This controller retrieves data from the materialsService and associates it with the $scope
//The $scope is bound to the orders view
app.controller('OrdersController', function ($scope, materialsService) {
    $scope.materials = [];

    //I like to have an init() for controllers that need to perform some initialization. Keeps things in
    //one place...not required though especially in the simple example below
    init();

    function init() {
        $scope.materials = materialsService.getmaterials();
    }
});



//This controller is a child controller that will inherit functionality from a parent
//It's used to track the orderby parameter and ordersTotal for a Material. Put it here rather than duplicating 
//setOrder and orderby across multiple controllers.
app.controller('materialChildController', function ($scope) {
    $scope.orderby = 'materialName';
    $scope.reverse = false;
    $scope.stockTotal = 0.00;

    init();

    function init() {
        
        //Calculate grand total
        //Handled at this level so we don't duplicate it across parent controllers
        
            var total = 0.00;
            alert(material[1]);
            for (var i = 0; i < $scope.material.length; i++) {
                var order = $scope.materials[i].unitcost;
                total += materials.stockTotal;
            }
            $scope.stockTotal = total;
        
    }

    $scope.setOrder = function (orderby) {
        if (orderby === $scope.orderby)
        {
            $scope.reverse = !$scope.reverse;
        }
        $scope.orderby = orderby;
    };

});
