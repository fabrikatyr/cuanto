'use strict';


 angular.module('charts',['project-cost-chart','material-chart','revenue-chart','projectRev','projectProfit','forecast-Chart',,'channel-RevALTJ',,'channel-ProfitALTJ','price-chart']);
 

angular.module('revenue-chart', ['googlechart']).controller("revenueChart", function ($scope) {

    var chart1 = {};
    chart1.type = "AreaChart";
    chart1.displayed = false;
    chart1.cssStyle = "height:300px; width:100%;";
    chart1.data = {"cols": [
        {id: "month", label: "Month", type: "date"},
        {id: "revenue-id", label: "Revenue", type: "number"},
        {id: "spend-id", label: "Spend", type: "number"},
        {id: "unit-id", label: "Units", type: "number"}
    ], "rows": [
        {c: [
            {v: "Date(2013,8,28)"},
            {v: 19, f: "42 items"},
            {v: 12, f: "Ony 12 items"},
            {v: 7, f: "7 servers"}
        ]},
        {c: [
            {v: "Date(2013,8,30)"},
            {v: 13},
            {v: 1, f: "1 unit (Out of stock this month)"},
            {v: 12}
        ]},
        {c: [
            {v: "Date(2013,8,31)"},
            {v: 24},
            {v: 5},
            {v: 11}

        ]}
    ]};

    chart1.options = {
        "title": "Revenue and Unit forecast",
        "isStacked": "true",
        "fill": 20,
        "displayExactValues": true,
        "vAxes": {0:{
            "title": "€ EUR", "gridlines": {"count": 10}},
            1:{"title": "Units sold", "gridlines": {"count": 10}}
        },
        "hAxis": {
            "title": "Date"
        },
        "series":{
                0:{"targetAxisIndex":0},
                1:{"targetAxisIndex":0},
                2:{"targetAxisIndex":1}
            }
        };
    

    $scope.chart = chart1;

    $scope.hideServer = false;
    $scope.selectionChange = function () {
        if($scope.hideServer) {
            $scope.chart.view = {columns: [0,1,2]};
        } else {
            $scope.chart.view = {};
        }
    }

});

angular.module('material-chart', ['googlechart']).controller("materialshareChart", function ($scope) {

   var chart1 = {};
    chart1.type = "PieChart";
    chart1.displayed = false;
    chart1.cssStyle = "height:300px; width:100%;";
    chart1.data = {"cols": [
        {id: "material", label: "Material", type: "string"},
        {id: "materialvalue", label: "materialvalue", type: "number"},
        
    ], "rows": [
        {c: [
            {v: "Wood"},
            {v: 19, f: "42 items"}
            
        ]},
        {c: [
            {v: "Paper"},
            {v: 13}
            
        ]},
        {c: [
            {v: "Gold"},
            {v: 24}
            

        ]}
    ]};

    chart1.options = {
        "title": "Material Value",
        "isStacked": "true",
        "fill": 20,
        "displayExactValues": true,
        "vAxis": {
            "title": "", "gridlines": {"count": 10}
        },
        "hAxis": {
            "title": ""
        }
    };  

    $scope.chart = chart1;

    $scope.hideServer = false;
    $scope.selectionChange = function () {
        if($scope.hideServer) {
            $scope.chart.view = {columns: [0,1,2]};
        } else {
            $scope.chart.view = {};
        }
    }

});

  angular.module('price-chart', ['googlechart']).controller("priceChart", function ($scope) {
 /*
   var chart1 = {};
    chart1.type = "CandlestickChart";
    chart1.cssStyle = "height:300px; width:100%;";
	
chart1.data = {
cols:[1,2,3,4,5],
rows:[1,2,3,4,5]
};
	
    chart1.options = {
        "title": "Price Chart",
    };  

    $scope.chart = chart1;
    $scope.hideServer = false;
    $scope.selectionChange = function () {
        if($scope.hideServer) {
            $scope.chart.view = {columns: [0,1,2]};
        } else {
            $scope.chart.view = {};
        }
    }   */

});

 

