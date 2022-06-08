// To implement this resolution in Beecrowd, just change input path to /dev/stdin

var input = require('fs').readFileSync('1015-distance-between-two-points/dev/stdin', 'utf8');

/* In the snippet below, I noticed that input.split(' ') was breaking the lines. In order to fix this, I 
passed a RegEx as a param to split(), combinating both ' ' and \n as a param*/

var lines = input.split(/[\n' ']/);

const calcDistance = (...lines) => {
    const x1 = Number(lines[0]);
    const y1 = Number(lines[1]);
    const x2 = Number(lines[2]);
    const y2 = Number(lines[3]);
    const squareOfDifferenceX = (x2 - x1) ** 2;
    const squareOfDifferenceY = (y2 - y1) ** 2;
    const distance = Math.sqrt(squareOfDifferenceX + squareOfDifferenceY);
    return distance;
};

const distance = calcDistance(...lines);

console.log(distance.toFixed(4)); 
