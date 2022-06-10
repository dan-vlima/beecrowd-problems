// In order to submit this answer on Beecrowd, change path to /dev/stdin

var input = require('fs').readFileSync('1037-map-interval/dev/stdin', 'utf8');
var lines = input.split('\n');

const mapInterval = (lines) => {
    const number = Number(lines[0]);
    if (number >= 0 && number <= 25.00) {
        console.log("Intervalo [0,25]");
    }
    if (number > 25.00 && number <= 50.00) {
        console.log("Intervalo (25,50]");
    }
    if (number > 50.00 && number <= 75.00) {
        console.log("Intervalo (50,75]");
    } 
    if (number > 75.00 && number <= 100.00) {
        console.log("Intervalo (75,100]");
    } 
    if (number > 100.00 || number < 0) {
        console.log("Fora de intervalo");
    }
};

mapInterval(lines);
