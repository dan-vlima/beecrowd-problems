var input = require('fs').readFileSync('1002-area-of-a-circle/dev/stdin', 'utf8');
var lines = input.split('\n');

const calcCircleArea = (lines) => {
    const pi = 3.14159;
    const radius = Number(lines[0]);
    const circleArea = pi * Math.pow(radius, 2);
    return circleArea;
};

const answer = calcCircleArea(lines);

console.log(`A=${answer.toFixed(4)}`);
