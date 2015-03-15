
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'Forecast';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		
		var eventID=data.userData.eventID;
		$$('componentMain').sources.event.query("ID=:1", eventID, {
		onSuccess: function(event){
			$$('componentMain').sources.event.createResult(
			{onSuccess: function(event) {
				debugger;
				$$('componentMain').sources.result.query("batch=:1", event.result)	
			}, onError: function(event){
				console.log(event)
			}
			}
		)	
		}	
		})




	// @region namespaceDeclaration// @startlock
	var sliderProbability = {};	// @slider
	// @endregion// @endlock

	// eventHandlers// @lock

	sliderProbability.slidestop = function sliderProbability_slidestop (event)// @startlock
	{// @endlock
		$$('componentMain').sources.result.fixSliders($$('componentMain').sources.result.ID, $$('componentMain').sources.result.batch,
		{onSuccess: function(event) {
//			console.log(event.result.batch)
			$$('componentMain').sources.result.query("batch=:1", event.result.batch)	
		}
		}
		
		)

	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_sliderProbability", "slidestop", sliderProbability.slidestop, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
