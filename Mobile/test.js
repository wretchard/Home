//ds.User.all()
function whatsRunning() {
var numRunningApplications = 0 
var isRunning="";
var appNames=[]; 
solution.applications.forEach(  
    function (app) {  
        numRunningApplications += (app.httpServer.started) ? 1 : 0;
        isRunning=(app.httpServer.started) ? "yes" : "no"
        appNames.push(app.name + ", " + isRunning)   
    }  
);
appNames.push(numRunningApplications);
return appNames;
}

function addOneUser(emailAdd, password, role, fullName){
	new ds.User({email : emailAdd,
	password : password,
	role :  role,
	fullName : fullName
	}).save();
}

function countAllTables() {
	
	var counter;
	var out =[];
	for (var vName in ds.dataClasses)  // put each datastore class of ds
	{
		counter=ds.dataClasses[vName];
		out.push(vName + " is " + counter.length);
	};	
	return out;
};


function testEmail(em) {
	
	//\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b
		if (em !== null) {
			//passwordRegexStr = /^(?=.*\d)[a-zA-Z\d]{7,}$/;
			passwordRegexStr = /^[\w\.=-]+@[\w\.-]+\.[\w]{2,3}$/
			isValid = passwordRegexStr.test(em);
			if (!isValid) {
				return "invalid"
//				$$('componentMain_richTextError').setValue
//				return {error: 8025, errorMessage: "Password must be at least 7 characters."};
			} else {
				return "valid"	
			}
		}
		
}
//loginByPassword("Data", "a")
//addOneUser("customer@email.com", "password", "Worker", "customer")
//ds.Event.all()
//loginByPassword("Data", "a")
//ds.User.all()
//currentSession()
//addOneUser("eugene@email.com", "zaporitsian3", "Admin", "Eugene")
//ds.User.all()
//ds.Outcome.all().remove()
//ds.Result.length
//ds.Result.remove()
//ds.Result.length	
//ds.Result(1342).readableTS
//countAllTables()
//x=ds.ResultExport.all()
//x
ds.Event.all()




