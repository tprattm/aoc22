var fs = require('fs');
const { Z_ASCII } = require('zlib');

var array = fs.readFileSync('aoc5data.txt').toString().split("\r\n");
var stackArray = fs.readFileSync('aoc5stackdata.txt').toString().split("\r\n");

//console.log(array);
//console.log(stackArray);

const stacks = Array.from({length: 9}, () => []);
stackArray.slice(0, -1).forEach((line) => {
    for (let i = 1; i < line.length; i += 4){
        if (line[i] != " ") {
            stacks[(i - 1) / 4].unshift(line[i]);
        }
    }
});
console.log(stacks); 


var instructions = [];

for (i in array) {
    const instructions = (array[i].toString().split(","));
    //console.log(instructions);
    const countToMove = instructions[0];
   //console.log(countToMove);
    const countFrom = instructions[1] - 1;
    //console.log(countFrom);
    const countTo = instructions[2] - 1;
    //console.log(countTo);
    const remaining = stacks[countFrom].length - countToMove;
    stacks[countTo].push(...stacks[countFrom].slice(remaining));
    stacks[countFrom] = stacks[countFrom].slice(0, remaining);

    //for (let n = 0; n < countToMove; n++) {
        //console.log(countToMove);
        //console.log(countFrom);
        //console.log(countTo);
        //console.log(stacks[countFrom]);
        //stacks[countTo].push(stacks[countFrom].pop());
    //}
}

const answer = stacks.map((s) => s.at(-1)).join("");
console.log(answer);
