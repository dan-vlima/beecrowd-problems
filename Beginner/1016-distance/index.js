// // In order to submit this answer on Beecrowd, change the path to /dev/stdin

var input = require('fs').readFileSync('1016-distance/dev/stdin', 'utf8');
var lines = input.split('\n');

const calcDistanceBetweenCars = (lines) => {
    const firstCarSpeed = 60;
    const secondCarSpeed = 90;
    const elapsedTime = Number(lines[0]);
    const distanceAfterSomeTime = elapsedTime * 2;
    return distanceAfterSomeTime;
}

const distanceAfterSomeTime = calcDistanceBetweenCars(lines);

console.log(`${distanceAfterSomeTime} minutos`);
