
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'Admin';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		
//		$$('componentMain_button2').disable()
//		$$('componentMain_button7').disable()

	// @region namespaceDeclaration// @startlock
	var buttonExport = {};	// @button
	var buttonAddOutcome = {};	// @button
	var buttonCreateNew = {};	// @button
	var textField7 = {};	// @textField
	var outcomesEvent = {};	// @dataSource
	var button8 = {};	// @button
	var button7 = {};	// @button
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
	// @endregion// @endlock

	// eventHandlers// @lock

	buttonExport.click = function buttonExport_click (event)// @startlock
	{// @endlock
		var d= $$('componentMain_textDate').getValue()
		$$('componentMain').sources.export.exportCSV(d, 
		{onSuccess:function(event){	
			$$('componentMain_richTextExport').setValue('Download the Export table in the Export menu')
		}, onError:function(error) {
			$$('componentMain_richTextExport').setValue('There is an error in the Export')
		}
		}
		)
	};// @lock

	buttonAddOutcome.click = function buttonAddOutcome_click (event)// @startlock
	{// @endlock
		$$('componentMain_dataGrid2').show()
		$$('componentMain_container2').show()
//		$$('componentMain_buttonAddOutcome').hide()
	};// @lock

	buttonCreateNew.click = function buttonCreateNew_click (event)// @startlock
	{// @endlock
		$$('componentMain_dataGrid2').hide()
		$$('componentMain_container2').hide()
		$$('componentMain_buttonAddOutcome').hide()
		
//		if($$('componentMain').sources.outcomes.length ==0) {
//			$$('componentMain_dataGrid2').hide()
//			console.log('hide')
//		} else {
//			$$('componentMain_dataGrid2').show()
//			console.log('show')	
//		}	
	};// @lock

	textField7.change = function textField7_change (event)// @startlock
	{// @endlock
		$$('componentMain_button2').enable()
	};// @lock

	outcomesEvent.onCollectionChange = function outcomesEvent_onCollectionChange (event)// @startlock
	{// @endlock
		if($$('componentMain').sources.outcomes.length == 0) {
			$$('componentMain_dataGrid2').hide()
			$$('componentMain_container2').hide()
			$$('componentMain_buttonAddOutcome').show()
		} else {
			$$('componentMain_dataGrid2').show()
			$$('componentMain_container2').show()
//			$$('componentMain_buttonAddOutcome').show()	
		}
	};// @lock

	outcomesEvent.onBeforeCurrentElementChange = function outcomesEvent_onBeforeCurrentElementChange (event)// @startlock
	{// @endlock
		if (this.ID == null) {
			this.removeCurrent()
		} 
	};// @lock

	button8.click = function button8_click (event)// @startlock
	{// @endlock
		$$('componentMain_button6').enable()
	};// @lock

	button7.click = function button7_click (event)// @startlock
	{// @endlock
		if ($$('componentMain').sources.outcomes.outComeName == null 
		|| $$('componentMain').sources.outcomes.outComeDescription== null 
		)
		{
			$$('componentMain_richTextMessage').setValue("You must fill in an outcome name and description.")
			return;
		}
		$$('componentMain').sources.outcomes.save();
		$$('componentMain_button6').enable()
		$$('componentMain_richTextMessage').setValue("Record saved")
	};// @lock

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
		$$('componentMain_buttonAddOutcome').show()
		$$('componentMain_richTextMessage').setValue("Record saved")
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_buttonExport", "click", buttonExport.click, "WAF");
	WAF.addListener(this.id + "_buttonAddOutcome", "click", buttonAddOutcome.click, "WAF");
	WAF.addListener(this.id + "_buttonCreateNew", "click", buttonCreateNew.click, "WAF");
	WAF.addListener(this.id + "_outcomes", "onCollectionChange", outcomesEvent.onCollectionChange, "WAF");
	WAF.addListener(this.id + "_textField7", "change", textField7.change, "WAF");
	WAF.addListener(this.id + "_outcomes", "onBeforeCurrentElementChange", outcomesEvent.onBeforeCurrentElementChange, "WAF");
	WAF.addListener(this.id + "_button8", "click", button8.click, "WAF");
	WAF.addListener(this.id + "_button7", "click", button7.click, "WAF");
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
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
