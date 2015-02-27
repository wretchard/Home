function customLogin(email, password) //simple login listener
{
	switch(email) {
		case "Admin":
		return false;
		break;
		
		case "Data":
		return false;	
	}

	var sessionRef = currentSession(); // Get session.
	var myUser = ds.User({email:email});
	if (myUser === null) {
		return false;
	} 
	else {
		if (myUser.validatePassword(password)) {
			var theGroups = [];
			switch (myUser.role) {
				case "Admin":
				//theGroups = ['Administrator'];
				theGroups = ['Admin'];
				break;

				case "Manager":
				theGroups = ['Manager'];
				break;

				default:
				theGroups = ['Employee'];
				break;		
			}
			
			var connectTime = new Date();
			return {
				ID: myUser.ID,
				name: myUser.email, //myUser.login,
				fullName: myUser.fullName, 
				belongsTo: theGroups,
				storage: {time: connectTime}
			}

		}
	 else {
		return {error: 1024, errorMessage: "invalid login"};
	}
	
}
}