angular.module('project-cost-chart', ['googlechart']).controller("projectcostChart", function ($scope) {

   var chart1 = {};
    chart1.type = "ColumnChart";
    chart1.displayed = false;
    chart1.cssStyle = "height:300px; width:100%;";
chart1.data = {"cols": [
        {id: "month", label: "Project", type: "string"},
        {id: "revenue-id", label: "Design", type: "number"},
        {id: "spend-id", label: "Laser cutting", type: "number"},
        {id: "unit-id", label: "Assembly / Finishing", type: "number"}
    ], "rows": [
        {c: [
            {v: "Figure"},
            {v: 19 },
            {v: 12},
            {v: 7}
        ]},
        {c: [
            {v: "Statue"},
            {v: 13},
            {v: 1},
            {v: 12}
        ]},
        {c: [
            {v: "Toy"},
            {v: 24},
            {v: 5},
            {v: 11}

        ]},
         {c: [
            {v: "Necklace"},
            {v: 4},
            {v: 30},
            {v: 6}
        ]}
       
    ]};

    chart1.options = {
        "title": "Project Cost",
        "isStacked": "true",
        "fill": 20,
        "displayExactValues": true,
        "vAxis": {
            "title": "EUR €", "gridlines": {"count": 10}
        },
        "hAxis":{"title": "Project Name"}
    };  

    $scope.chart = chart1;

    $scope.hideServer = false;
    $scope.selectionChange = function () {
        if($scope.hideServer) {
            $scope.chart.view = {columns: [0,1,2]};
        } else {
            $scope.chart.view = {};
        }
    }

});

angular.module('projectRev', ['googlechart']).controller("projectRev", function ($scope) {

   var chart1 = {};
    chart1.type = "PieChart";
    chart1.displayed = false;
    chart1.cssStyle = "height:300px; width:100%;";
chart1.data = {"cols": [
        {id: "yaxis", label: "type", type: "string"},
        {id: "retail", label: "Retail", type: "number"},
        {id: "consumerDirect", label: "ConsumerDirect", type: "number"},
		{id: "businessDirect", label: "businessDirect", type: "number"},
		{id: "commissioned", label: "commissioned", type: "number"},
        {id: "web", label: "Web", type: "number"}
    ], "rows": [
        {c: [
            {v: "Retail"},
            {v: 19, f: "42 items"}
            
        ]},
        {c: [
            {v: "Consumer Direct"},
            {v: 13},
            
        ]},
		{c: [
            {v: "Business Direct"},
            {v: 13},
            
        ]},{c: [
            {v: "Commissioned"},
            {v: 13},
            
        ]},
        {c: [
            {v: "Web"},
            {v: 24}
            

        ]}
        
    ]};

    chart1.options = {
        "title": "Revenue by channel",
		"position":"center",
        "isStacked": "true",
        "fill": 20,
        "displayExactValues": true,
		"legend": 'none',
        "vAxis": {
            "title": "EUR €", "gridlines": {"count": 10}
        },
        "hAxis":{"title": ""}
    };  

    $scope.chart = chart1;

    $scope.hideServer = false;
    $scope.selectionChange = function () {
        if($scope.hideServer) {
            $scope.chart.view = {columns: [0,1,2]};
        } else {
            $scope.chart.view = {};
        }
    }

});

angular.module('projectProfit', ['googlechart']).controller("projectProfit", function ($scope) {

   var chart1 = {};
    chart1.type = "ColumnChart";
    chart1.displayed = false;
    chart1.cssStyle = "height:300px; width:100%;";
chart1.data = {"cols": [
        {id: "yaxis", label: "type", type: "string"},
        {id: "retail", label: "Retail", type: "number"},
        {id: "consumerDirect", label: "ConsumerDirect", type: "number"},
		{id: "businessDirect", label: "businessDirect", type: "number"},
		{id: "commissioned", label: "commissioned", type: "number"},
        {id: "web", label: "Web", type: "number"}
    ], "rows": [
        {c: [
            {v: "Actual"},
            {v: 20},
            {v: 10},
            {v: 5},
			{v: 5},
			{v: 5}
        ]},
        {c: [
            {v: "Forecast"},
            {v: 5},
            {v: 10},
            {v: 5},
			{v: 5},
			{v: 20}
        ]}
    ]};

    chart1.options = {
        "title": "Profit Forecast v Actual by channel",
        
		"isStacked": "true",
        "fill": 20,
        "displayExactValues": true,
		"legend": 'none',
        "vAxis": {
            "title": "EUR €", "gridlines": {"count": 10}
        },
        "hAxis":{"title": ""}
    };  

    $scope.chart = chart1;

    $scope.hideServer = false;
    $scope.selectionChange = function () {
        if($scope.hideServer) {
            $scope.chart.view = {columns: [0,1,2]};
        } else {
            $scope.chart.view = {};
        }
    }

});


