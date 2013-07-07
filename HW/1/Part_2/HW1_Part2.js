function IsPrime(n){
	if (n==1) {return false;}
	else if (n<4) {return true;}
	else if (n%2==0) {return false;}
	else if (n<9) {return true;}
	else if (n%3==0) {return false;}
	else {
		var r=Math.floor(Math.sqrt(n));
		var f=5;
		while (f<=r) {
			if (n%f==0) {
				return false;
				break;
			}
			if (n%(f+2)==0) {
				return false;
				break;
			}
			f=f+6;
		}
		return true;
	}	
}

var limit = 99;
var count = 0;
var PrimeList = new Array();
PrimeList[0]=2; 
var candidate = 1;
while (count < limit) {
	candidate = candidate +2;
	if (IsPrime(candidate)==true) {
		PrimeList.push(candidate);
		count = count + 1
	}
}
result = PrimeList;


var fs = require('fs');
var outfile = "First100Prime.txt";
var  out = result;
fs.writeFileSync(outfile, out);  
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);
