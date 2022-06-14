var input = require('fs').readFileSync('1001-extremely-basic/dev/stdin', 'utf8');
var lines = input.split('\n');

const calcSum = (lines) => {
    const a = Number(lines[0]);
    const b = Number(lines[1]);
    const sumAB = a + b;
    return sumAB;
};

const answer = calcSum(lines);

console.log(`X = ${answer}`);