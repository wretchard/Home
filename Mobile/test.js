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
//loginByPassword("Data", "a")

//ds.Outcome.query("event.ID=1")
//ds.User.remove();
//addOneUser("test@email.com", "password", "Admin", "test")
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
//ds.Result.length;	
//ds.Result.query("probability > 0")
//ds.Result.query("probability>0").probability;
ds.Result.length;
//var a = {};
//var b={}
//a.name="able"
//a.cost=10;
//b.name="baker"
//b.cost=5
//var c=[]
//c.push(a)
//c.push(b)
//c.name == "able"
 
