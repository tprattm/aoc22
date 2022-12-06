var fs = require('fs');

var array = fs.readFileSync('aoc6data.txt').toString().split("");

console.log(array);

for (let i=0; i < array.length; i++) {
    const fourChar = [];
    const fourteenChar = [];
    const charA = array[i];
    const charB = array[i+1];
    const charC = array[i+2];
    const charD = array[i+3];
    const charE = array[i+4];
    const charF = array[i+5];
    const charG = array[i+6];
    const charH = array[i+7];
    const charI = array[i+8];
    const charJ = array[i+9];
    const charK = array[i+10];
    const charL = array[i+11];
    const charM = array[i+12];
    const charN = array[i+13];

    fourChar.push(charA, charB, charC, charD);
    //console.log(fourChar);

    fourteenChar.push(charA, charB, charC, charD, charE, charF, charG, charH, charI, charJ, charK, charL, charM, charN);
    
    if (hasDuplicates(fourteenChar)) {
        console.log("Here you go! " + (i + 14))
        break;
      }

    
    //var alreadySeen = {};
    //fourChar.forEach(str => alreadySeen[str] ? console.log(str + " " + (i + 5)) : alreadySeen[str] = true);


    //console.log(findDuplicates(fourChar));

    //console.log(charA);
}

function findDuplicates(arr) {
    if (arr => arr.filter((item, index) => arr.indexOf(item) != index));
    return true;
}


function hasDuplicates(arr) {
    var counts = [];

    for (var i = 0; i <= arr.length; i++) {
        if (counts[arr[i]] === undefined) {
            counts[arr[i]] = 1;
        } else {
            return false;
        }
    }
    return true;
}

// [...]

