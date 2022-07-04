const filePath = __dirname.split("\\").pop() + "/dev/stdin";
const input = require("fs").readFileSync(filePath, "utf8");

// Down below, the code you must insert on Beecrowd

var lines = input.split('\n');

type answerFunction = (a: string) => number

const calcProduct: answerFunction = (lines: string) => {
    const [a, b]: string = lines;
    const productAB = Number(a) * Number(b);
    return productAB;
};

const answer = calcProduct(lines);

console.log(`PROD = ${answer}`);
