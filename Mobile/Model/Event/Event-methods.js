

model.Event.entityMethods.createResult = function() {
//	return currentUser().name;
	var curSession = currentSession();
	var curUser = curSession.user;
	var cU=ds.User(curUser.ID)
	var timeStamp=Date.now() / 1000 | 0
	this.outcomes.forEach(
		function(outcome) {
			newResult = new ds.Result();
			newResult.probability=0;
			newResult.user=cU;
			newResult.timeS=timeStamp;
			newResult.outcome=outcome;
			newResult.save();
			
//			new ds.User({email : emailAdd,
//			password : password,
//			role :  role,
//			fullName : fullName
//			}).save();

		}
	)
//	return this.ID;
//	throw {error: 100, errorMessage: 'bad stuff happened'}
};

model.Event.entityMethods.createResult.scope = "public";