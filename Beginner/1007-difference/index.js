const filePath = __dirname.split("\\").pop() + "/dev/stdin";
const input = require("fs").readFileSync(filePath, "utf8");

// Down below, the code you must insert on Beecrowd

var lines = input.split('\n');

const calcDifference = (lines) => {
    const [value1, value2, value3, value4] = lines.map(Number)
    const difference = (value1 * value2) - (value3 * value4);
    return difference;
};

const answer = calcDifference(lines);

console.log(`DIFERENCA = ${answer}`);
