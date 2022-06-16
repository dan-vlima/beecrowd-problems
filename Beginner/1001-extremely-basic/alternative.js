var filePath = __dirname.split("\\").pop() + "/dev/stdin";
var input = require("fs").readFileSync(filePath, "utf8");
// Down below, the code you must insert on Beecrowd
var lines = input.split('\n');
var calcSum = function (lines) {
    var a = Number(lines[0]);
    var b = Number(lines[1]);
    var sumAB = a + b;
    return sumAB;
};
var answer = calcSum(lines);
console.log("X = ".concat(answer));
