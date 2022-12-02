var fs = require('fs');

var array = fs.readFileSync('aoc1data.csv').toString().split("\r\n\r\n");

var arr = [];
array.forEach((item) => arr.push(item.split("\r\n").map(function(t){return parseInt(t)})));

var total = [];
for (var i in arr) {
    const sum = arr[i].reduce((pv, cv) => pv + cv, 0);
    total.push(sum);
}

total.sort(function(a,b){return b - a});
console.log(total);

const max = total.reduce((a, b) => Math.max(a, b), -Infinity);
const topThree = total[0] + total[1] + total[2];

console.log("Largest Number is: " + max);
console.log("Top 3 calories combine: " + topThree);