function setAus(d) {
	//d=  new Date()
	localTime= d.getTime()
	localOffSet=d.getTimezoneOffset()*60000
	utc=localTime + localOffSet
	aeTime= utc + (10 * 3600000)
	return new Date(aeTime)	
}

model.Event.events.validateremove = function(event) {

	var result = {error:0};
	
	if (this.outcomes.length !==0) {
		result={error:1, errorMessage:"There are outcomes associated with this event. Delete them first."}
		
	}
	
	return result;
};


model.Event.closingDate.events.set = function(event) {
	
	this.closingDate=setAus(this.closingDate);
	
};


model.Event.openingDate.events.set = function(event) {
	
	this.openingDate=setAus(this.openingDate);
};


model.Event.evaluationDate.events.set = function(event) {
	
	this.evaluationDate=setAus(this.evaluationDate);
	
};
