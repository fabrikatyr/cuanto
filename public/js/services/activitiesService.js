//This handles retrieving data and is used by controllers. 3 options (server, factory, provider) with 
//each doing the same thing just structuring the functions/data differently.
app.service('activitiesService', function () {
    this.getActivities = function () {
        return activities;
    };

    this.insertActivity = function (activityName,activitydescriptor,costperhour,activitymaterial) {
        var topID = activities.length + 1;
        activities.push({
            id: topID,
           activityName: activityName,
           activitydescriptor: activitydescriptor,
           costperhour: costperhour,
           activitymaterial: activitymaterial
        });
    };

    this.deleteActivity = function (id) {
        for (var i = activities.length - 1; i >= 0; i--) {
            if (activities[i].id === id) {
                activities.splice(i, 1);
                break;
            }
        }
    };

    this.getActivity = function (id) {
        for (var i = 0; i < activities.length; i++) {
            if (activities[i].id === id) {
                return activities[i];
            }
        }
        return null;
    };

    var activities = [
        {
            id: 1, activityName: 'Laser Cutting', activitymaterial: 'PLA', activitydescriptor: 'Manual', costperhour: '25.95'
            
        },
        {
            id: 2, activityName: 'Assembly', activitymaterial: 'N/A', activitydescriptor: 'Manual', costperhour: '8.95'
            
        },
        {
            id: 3, activityName: 'Sanding', activitymaterial: 'Sandpaper', activitydescriptor: 'Manual', costperhour: '8.95'
            
        },
        {
            id: 4, activityName: '3d Printing', activitymaterial: 'PLA', activitydescriptor: 'Fabrication', costperhour: '16.95'
            
        },
        {
            id: 5, activityName: 'Casting', activitymaterial: 'Silver', activitydescriptor: 'Craft', costperhour: '15.95'
            
        },
    ];

});