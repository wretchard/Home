

model.Event.entityMethods.createResult = function() {
//	return currentUser().name;
	var curSession = currentSession();
	var curUser = curSession.user;
	var cU=ds.User(curUser.ID)
//	var timeStamp=Date.now() / 1000 | 0
	var timeStamp=Date();
	var uuid=generateUUID();
	var outLength=this.outcomes.length
	this.outcomes.forEach(
		function(outcome) {
			newResult = new ds.Result();
			newResult.probability=(100/outLength);
			newResult.user=cU;
			newResult.timeS=timeStamp;
			newResult.outcome=outcome;
			newResult.batch=uuid;
			newResult.save();
			
//			new ds.User({email : emailAdd,
//			password : password,
//			role :  role,
//			fullName : fullName
//			}).save();

		}
	)
	return uuid;
//	throw {error: 100, errorMessage: 'bad stuff happened'}
};

model.Event.entityMethods.createResult.scope = "public";