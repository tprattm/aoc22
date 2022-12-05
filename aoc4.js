var fs = require('fs');

var array = fs.readFileSync('aoc4data.csv').toString().split("\r\n");

var chunked = [];
var rangeCounter = 0;
var rangerCheckCounter = 0;

chunked = ([...chunks(array, 1)]);

for (i in chunked) {
    const checker = (chunked[i].toString().split(","));
    const splitter = (checker[0].toString().split("-"));
    const splitter2 = (checker[1].toString().split("-"));
    if (rangeCheck(splitter[0], splitter[1], splitter2[0], splitter2[1]) == true) {
        rangeCounter++;
        rangerCheckCounter++;
        console.log("Inside " + rangerCheckCounter);
    } else {
        rangerCheckCounter++;
        console.log("Not Inside " + rangerCheckCounter);
    }
} 
console.log(rangeCounter);
console.log(rangerCheckCounter);


function* chunks(arr, n) {
    for (let i = 0; i < arr.length; i += n) {
      yield arr.slice(i, i + n);
    }
  }

function rangeCheck(numA, numB, numC, numD) {
    console.log("numbers are: " + numA + "-" + numB + " " + numC + "-" + numD)
    if ((numA >= numC) && (numB <= numD)) {
        return true;
    }
    else if ((numC >= numA) && (numD <= numB)) {
        return true;
    }
    else {
        return false;
    }
}