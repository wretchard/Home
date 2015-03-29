

model.MyResult.events.restrict = function(event) {
	var result=ds.MyResult.createEntityCollection();
	var currSession=currentSession();
	var temp = ds.MyResult.query("user.ID=:1", currSession.user.ID);
//	currSession.user.ID user.ID
	var b= temp.distinctValues("batch");

	for (var i=0; i<b.length; i++) {
		result.add(temp.find("batch=:1", b[i])	)
	}

	return result.orderBy("timeS")
};





model.MyResult.displayDate.onGet = function() {
	return Date(this.timeS);
};
