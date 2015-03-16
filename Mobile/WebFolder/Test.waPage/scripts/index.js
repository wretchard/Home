
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var slider1 = {};	// @slider
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	slider1.slidestop = function slider1_slidestop (event)// @startlock
	{// @endlock
		var pos=sources.forecast.getPosition()
		norm=0
		
		sumOfProbability=0;
		for(i=0;i<forecast.length; i++) {
			sumOfProbability+=forecast[i].probability
		}
		if(sumOfProbability > 100) {
		norm=sumOfProbability-forecast[pos].probability
		sumOfProbability=100-sumOfProbability
			for(i=0;i<forecast.length; i++) {
//				sumOfProbability+=forecast[i].probability
				if(i!=pos){
					forecast[i].probability+=sumOfProbability*(forecast[i].probability/norm)
				}
			}		
		}
		sources.forecast.sync();
		sources.sumOfProbability.sync();
		sources.norm.sync();
		
//		console.log(pos);
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		forecast.push({name:"my name0", description:"red", probability: 0})
		forecast.push({name:"my name1", description:"green", probability: 0})
		forecast.push({name:"my name2", description:"blue", probability: 0})
		forecast.push({name:"my name3", description:"yellow", probability: 0})
		sources.forecast.sync();
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("slider1", "slidestop", slider1.slidestop, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
