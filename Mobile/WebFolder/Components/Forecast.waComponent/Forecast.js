
(function Component (id) {// @lock

// Add the code that needs to be shared between components here
var foreCastArray;

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
				$$('componentMain').sources.result.query("batch=:1", event.result)
			}, onError: function(event){
				console.log(event)
			}
			}
		)	
		}	
		})




	// @region namespaceDeclaration// @startlock
	var buttonSave = {};	// @button
	var sliderProbability = {};	// @slider
	var resultEvent = {};	// @dataSource
	// @endregion// @endlock

	// eventHandlers// @lock

	buttonSave.click = function buttonSave_click (event)// @startlock
	{// @endlock
		var returnArray=[];
		
		$$('componentMain').sources.resultArray.getElements(0, $$('componentMain').sources.resultArray.length, 
		{onSuccess: function(event) {
		
        event.elements.forEach(function(element) {
        	obJ={};
            obJ.ID=element.ID;
            obJ.outDesc=element.outDesc;
            obJ.outName=element.outName;
            obJ.probability=element.probability;
            returnArray.push(obJ);
        })
//        console.log(returnArray);
        $$('componentMain').sources.result.loadValues(returnArray, {onSuccess: function(event) {
        	console.log(event.result);
        }})
		}
//		
		});

	};// @lock
	
	

	sliderProbability.slidestop = function sliderProbability_slidestop (event)// @startlock
	{// @endlock
		var currID=$$('componentMain').sources.resultArray.getCurrentElement().ID;
		var currProb=$$('componentMain').sources.resultArray.getCurrentElement().probability;
		var norm=0;
		var adj=0;
		sumOfProbability=0;
		
		for(i=0;i<foreCastArray.length; i++) {
			$$('componentMain').sources.resultArray.selectByKey(foreCastArray[i].ID)
			sumOfProbability+=$$('componentMain').sources.resultArray.getCurrentElement().probability
			
			}
		
		norm=sumOfProbability-currProb;
		adj=100-sumOfProbability;
		
		if(sumOfProbability >100) {
			for(i=0;i<foreCastArray.length; i++) {
			if (foreCastArray[i].ID !==currID) {
			$$('componentMain').sources.resultArray.selectByKey(foreCastArray[i].ID)
			indProb=$$('componentMain').sources.resultArray.getCurrentElement().probability
			a=adj*(indProb/norm)
			$$('componentMain').sources.resultArray.getCurrentElement().probability+=a
			}
			}
		}
		$$('componentMain').sources.resultArray.sync()
	};// @lock

	resultEvent.onCollectionChange = function resultEvent_onCollectionChange (event)// @startlock
	{// @endlock

		$$('componentMain').sources.result.toArray("ID, outName, outDesc, probability", 
			{onSuccess:function(event)
						{
						//remove the existing elements of the sources.resultArray
						foreCastArray=event.result;
						//fill the local array with new data
						for(var i=0; i< event.result.length;i++) {
							$$('componentMain').sources.resultArray.addNewElement()
							$$('componentMain').sources.resultArray.getCurrentElement().ID=event.result[i].ID
							$$('componentMain').sources.resultArray.getCurrentElement().outName =event.result[i].outName;
							$$('componentMain').sources.resultArray.getCurrentElement().outDesc=event.result[i].outDesc;
							$$('componentMain').sources.resultArray.getCurrentElement().probability=event.result[i].probability;
							$$('componentMain').sources.resultArray.save();	
						}
						$$('componentMain').sources.resultArray.sync();
						}
					}
					)		
				// Add your code here
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_buttonSave", "click", buttonSave.click, "WAF");
	WAF.addListener(this.id + "_sliderProbability", "slidestop", sliderProbability.slidestop, "WAF");
	WAF.addListener(this.id + "_result", "onCollectionChange", resultEvent.onCollectionChange, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
