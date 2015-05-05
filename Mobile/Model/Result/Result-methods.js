function makeTimeStamp() {
	ret={}
	d=  new Date()
	localTime= d.getTime()
	localOffSet=d.getTimezoneOffset()*60000
	utc=localTime + localOffSet
	aeTime= utc + (10 * 3600000)
	ausTime = new Date(aeTime).toISOString().substring(0, 16)
	ret.aeTime=aeTime;
	ret.ausTime=ausTime;
	return ret;	
}

model.Result.collectionMethods.removeUnused = function() {
	if (this.length >0) {
		coll = this.compute("timeS");
		if (coll.timeS.min == 0) {
			this.remove();
			return "removed";	
		}
	}

};
model.Result.collectionMethods.removeUnused.scope="public";




model.Result.methods.loadValues = function(arrObj) {
	if(arrObj.length == 0) {return 
	"There is an error"
	}
	
	try {
//	var timeStamp=Date.now();
	var timeStamp=makeTimeStamp()
	var f =ds.Result(arrObj[0].ID)
	collSave=ds.Result.query("batch=:1", f.batch)
	for(var i=0; i<arrObj.length; i++) {
	 var upDate=collSave.find("ID=:1", arrObj[i].ID)
	 upDate.probability = arrObj[i].probability;
	 upDate.readableTS=timeStamp.ausTime;
	 upDate.timeS=timeStamp.aeTime;
	 upDate.save();
		}
	}
	catch(err) 
	{return "error"}
	
	console.log(collSave);
	return "You have successfully saved your forecast."
};
model.Result.methods.loadValues.scope="public";