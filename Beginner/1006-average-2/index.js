const filePath = __dirname.split("\\").pop() + "/dev/stdin";
const input = require("fs").readFileSync(filePath, "utf8");

// Down below, the code you must insert on Beecrowd

var lines = input.split('\n');

const calcWeightedAverage = (lines) => {
    const [dividend1, dividend2, dividend3] = lines.map(Number);
    var weightedAverage = ((dividend1 * 2) + (dividend2 * 3) + (dividend3 * 5)) / 10;
    return weightedAverage;
};

const answer = calcWeightedAverage(lines);

console.log(`MEDIA = ${answer.toFixed(1)}`);
