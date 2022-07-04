const filePath = __dirname.split("\\").pop() + "/dev/stdin";
const input: string = require("fs").readFileSync(filePath, "utf8");

// Down below, the code you must insert on Beecrowd

var lines: string[] = input.split('\n');

const calcDifference = (lines: string[]) => {
    const [value1, value2, value3, value4] = lines.map(Number)
    const difference: number = (value1 * value2) - (value3 * value4);
    return difference;
};

const answer: number = calcDifference(lines);

console.log(`DIFERENCA = ${answer}`);
