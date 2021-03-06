

model.User.password.onGet = function() {
	return "*****"; //could also return Null.
};


model.User.password.onSet = function(value) {
	this.HA1Key = directory.computeHA1(this.ID, value);
};


model.User.events.validate = function() {
	var err, emailRegexStr, isValid;
	//Check the email to see if it's valid.
	if (this.email !== null) {
		emailRegexStr = /^[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		isValid = emailRegexStr.test(this.email);
		if (!isValid) {
			err = {error: 8080, errorMessage: "Email is invalid."};
		}
	}
	
	return err;
};
