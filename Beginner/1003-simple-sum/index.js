var input = require('fs').readFileSync('1003-simple-sum/dev/stdin', 'utf8');
var lines = input.split('\n');

const calcSum = (lines) => {
    const [a, b] = lines;
    const sumAB = Number(a) + Number(b);
    return sumAB;
};

const answer = calcSum(lines);

console.log(`SOMA = ${answer}`);
