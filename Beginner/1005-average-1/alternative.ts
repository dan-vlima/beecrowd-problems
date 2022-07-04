const filePath = __dirname.split("\\").pop() + "/dev/stdin";
const input: string = require("fs").readFileSync(filePath, "utf8");

// Down below, the code you must insert on Beecrowd

var lines: string[] = input.split('\n');

const calcWeightedAverage = (lines: string[]) => {
    const [dividend1, dividend2] = lines.map(Number);
    const weightedAverage: number = ((dividend1 * 3.5) + (dividend2 * 7.5)) / 11;
    return weightedAverage;
};

const answer: number = calcWeightedAverage(lines);

console.log(`MEDIA = ${answer.toFixed(5)}`);
