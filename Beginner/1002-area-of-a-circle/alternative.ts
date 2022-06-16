var input = require('fs').readFileSync('1002-area-of-a-circle/dev/stdin', 'utf8');
var lines: string = input.split('\n');

const calcCircleArea = (lines: string) => {
    const pi: number = 3.14159;
    const radius: number = Number(lines[0]);
    const circleArea: number = pi * Math.pow(radius, 2);
    return circleArea;
};

const answer: number = calcCircleArea(lines);

console.log(`A=${answer.toFixed(4)}`);
