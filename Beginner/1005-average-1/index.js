const filePath = __dirname.split("\\").pop() + "/dev/stdin";
const input = require("fs").readFileSync(filePath, "utf8");

// Down below, the code you must insert on Beecrowd

var lines = input.split('\n');

const calcWeightedAverage = (lines) => {
    const [dividend1, dividend2] = lines.map(Number);
    var weightedAverage = ((dividend1 * 3.5) + (dividend2 * 7.5)) / 11;
    return weightedAverage;
};

const answer = calcWeightedAverage(lines);

console.log(`MEDIA = ${answer.toFixed(5)}`);
