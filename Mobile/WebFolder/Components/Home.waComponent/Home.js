
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'Home';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var buttonForecast = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	buttonForecast.click = function buttonForecast_click (event)// @startlock
	{// @endlock
//		console.log($$('componentMain').sources.event.ID);
		var eventID=$$('componentMain').sources.event.ID;
//		$$('componentMain').loadComponent('/Components/Forecast.waComponent');
		$$('componentMain').loadComponent({ 
    		path: '/Components/Forecast.waComponent', 
    		userData: { eventID: eventID}
		});
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_buttonForecast", "click", buttonForecast.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
