

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
	var timeStamp=Date.now();
	var f =ds.Result(arrObj[0].ID)
	collSave=ds.Result.query("batch=:1", f.batch)
	for(var i=0; i<arrObj.length; i++) {
	 var upDate=collSave.find("ID=:1", arrObj[i].ID)
	 upDate.probability = arrObj[i].probability;
	 upDate.timeS=timeStamp;
	 upDate.save();
		}
	}
	catch(err) 
	{return "error"}
	
	console.log(collSave);
	return "You have successfully saved your forecast."
};
model.Result.methods.loadValues.scope="public";