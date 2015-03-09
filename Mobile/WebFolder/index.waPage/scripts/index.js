
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var eventEvent = {};	// @dataSource
// @endregion// @endlock

// eventHandlers// @lock

	eventEvent.onCurrentElementChange = function eventEvent_onCurrentElementChange (event)// @startlock
	{// @endlock
		sources.event.createResult(
		{onSuccess: function(event) {
//			alert(event.result);	
		}, onError: function(event){
			a = event
		}
		}
		)
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("event", "onCurrentElementChange", eventEvent.onCurrentElementChange, "WAF");
// @endregion
};// @endlock
