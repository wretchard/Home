
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var documentEvent = {};	// @document
	var dataGrid1 = {};	// @dataGrid
// @endregion// @endlock

// eventHandlers// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
//		outComesArray.push({ID:"1", outComeName:"first", outComeDescription: "first description", probability:"0"})
//		waf.sources.outComesArray.sync();
	};// @lock

	dataGrid1.onRowClick = function dataGrid1_onRowClick (event)// @startlock
	{// @endlock

	source.outcomes.toArray("ID, outComeName, outComeDescription, probability", {
    	onSuccess: function(event) { // asynchronous call
    	outComesArray=[];
        event.result.forEach(
        	function(obj){
        		outComesArray.push({ID:obj.ID, outComeName:obj.outComeName, outComeDescription:obj.outComeDescription, probability:0});
        		waf.sources.outComesArray.sync();
        		}
        )

    }	
});
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("dataGrid1", "onRowClick", dataGrid1.onRowClick, "WAF");
// @endregion
};// @endlock
