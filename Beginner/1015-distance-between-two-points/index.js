// To implement this resolution in Beecrowd, just change input path to /dev/stdin

var input = require('fs').readFileSync('1015-distance-between-two-points/dev/stdin', 'utf8');

/* 
In the snippet below, I noticed that input.split(' ') was merging the second and third values 
coming from the input file, stdin. It happened because in the ending of line 1 there's no space 
to be split by the split() method. In order to fix this, I passed a RegEx as a param to split(), 
combinating both ' ' and \n as a param
*/

var lines = input.split("\n");

const calcDistance = (...lines) => {
    const [x1, y1] = lines[0].split(" ").map(Number);
    console.log(x1)
    const [x2, y2] = lines[1].split(" ").map(Number);
    console.log(x2)
    const squareOfDifferenceX = (x2 - x1) ** 2;
    const squareOfDifferenceY = (y2 - y1) ** 2;
    const distance = Math.sqrt(squareOfDifferenceX + squareOfDifferenceY);
    return distance;
};

const distance = calcDistance(...lines);



console.log(distance.toFixed(4)); 
