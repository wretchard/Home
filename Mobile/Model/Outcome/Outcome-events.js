

model.Outcome.Occurred.events.init = function(event) {
	this.Occurred= false;
};


model.Outcome.events.validate = function(event) {
	var result = {error:0};
	
	if (this.outComeName.length==0) {
		result={error:1, errorMessage:"No outcome name"}
		
	}
	
	return result;
};
