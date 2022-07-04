const input = require("fs").readFileSync( `${__dirname}/dev/stdin`.split("\\").pop(), "utf8");

// Down below, the code you must insert on Beecrowd

const daysConverter = (input) => {
    const numberOfDays = parseInt(input)

    const numberOfYears = Math.floor(numberOfDays / 365)

    const numberOfMonths = Math.floor((numberOfDays % 365) / 30)

    const restInDays = (numberOfDays % 365) % 30

    const timeArray = [numberOfYears, numberOfMonths, restInDays]

    return timeArray
}

const answerArray = daysConverter(input)

console.log(`${answerArray[0]} ano(s)\n${answerArray[1]} mes(es)\n${answerArray[2]} dia(s)`)