

model.Event.events.validateremove = function(event) {

	var result = {error:0};
	
	if (this.outcomes.length !==0) {
		result={error:1, errorMessage:"There are outcomes associated with this event. Delete them first."}
		
	}
	
	return result;
};
