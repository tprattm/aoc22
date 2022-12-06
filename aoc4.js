var fs = require('fs');

var array = fs.readFileSync('aoc5testdata.txt').toString().split("\r\n");

//var chunked = [];
//var rangeCounter = 0;
//var rangerCheckCounter = 0;

//chunked = ([...chunks(array, 1)]);

// for (i in chunked) {
//     const checker = (chunked[i].toString().split(","));
//     const splitter = (checker[0].toString().split("-"));
//     const splitter2 = (checker[1].toString().split("-"));
//     if (rangeCheck(splitter[0], splitter[1], splitter2[0], splitter2[1])) {
//         rangeCounter++;
//         rangerCheckCounter++;
//         console.log("Range Counter is at : " + rangeCounter);
//         console.log("Inside " + rangerCheckCounter);
//     } else {
//         rangerCheckCounter++;
//         console.log("Range Counter is at : " + rangeCounter);
//         console.log("Not Inside " + rangerCheckCounter);
//     }
// } 
// console.log(rangeCounter);
// console.log(rangerCheckCounter);
let answer = 0;
const assignementPairs = array.matchAll(/(\d+)-(\d+),(\d+)-(\d+)/g);
for (const [, fromA, toA, fromB, toB] of assignementPairs) {
  if (+fromA <= +fromB && +toA >= +toB) {
    answer += 1; // a contains b
  } else if (+fromB <= +fromA && +toB >= +toA) {
    answer += 1; // b contains a
  }
}

console.log(answer);


function* chunks(arr, n) {
    for (let i = 0; i < arr.length; i += n) {
      yield arr.slice(i, i + n);
    }
  }

function rangeCheck(numA, numB, numC, numD) {
    console.log("numbers are: " + numA + "-" + numB + " " + numC + "-" + numD);
    if ((numA >= numD && numB <= numC) || (numA <= numD && numB >= numC)) {
        //console.log("true");
        return true;
    } else {
        //console.log("false");
        return false;
    }
}