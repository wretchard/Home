
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'Admin';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		
		$$('componentMain_button2').disable()
		$$('componentMain_button7').disable()

	// @region namespaceDeclaration// @startlock
	var checkbox1 = {};	// @checkbox
	var textField6 = {};	// @textField
	var textField5 = {};	// @textField
	var textField4 = {};	// @textField
	var textField3 = {};	// @textField
	var textField2 = {};	// @textField
	var textField1 = {};	// @textField
	var button3 = {};	// @button
	var eventEvent = {};	// @dataSource
	var button5 = {};	// @button
	var button2 = {};	// @button
	var button1 = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	checkbox1.change = function checkbox1_change (event)// @startlock
	{// @endlock
		$$('componentMain_button7').enable()
	};// @lock

	textField6.change = function textField6_change (event)// @startlock
	{// @endlock
		$$('componentMain_button7').enable()
	};// @lock

	textField5.change = function textField5_change (event)// @startlock
	{// @endlock
		$$('componentMain_button7').enable()
	};// @lock

	textField4.change = function textField4_change (event)// @startlock
	{// @endlock
		$$('componentMain_button2').enable()
	};// @lock

	textField3.change = function textField3_change (event)// @startlock
	{// @endlock
		$$('componentMain_button2').enable()
	};// @lock

	textField2.change = function textField2_change (event)// @startlock
	{// @endlock
		$$('componentMain_button2').enable()
	};// @lock

	textField1.change = function textField1_change (event)// @startlock
	{// @endlock
		$$('componentMain_button2').enable()
	};// @lock

	button3.click = function button3_click (event)// @startlock
	{// @endlock
		$$('componentMain_button1').enable()
	};// @lock

	eventEvent.onBeforeCurrentElementChange = function eventEvent_onBeforeCurrentElementChange (event)// @startlock
	{// @endlock
//		alert("before current element change")
		if (this.ID == null) {
			this.removeCurrent()	
		}	
	};// @lock

	button5.click = function button5_click (event)// @startlock
	{// @endlock
		$$('componentMain_button1').enable()
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
	
		if ($$('componentMain').sources.event.eventName == null 
		|| $$('componentMain').sources.event.eventDescription== null 
		|| $$('componentMain').sources.event.openingDate== undefined)
		{
			$$('componentMain_richTextMessage').setValue("You must fill in an event name, description and opening date.")
			return;
		}
		$$('componentMain').sources.event.save();
		$$('componentMain_button1').enable()
		$$('componentMain_richTextMessage').setValue("Record saved")
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		this.disable();
		$$('componentMain_button2').enable()
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_checkbox1", "change", checkbox1.change, "WAF");
	WAF.addListener(this.id + "_textField6", "change", textField6.change, "WAF");
	WAF.addListener(this.id + "_textField5", "change", textField5.change, "WAF");
	WAF.addListener(this.id + "_textField4", "change", textField4.change, "WAF");
	WAF.addListener(this.id + "_textField3", "change", textField3.change, "WAF");
	WAF.addListener(this.id + "_textField2", "change", textField2.change, "WAF");
	WAF.addListener(this.id + "_textField1", "change", textField1.change, "WAF");
	WAF.addListener(this.id + "_button3", "click", button3.click, "WAF");
	WAF.addListener(this.id + "_event", "onBeforeCurrentElementChange", eventEvent.onBeforeCurrentElementChange, "WAF");
	WAF.addListener(this.id + "_button5", "click", button5.click, "WAF");
	WAF.addListener(this.id + "_button2", "click", button2.click, "WAF");
	WAF.addListener(this.id + "_button1", "click", button1.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
