
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'Home';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	
		
	// @region namespaceDeclaration// @startlock
	var buttonOK = {};	// @button
	var button4 = {};	// @button
	var buttonForecast = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	buttonOK.click = function buttonOK_click (event)// @startlock
	{// @endlock
		$$(getHtmlId("dialogWarning")).closeDialog(); //ok button
	};// @lock

	button4.click = function button4_click (event)// @startlock
	{// @endlock
		$$(getHtmlId("dialog1")).closeDialog(); //cancel button
	};// @lock

	buttonForecast.mouseout = function buttonForecast_mouseout (event)// @startlock
	{// @endlock
		$$('componentMain_richMessage').setValue('');
	};// @lock

	buttonForecast.mouseover = function buttonForecast_mouseover (event)// @startlock
	{// @endlock
		$$('componentMain_richMessage').setValue("You must login to use this feature. Use 'tester@email.com' and 'password' as credentials")
	};// @lock

	buttonForecast.click = function buttonForecast_click (event)// @startlock
	{// @endlock
		if (waf.directory.currentUser()== null) {
			$$(getHtmlId("dialogWarning")).displayDialog()
			$$('componentMain_richText4').setValue("You must login first")
			return;
		}

		var eventID=$$('componentMain').sources.event.ID;

		$$('componentMain').loadComponent({ 
    		path: '/Components/Forecast.waComponent', 
    		userData: { eventID: eventID}
		});
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_buttonOK", "click", buttonOK.click, "WAF");
	WAF.addListener(this.id + "_button4", "click", button4.click, "WAF");
	WAF.addListener(this.id + "_buttonForecast", "mouseout", buttonForecast.mouseout, "WAF");
	WAF.addListener(this.id + "_buttonForecast", "mouseover", buttonForecast.mouseover, "WAF");
	WAF.addListener(this.id + "_buttonForecast", "click", buttonForecast.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
