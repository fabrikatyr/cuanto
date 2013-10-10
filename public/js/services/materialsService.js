//This handles retrieving data and is used by controllers. 3 options (server, factory, provider) with 
//each doing the same thing just structuring the functions/data differently.
app.service('materialsService', function () {
    this.getMaterials = function () {
        return materials;
    };

    this.insertMaterial = function (materialName, descriptor, UOM, unitcost, currentstock) {
     var topID = materials.length + 1;
        materials.push({
            id: topID,
            materialName: materialName,
            descriptor:descriptor, 
            UOM:UOM,
            unitcost:unitcost,
            currentstock: currentstock
        });
    };

    this.deleteMaterial = function (id) {
        for (var i = materials.length - 1; i >= 0; i--) {
            if (materials[i].id === id) {
                materials.splice(i, 1);
                break;
            }
        }
    };

    this.getMaterial = function (id) {
        for (var i = 0; i < materials.length; i++) {
            if (materials[i].id === id) {
                return materials[i];
            }
        }
        return null;
    };

    var materials = [
        {
            id: 1, materialName: 'Oak sheets', descriptor: 'Wood', UOM: '2x2 sheets', unitcost: 5.00 , currentstock: 400,
            suppliers: [
                {id: 1, supplierName: 'woodisgood', contactnum: '+44 85 120', addr7ess: '89 W. Center St.', email: 'jesse@woodisgood.com',city: 'Atlanta'},
                {id: 2, supplierName: 'finewood', contactnum: 'Hawkins', address: '89 W. Center St.', email: 'jesse@woodisgood.com',city: 'Atlanta'},
                {id: 3, supplierName: 'oldwood', contactnum: 'Hawkins', address: '89 W. Center St.', email: 'jesse@woodisgood.com',city: 'Atlanta'}
                
            ]
        },
          {
            id: 2, materialName: '24 carrot gold', descriptor: 'metal', UOM: '2x2 sheets', unitcost: 5.00 , currentstock: 400,
            suppliers: [
                {id: 1, supplierName: 'woodisgood', contactnum: '+44 85 120', addr7ess: '89 W. Center St.', email: 'jesse@woodisgood.com',city: 'Atlanta'},
                {id: 2, supplierName: 'finewood', contactnum: 'Hawkins', address: '89 W. Center St.', email: 'jesse@woodisgood.com',city: 'Atlanta'},
                {id: 3, supplierName: 'oldwood', contactnum: 'Hawkins', address: '89 W. Center St.', email: 'jesse@woodisgood.com',city: 'Atlanta'}
                
            ]
        },
        {
            id: 3, materialName: '2 ply paper', descriptor: 'paper', UOM: '2x2 sheets', unitcost: 5.00 , currentstock: 400,
            suppliers: [
                {id: 1, supplierName: 'woodisgood', contactnum: '+44 85 120', addr7ess: '89 W. Center St.', email: 'jesse@woodisgood.com',city: 'Atlanta'},
                {id: 2, supplierName: 'finewood', contactnum: 'Hawkins', address: '89 W. Center St.', email: 'jesse@woodisgood.com',city: 'Atlanta'},
                {id: 3, supplierName: 'oldwood', contactnum: 'Hawkins', address: '89 W. Center St.', email: 'jesse@woodisgood.com',city: 'Atlanta'}
                
            ]
        },
        {
            id: 4, materialName: 'PLA', descriptor: 'Plastic', UOM: '2x2 sheets', unitcost: 5.00 , currentstock: 400,
            suppliers: [
                {id: 1, supplierName: 'woodisgood', contactnum: '+44 85 120', addr7ess: '89 W. Center St.', email: 'jesse@woodisgood.com',city: 'Atlanta'},
                {id: 2, supplierName: 'finewood', contactnum: 'Hawkins', address: '89 W. Center St.', email: 'jesse@woodisgood.com',city: 'Atlanta'},
                {id: 3, supplierName: 'oldwood', contactnum: 'Hawkins', address: '89 W. Center St.', email: 'jesse@woodisgood.com',city: 'Atlanta'}
                
            ]
        }
      
    ];

});