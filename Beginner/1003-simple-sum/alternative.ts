var input = require('fs').readFileSync('1003-simple-sum/dev/stdin', 'utf8');
var lines: string = input.split('\n');

const calcSum = (lines: string) => {
    const [a, b] = lines;
    const sumAB: number = Number(a) + Number(b);
    return sumAB;
};

const answer: number = calcSum(lines);

console.log(`SOMA = ${answer}`);
