var fs = require('fs');

var array = fs.readFileSync('aoc2data.csv').toString().split("\r\n");
var total = [];

for (i in array) {
    var game = array[i].split(" ");
    
    
    //console.log(game[1]);

//    for (i in game) {
//        if (game[1] == "X") {
//        var score = 1; 
//        } else if (game[1] == "Y") {
//        var score = 2;
//        } else if (game[1] == "Z") {
//        var score = 3;
//        }
//    }

    console.log(score);

    for (i in game) {
        if (game[0] == "A" && game[1] == "X") {
            var morePoints = 0;
            var score = 3;
        } else if (game[0] == "A" && game[1] == "Y") {
            var morePoints = 3;
            var score = 1;
        } else if (game[0] == "A" && game[1] == "Z") {
            var morePoints = 6;
            var score = 2;
        } else if (game[0] == "B" && game[1] == "Y") {
            var score = 2;
            var morePoints = 3;
        } else if (game[0] == "B" && game[1] == "X") {
            var score = 1;
            var morePoints = 0;
        } else if (game[0] == "B" && game[1] == "Z") {
            var score = 3;
            var morePoints = 6;
        } else if (game[0] == "C" && game[1] == "Z") {
            var score = 1;
            var morePoints = 6;
        } else if (game[0] == "C" && game[1] == "Y") {
            var score = 3;
            var morePoints = 3;
        } else if (game[0] == "C" && game[1] == "X") {
            var score = 2;
            var morePoints = 0;
        }
    };

    console.log(morePoints);
    //console.log(result);
    huh = (score + morePoints).toString();
    console.log(huh);
    fs.appendFile('file.log', huh + "\n", err => {
        if (err) {
          console.error(err);
        }
      });
 };
