//This handles retrieving data and is used by controllers. 3 options (server, factory, provider) with 
//each doing the same thing just structuring the functions/data differently.
app.service('projectsService', function(localStorage, $rootScope, $http, alert) {
	 var self = this;
 

  self.add = function(projectName, unitquantity,unitprice,duedate) {
  alert ("self.add is firing");
  
     var topID = projects.length + 1;
        projects.push({
            id: topID,
            projectName: projectName,
            unitquantity: unitquantity, 
            unitprice: unitprice, 
            duedate: duedate, 
            startdate: startdate,
            fabprocess: fabprocess
        });
		
    if (!self.newProject || !self.newProject.id) {
      alert ("self.newProject.id is firing");	
	  self.newProject = {
        /* id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description */
	alert ("self.newProject is firing");	
		projectName:newProject.projectName,
        unit quantity: newProject.unitquantity,
        unitprice: newProject.unitprice 
        duedate: newProject.duedate,
        startdate: newProject.startdate
        
      };
    }

  /*   if (self.project.id == project.id) {
      self.items.forEach(function(cartItem) {
        if (item && cartItem.name == item.name) {
          cartItem.qty ++;
          item = null;
        }
      });
      if (item) {
        item = angular.copy(item);
        item.qty = 1;
        self.items.push(item);
      }
    } else {
      alert('Can not mix menu items from different restaurants.');
    }
  };


  self.remove = function(item) {
    var index = self.items.indexOf(item);
    // if (index >= 0) {
      // self.items.splice(index, 1);
    // }
    if (!self.items.length) {
      self.restaurant = {};
    }
  }


  // self.total = function() {
    // return self.items.reduce(function(sum, item) {
      // return sum + Number(item.price * item.qty);
    // }, 0); */
	
	    fs.appendFile(DATA_FILE, JSON.stringify(newProject), function() {
        process.exit(0);
      });
	
 
});