angular.module('forecast-Chart', ['googlechart']).controller("forecastChart", function ($scope) {

    var chart1 = {};
    chart1.type = "LineChart";
    chart1.displayed = false;
    chart1.cssStyle = "height:300px; width:100%;";
    chart1.data = {"cols": [
        {id: "month", label: "Month", type: "date"},
        {id: "forecast-id", label: "Forecast Revenue", type: "number"},
        {id: "actual-id", label: "Actual Revenue", type: "number"},
        {id: "costfcast", label: "Cost Forecast delta", type: "number"}
    ], "rows": [
        {c: [
            {v: "Date(2013,8,27)"},
            {v: 19},
            {v: 12},
            {v: -7}
        ]},
        {c: [
            {v: "Date(2013,8,28)"},
            {v: 13},
            {v: 1, },
            {v: 12}
        ]},
		{c: [
            {v: "Date(2013,8,29)"},
            {v: 15},
            {v: 11},
            {v: -4}
        ]},
		{c: [
            {v: "Date(2013,8,30)"},
            {v: 11},
            {v: 15},
            {v: 7}
        ]},
        {c: [
            {v: "Date(2013,8,31)"},
            {v: 24},
            {v: 5},
            {v: -11}

        ]}
    ]};

    chart1.options = {
        
        "isStacked": "true",
        "fill": 20,
        "displayExactValues": true,
		"legend" :{"position":'right'},
		"chartArea":{"left":20,"top":0,"width":"50%","height":"95%"},
        "vAxes": {0:{
				"title": "€ EUR", "gridlines": {"count": 10}},
				1:{
				"title": "Cost Forecast delta", "gridlines": {"count": 10}}
        },
        "hAxis": {
            "title": "Date"
        },
		"series":{
                0:{"type": "line","targetAxisIndex":0},
                1:{"type": "line","targetAxisIndex":0},
                2:{"type": "bars","targetAxisIndex":0}
            }
        };
    

    $scope.chart = chart1;

    $scope.hideServer = false;
    $scope.selectionChange = function () {
        if($scope.hideServer) {
            $scope.chart.view = {columns: [0,1,2]};
        } else {
            $scope.chart.view = {};
        }
    }

});

angular.module('channel-RevALTJ', ['googlechart']).controller("channelRevALTJ", function ($scope) {

   var chart1 = {};
    chart1.type = "BarChart";
    chart1.displayed = true;
    chart1.cssStyle = "height:300px; width:100%;";
chart1.data = {
	"cols": [
			{id: "channel", 
			label: "channel", 
			type: "string"
			},
			{id: "value", 
			label: "value", 
			type: "number"
			}
	], 
	"rows": [
        {
		"c": [
            {v: "Retail"},
            {v: 20 }
        ]},
		
		{
		"c": [
            {v: "Consumer"},
            {v: -10 }
        ]},
		{
		"c": [
            {v: "B2B"},
            {v: 10 }
        ]},
		{
		"c": [
            {v: "Web"},
            {v: 5 }
        ]},
		{
		"c": [
            {v: "Market stall"},
            {v: 0 }
        ]}
    ]
};

 chart1.options = {
        
     "isStacked": "true",		
		"chartArea":{"left":20,"top":0,"width":"50%","height":"95%"},
        "fill": 20,
		"legend" : "none",
        "displayExactValues": true,	
        "vAxis": {"textPosition" :"in","textStyle":{"fontsize":3},
            "title": "Channel"
		},
        "hAxis":{
			"title": "EUR €"},
		"colors":[ "89CCC9"]
	};
	
	
    $scope.chart = chart1;

    $scope.hideServer = false;
    $scope.selectionChange = function () {
        if($scope.hideServer) {
            $scope.chart.view = {columns: [0,1,2]};
        } else {
            $scope.chart.view = {};
        }
    }

});


angular.module('channel-ProfitALTJ', ['googlechart']).controller("channelProfitALTJ", function ($scope) {

   var chart1 = {};
    chart1.type = "BarChart";
    chart1.displayed = true;
    chart1.cssStyle = "height:300px; width:100%;";
chart1.data = {
	"cols": [
			{id: "channel", 
			label: "channel", 
			type: "string"
			},
			{id: "value", 
			label: "value", 
			type: "number"
			}
	], 
	"rows": [
        {
		"c": [
            {v: "Retail"},
            {v: -10 }
        ]},
		
		{
		"c": [
            {v: "Consumer"},
            {v: 10 }
        ]},
		{
		"c": [
            {v: "B2B"},
            {v: 0 }
        ]},
		{
		"c": [
            {v: "Web"},
            {v: -5 }
        ]},
		{
		"c": [
            {v: "Market stall"},
            {v: -3 }
        ]}
    ]
};

 chart1.options = {
        
        "isStacked": "true",		
		"chartArea":{"left":20,"top":0,"width":"50%","height":"95%"},
        "fill": 20,
		"legend" : "none",
        "displayExactValues": true,	
        "vAxis": {"textPosition" :"in","textStyle":{"fontsize":3},
            "title": "Channel"
		},
        "hAxis":{
			"title": "EUR €"}
	};
	
	
    $scope.chart = chart1;

    $scope.hideServer = false;
    $scope.selectionChange = function () {
        if($scope.hideServer) {
            $scope.chart.view = {columns: [0,1,2]};
        } else {
            $scope.chart.view = {};
        }
    }

});




