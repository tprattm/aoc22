const { count, countReset } = require('console');
const exp = require('constants');
var fs = require('fs');
const { resourceLimits } = require('worker_threads');

var array = fs.readFileSync('aoc3data.csv').toString().split("\r\n");

console.log(array);


var count22 = 0;
var count33 = 0;
for (i in array) {
    var s = array[i];
    var idx = s.length / 2;
    var s1 = s.substring(0, idx);
    var s2 = s.substring(idx);

    while(s1.length && s2.length) {
        if (s2.includes(s1.charAt(0))) {
           
            if (s1.charAt(0) == s1.charAt(0).toUpperCase()) {
                console.log(s1.charAt(0));
                var charNumber = s1.charCodeAt(0);
                console.log(charNumber);
                var charNumberTotal = (charNumber - 38);
                console.log(charNumberTotal);
                count22 = count22 + charNumberTotal;
            } else {
                console.log(s1.charAt(0));
                var charNumber = s1.charCodeAt(0);
                console.log(charNumber);
                var charNumberTotal = (charNumber - 96);
                console.log(charNumberTotal);
                count22 = count22 + charNumberTotal;
            }
            break;
        }
        else {
            s1 = s1.slice(1);
        }
    }
    console.log(count22);
}

    let threeBags = []
    while (array.length) {
        threeBags.push(array.splice(0, 3));
    }

    for (var i = 0; i < threeBags.length; i++) {
        const combined = Array.of(threeBags[i][0].split(""), threeBags[i][1].split(""), threeBags[i][2].split(""));
        common = combined.reduce((p,c) => p.filter(e => c.includes(e)));
        if (common[0] == common[0].toUpperCase()) {
            var charNumber = common[0].charCodeAt(0);
            var charNumberTotal = (charNumber - 38);
            count33 = count33 + charNumberTotal;
        } else {
            var charNumber = common[0].charCodeAt(0);
            var charNumberTotal = (charNumber - 96);
            count33 = count33 + charNumberTotal;
        }
    }
    console.log(count33);




    