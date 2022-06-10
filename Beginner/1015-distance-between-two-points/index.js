// To implement this resolution in Beecrowd, just change input path to /dev/stdin

const input = require("fs").readFileSync('1015-distance-between-two-points/dev/stdin', "utf8");

var lines = input.split("\n");

const calcDistance = (...lines) => {
    const [x1, y1] = lines[0].split(" ").map(Number);
    const [x2, y2] = lines[1].split(" ").map(Number);
    const squareOfDifferenceX = (x2 - x1) ** 2;
    const squareOfDifferenceY = (y2 - y1) ** 2;
    const distance = Math.sqrt(squareOfDifferenceX + squareOfDifferenceY);
    return distance;
};

const distance = calcDistance(...lines);



console.log(distance.toFixed(4)); 
