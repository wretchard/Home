function makeTimeStamp() {
	ret={}
	d=  new Date()
	localTime= d.getTime()
	localOffSet=d.getTimezoneOffset()*60000
	utc=localTime + localOffSet
	aeTime= utc + (10 * 3600000)
	ausTime = new Date(aeTime).toISOString().substring(0, 16)
	ret.aeTime=aeTime;
	ret.ausTime=ausTime;
	return ret;	
}

model.Event.entityMethods.createResult = function() {
//	return currentUser().name;
	var curSession = currentSession();
	var curUser = curSession.user;
	var cU=ds.User(curUser.ID)
//	var timeStamp= new Date();
	var tst=makeTimeStamp()
	var uuid=generateUUID();
	var outLength=this.outcomes.length
	this.outcomes.forEach(
		function(outcome) {
			newResult = new ds.Result();
			newResult.probability=(100/outLength);
			newResult.user=cU;
//			newResult.readableTS=timeStamp.toLocaleString();
//			newResult.timeS=Number(timeStamp);
//			newResult.readableTS=tst.ausTime;
//			newResult.timeS=tst.aeTime;	
			newResult.timeS=0;		
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