
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var sliderProbability = {};	// @slider
	var dataGridEvent = {};	// @dataGrid
// @endregion// @endlock

// eventHandlers// @lock


	sliderProbability.slidestop = function sliderProbability_slidestop (event)// @startlock
	{// @endlock
		var currID=sources.result.ID;
		var currLength=sources.result.length;
//		for(var i=0; i< currLength; i++) {
//			console.log(currID);	
//		}
		sources.result.getElements(0, currLength, {
		onSuccess:function(event){
		event.elements.forEach(function(elem){
			if (elem.ID != currID){
			//console.log(elem.ID + "," + elem.probability)
			$$('clone-sliderProbability-1-0').setValue(33)
		}
		})
//		sources.result.sync();
		}	
		})
	};// @lock

	dataGridEvent.onRowClick = function dataGridEvent_onRowClick (event)// @startlock
	{// @endlock
			sources.event.createResult(
			{onSuccess: function(event) {
//				alert(event.result);
				sources.result.query("batch=:1", event.result)	
			}, onError: function(event){
				a = event
			}
			}
		)
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("sliderProbability", "slidestop", sliderProbability.slidestop, "WAF");
	WAF.addListener("dataGridEvent", "onRowClick", dataGridEvent.onRowClick, "WAF");
// @endregion
};// @endlock
