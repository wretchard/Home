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

//ds.Outcome.query("event.ID=1")
//ds.User.remove();
//addOneUser("customer@email.com", "password", "Worker", "customer")
//addOneUser("tester3@email.com", "password", "Admin", "tester3")
//ds.Result.outcome= ds.Outcome.find("ID=1")
//ds.Result.outcome.save();

//ds.Event.all()
//loginByPassword("Data", "a")
//ds.User.all()
//currentSession()

//ds.User.all()
//ds.Outcome(1).event.eventName

//ds.Outcome.all()
//var a = ds.Event.find("ID=:1", 1).outcomes
//a.forEach(function(outcome){
////	var b=outcome	
//	result=new ds.Result
//}

//)

//ds.User(currentUser().ID)
//currentUser().ID
//ds.User("B530A0032802F54B9FC1312EAE362802")
//ds.Result.remove();
//a=ds.Event.all().outcomes.results
//a.query("me='tester3'")


//a=ds.Result.all()
//a.event.ID
//ds.User.all();
//ds.Result.query("probability > 0")
//ds.Result.query("probability>0").probability;


 
//ds.User.all();
//ds.MyResult.length;
//ds.MyResult.all().displayDate

//"147AE3C803A79C4F8BE2E79CFD6C71B2"
//a= ds.Event.query("outcomes.ID !==null")
//a.remove()
//var result=ds.MyResult.createEntityCollection();
//var a=ds.MyResult.query("user.ID=:1", "147AE3C803A79C4F8BE2E79CFD6C71B2")//.distinctValues("batch");

////ds.MyResult.all().event.eventName
//var b= a.distinctValues("batch");

//for (var i=0; i<b.length; i++) {
//result.add(a.find("batch=:1", b[i])	)
//}

//result.orderBy("timeS")
//a.compute

//var d = Date(1427266909810);
//d

//ds.Result.all().remove()

testEmail("wretchardthecat@hotmail.com")