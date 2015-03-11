
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var dataGridEvent = {};	// @dataGrid
// @endregion// @endlock

// eventHandlers// @lock

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
	WAF.addListener("dataGridEvent", "onRowClick", dataGridEvent.onRowClick, "WAF");
// @endregion
};// @endlock
