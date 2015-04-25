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

var
 	stream,
 	csv,
 	x,
 	tab;
CsvWriter =	require('CsvWriter').CsvWriter
stream = new TextStream("C:/Users/wretchard/Downloads/xxx.csv","write",-2);
csv = new CsvWriter(stream,";","UTF-8");
//tab = ds.Result.all().toArray()
tab = ds.Result.all().toArray("ID, outName, outDesc, eventName, userEmail,")
x=ConvertToCSV(tab)
//tab = new Array("1","Amal","BAHOUS");
csv.writeRecord(x)
csv.Close()