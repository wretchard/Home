
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'myForecast';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		$$('componentMain').sources.result.query("batch=:1", 0);

	// @region namespaceDeclaration// @startlock
	var dataGrid1 = {};	// @dataGrid
	// @endregion// @endlock

	// eventHandlers// @lock

	dataGrid1.onRowClick = function dataGrid1_onRowClick (event)// @startlock
	{// @endlock
		var b=$$('componentMain').sources.myResult.batch
		$$('componentMain').sources.result.query("batch=:1", b);	// Add your code here
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_dataGrid1", "onRowClick", dataGrid1.onRowClick, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
