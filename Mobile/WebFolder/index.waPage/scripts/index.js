
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var sliderProbability = {};	// @slider
	var dataGridEvent = {};	// @dataGrid
// @endregion// @endlock

// eventHandlers// @lock
var oldValue // the former value of the filled value



	sliderProbability.slidestop = function sliderProbability_slidestop (event)// @startlock
	{// @endlock
		sources.result.fixSliders(sources.result.ID, sources.result.batch,
		{onSuccess: function(event) {
			console.log(event.result.batch)
			sources.result.query("batch=:1", event.result.batch)	
		}
		}
		
		)
	
	};// @lock

	dataGridEvent.onRowClick = function dataGridEvent_onRowClick (event)// @startlock
	{// @endlock
			sources.event.createResult(
			{onSuccess: function(event) {
				sources.result.query("batch=:1", event.result)	
			}, onError: function(event){
				console.log(event)
			}
			}
		)
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("sliderProbability", "slidestop", sliderProbability.slidestop, "WAF");
	WAF.addListener("dataGridEvent", "onRowClick", dataGridEvent.onRowClick, "WAF");
// @endregion
};// @endlock
