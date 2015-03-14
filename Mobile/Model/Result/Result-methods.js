

model.Result.collectionMethods.fixSliders = function(varID, batch) {
	returnObj={};
	var vObj = this.compute("probability")
	returnObj.sum=vObj.probability.sum;
	returnObj.length=this.length;
	returnObj.currID=varID;
	returnObj.batch=batch;
	var adJust=(100-returnObj.sum)
	if (adJust>=0) {return returnObj} // exit routine if no adjustments neded
	
	curColl=this.query("ID=:1", varID); //filled value
	remColl=this.minus(curColl); //remaining values	
	var remCompute=remColl.compute("probability");
	var remDenom=remCompute.probability.sum;
	remColl.forEach(
		function(prob) {
			Iprob=prob.probability
			Iprob=Iprob+(adJust*(Iprob/remDenom))
			prob.probability=Iprob;
			prob.save();	
		}
	);
	return returnObj
	
};

model.Result.collectionMethods.fixSliders.scope="public";
