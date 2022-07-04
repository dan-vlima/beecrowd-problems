const input = require("fs").readFileSync( `${__dirname}/dev/stdin`.split("\\").pop(), "utf8");

// Down below, the code you must insert on Beecrowd

const secondsConverter = (input) => {
    const timeInput = parseInt(input)

    const inputToSeconds = timeInput % 60

    const inputToMinutes = parseInt((timeInput / parseInt(60)) % 60)

    const inputToHours = Math.floor(timeInput / 3600)

    const timeArray = [inputToHours, inputToMinutes, inputToSeconds]

    return timeArray
}

const answerArray = secondsConverter(input)

console.log(`${answerArray[0]}:${answerArray[1]}:${answerArray[2]}`)
