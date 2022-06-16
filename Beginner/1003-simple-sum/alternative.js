var input = require('fs').readFileSync('1003-simple-sum/dev/stdin', 'utf8');
var lines = input.split('\n');
var calcSum = function (lines) {
    var a = lines[0], b = lines[1];
    var sumAB = Number(a) + Number(b);
    return sumAB;
};
var answer = calcSum(lines);
console.log("SOMA = ".concat(answer));
