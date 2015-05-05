 function ConvertToCSV(objArray) {
            var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
            var str = '';

            for (var i = 0; i < array.length; i++) {
                var line = '';
                for (var index in array[i]) {
                    if (line != '') line += ','

                    line += array[i][index];
                }

                str += line + '\r\n';
            }

            return str;
 }

/*var
 	stream,
 	csv,
 	x,
 	tab;

CsvWriter =	require('CsvWriter').CsvWriter
stream = new TextStream("C:/Users/wretchard/Downloads/CSVexport6.csv","write",-2);
csv = new CsvWriter(stream,";","UTF-8");
tab = new Array("1","Amal, the cat","BAHOUS");*/


//tab=new Array("ID", "userEmail", "userName", "probability", "eventName", "eventDescription", "outName", "outDesc", "outOccurred", "readableTS")
//t1={ID:"ID", userEmail:"userEmail", userName:"userName", probability:"probability", eventName:"eventName", eventDescription:"eventDescription", outName:"outName", outDesc:"outDesc", outOccurred:"outOccurred", readableTS:"readableTS"}	
//t1={ID:"ID", userEmail:"userEmail", userName:"userName", probability:"probability", eventName:"eventName", eventDescription:"eventDescription", outName:"outName", outDesc:"outDesc"}

//t2={ID:"ID", userEmail:"userEmail", userName:"userName", probability:"probability", eventName:"eventName", eventDescription:"eventDescription", outName:"outName", outDesc:"outDesc", outOccurred:"outOccurred", readableTS:"readableTS"}
//x=ConvertToCSV(tab)
//csv.writeRecord(x)
//csv.Close()
//t1=[{ID:0}, {userEmail:"helllo"}]
//t2=[{ID:1}, {userEmail:"zzzz"}]
//t1.push(t2)
//t1
//tab=ds.Result.query("ID=1136").toArray("ID, userEmail, userName, probability, eventName, eventDescription, outName, outDesc,outOccurred, readableTS")
//tab2= ds.Result.query("ID=1137").toArray("ID, userEmail, userName, probability, eventName, eventDescription, outName, outDesc,outOccurred, readableTS")

//tab = ds.Result.all().toArray("ID, userEmail, userName, probability, eventName, eventDescription, outName, outDesc,outOccurred, readableTS")
//tab = ds.Result.all().toArray("ID, userEmail, userName, probability, eventName, eventDescription, outName, outDesc")

//tab.splice(0, 0, t1)
//t2.push(t1)
//x=ConvertToCSV(tab)
//csv.writeRecord(tab)
//csv.writeRecord(tab)
//csv.Close()
/*var t;
ds.Export.remove();
var allResults;
allResults=ds.Result.all();
allResults.forEach(
	function(res) {
		Ex=ds.Export.createEntity()
		Ex.ID=res.ID;
		Ex.probability=res.probability;
		Ex.userName=res.me;
		Ex.userEmail=res.userEmail;
		Ex.eventName=res.eventName;
		Ex.eventDescription=res.eventDescription;
		Ex.outComeName=res.outName;
		Ex.outComeDescription=res.outDesc;
		Ex.occurred=res.outOccurred;
//		t=Date(res.timeS)
		Ex.timeStamp= new Date(res.timeS);
		Ex.save()
	}
)

ds.Export.all();*/
//ds.Export.length

//t= new Date("4/24/2015 5:33")
//d=Number(t)
//allResults=ds.Result.query("timeS > 1429852918702")
////1429852899453
//allResults.timeS
//ds.Result.remove()
//Date(1429852899453)
//Date(1430389973346)
d=  new Date() // the absolute date in Zulu
//d.toISOString().substring(0, 16)
localTime= d.getTime()

d.getTimezoneOffset()
localOffSet=d.getTimezoneOffset()* 60000
utc=localTime + localOffSet
aeTime= utc + (10 * 3600000)
ausTime = new Date(aeTime).toISOString().substring(0, 16)
//utcTime= Date(utc)
/*a={}
a.localTime=Date(localTime)
a.utc=Date(utc)
a*/

//a=Date.parse(sydDate)
//gmt = d.toISOString().substring(0, 16)
//sd=(d+offSet)
//locT= new Date(sd)
//locT.substring(0, 16)

