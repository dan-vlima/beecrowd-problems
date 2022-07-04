const input = require("fs").readFileSync( `${__dirname}/dev/stdin`.split("\\").pop(), "utf8");

// Down below, the code you must insert on Beecrowd

var lines = input.split(" ");


const dataValidator = (lines) => {
    const convertedInput = lines.map(element => Number(element))
    const [a, b, c, d] = convertedInput
    if (((b > c) && (d > a)) && ((c + d) > (a + b)) && (c && d >= 0) && (a % 2 == 0)) {
        return true
    } else {
        return false
    }
}

const answerDisplayer = (dataValidator) => {
    if (dataValidator == true) {
        console.log("Valores aceitos")
    } else {
        console.log("Valores nao aceitos")
    }
}

answerDisplayer(dataValidator(lines)) 
