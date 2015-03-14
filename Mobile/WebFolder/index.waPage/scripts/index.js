
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var sliderProbability = {};	// @slider
	var dataGridEvent = {};	// @dataGrid
// @endregion// @endlock

// eventHandlers// @lock
var oldValue // the former value of the filled value

function refreshControls(storedVal, refArray) {
	var adj=(100-storedVal.sumOf);
	var norm = (storedVal.sumOf-storedVal.currProb);
	var newSum=storedVal.currProb;
	for(var i=0; i<refArray.length; i++) { // calculate the normalizing value
		if(refArray[i].ID != storedVal.currID)
		{
			var a=refArray[i].probability
			a=a+(adj*(a/norm))
			newSum+=a;
		}

	}
		console.log(newSum);
	
//	console.log(storedVal.sumOf, (100-storedVal.sumOf))
/*	e.elements.forEach(function(elem) {
			if (elem.ID != storedVal.currID){
				elem.Wa=0;
			//console.log(elem.ID + "," + elem.probability)
			//$$('clone-sliderProbability-1-0').setValue(33)
			}
				
	})*/
	
}

	sliderProbability.slidestart = function sliderProbability_slidestart (event)// @startlock
	{// @endlock
		oldValue=sources.result.probability;  //captures filled value at the start
	};// @lock

	sliderProbability.slidestop = function sliderProbability_slidestop (event)// @startlock
	{// @endlock
		var storedVal={};
		storedVal.currID=sources.result.ID; //identifies the filled value
		storedVal.currLength=sources.result.length; //length of the loop
		storedVal.sumOf=0; //the sum of all probabilities
		storedVal.oldValue=oldValue;

// get the actual values of the entity collection and do the work
		sources.result.getElements(0, storedVal.currLength, {
		onSuccess:function(event){
		var refArray=[];
		event.elements.forEach(function(elem){
			var ind={}
			storedVal.sumOf +=elem.probability;
			ind.ID=elem.ID;
			ind.probability=elem.probability;
			refArray.push(ind);
			if(elem.ID==storedVal.currID) {storedVal.currProb=elem.probability}
		})
		
		if(storedVal.sumOf <=100) {
			//do nothing
		}  else {
			refreshControls(storedVal,refArray)
		}
		
		}	
		})
	};// @lock

	dataGridEvent.onRowClick = function dataGridEvent_onRowClick (event)// @startlock
	{// @endlock
			sources.event.createResult(
			{onSuccess: function(event) {
				sources.result.query("batch=:1", event.result)	
			}, onError: function(event){
				a = event
			}
			}
		)
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("sliderProbability", "slidestart", sliderProbability.slidestart, "WAF");
	WAF.addListener("sliderProbability", "slidestop", sliderProbability.slidestop, "WAF");
	WAF.addListener("dataGridEvent", "onRowClick", dataGridEvent.onRowClick, "WAF");
// @endregion
};// @endlock
