const filePath = __dirname.split("\\").splice(-2).join("/") + "/dev/stdin";
const input = require("fs").readFileSync(filePath, "utf8");

// Down below, the code you must insert on Beecrowd

var lines = input.split('\n');

const calcSum = (lines) => {
    const a = Number(lines[0]);
    const b = Number(lines[1]);
    const sumAB = a + b;
    return sumAB;
};

const answer = calcSum(lines);

console.log(`X = ${answer}`);