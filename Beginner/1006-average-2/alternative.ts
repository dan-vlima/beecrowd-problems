const filePath = __dirname.split("\\").pop() + "/dev/stdin";
const input: string = require("fs").readFileSync(filePath, "utf8");

// Down below, the code you must insert on Beecrowd

var lines: string[] = input.split('\n');

const calcWeightedAverage = (lines: string[]) => {
    const [dividend1, dividend2, dividend3] = lines.map(Number);
    var weightedAverage: number = ((dividend1 * 2) + (dividend2 * 3) + (dividend3 * 5)) / 10;
    return weightedAverage;
};

const answer: number = calcWeightedAverage(lines);

console.log(`MEDIA = ${answer.toFixed(1)}`);
