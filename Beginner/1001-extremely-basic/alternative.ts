const filePath = __dirname.split("\\").pop() + "/dev/stdin";
const input = require("fs").readFileSync(filePath, "utf8");

// Down below, the code you must insert on Beecrowd

var lines = input.split('\n');

const calcSum = (lines: string) => {
    const a: number = Number(lines[0]);
    const b: number = Number(lines[1]);
    const sumAB = a + b;
    return sumAB;
};

const answer: number = calcSum(lines);

console.log(`X = ${answer}`);
