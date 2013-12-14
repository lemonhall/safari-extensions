var startYear = 1983;
var endYear   = 2000;

var monthNumbers = ["01","02","03","04","05","06","07","08","09","10","11","12"];

var eachMonth = {};

for(var i=startYear;i<endYear;i++){
	for(var j=0;j<monthNumbers.length;j++){
		var YearMonthKey = ""+i+monthNumbers[j];
		var start = YearMonthKey+"01";
		var end   = "";
		if((j+1)===12){
			end = ""+(i+1)+"0101";
		}else{
			end = ""+i+monthNumbers[j+1]+"01";
		}
		eachMonth[YearMonthKey]={start:start,end:end};
	}
}

console.log(eachMonth);