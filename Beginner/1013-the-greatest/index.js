const input = require("fs").readFileSync( `${__dirname}/dev/stdin`.split("\\").pop(), "utf8");

// Down below, the code you must insert on Beecrowd

var lines = input.split(' ');

const getGreatestNumber = (params) => {
    const [number1, number2, number3] = params.map(element => Number(element));

    const greatestNumber = Math.max(number1, number2, number3);

    return greatestNumber;
};

const answer = getGreatestNumber(lines);

console.log(`${answer} eh o maior`);
