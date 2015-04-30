

model.Export.methods.exportCSV = function(dateFrom) {
var result = {error: 0}
try {
	t= new Date(dateFrom)
	d = Number(t)
	ds.Export.remove();
	var allResults;
//	allResults=ds.Result.all();
	allResults=ds.Result.query("timeS >= " + d)
	allResults.forEach(
		function(res) {
			Ex=ds.Export.createEntity()
			Ex.ID=res.ID;
			Ex.probability=res.probability;
			Ex.userName=res.me;
			Ex.userEmail=res.userEmail;
			Ex.eventName=res.eventName;
			Ex.eventDescription=res.eventDescription;
			Ex.outComeName=res.outName;
			Ex.outComeDescription=res.outDesc;
			Ex.occurred=res.outOccurred;
			Ex.timeStamp= res.readableTS;
			Ex.save()
		}
	)
}
catch(e)
	{
	result={error:1000, errorMessage:e.message}
	}
	return result;
};
model.Export.methods.exportCSV.scope="public";
