const input = require("fs").readFileSync(`${__dirname}/dev/stdin`.split("\\").pop(), "utf8");

// Down below, the code you must insert on Beecrowd

const banknotes = parseInt(input)

const getBanknotesOf100 = (input) => {
    if (input >= 100) {
        const banknotesOf100 = input / 100
        return Math.floor(banknotesOf100)
    } else {
        return 0
    }
}

const getBanknotesOf50 = (input, accumulated) => {
    const remaining = input - (100 * accumulated)

    if (remaining >= 50) {
        const banknotesOf50 = Math.floor(remaining / 50)
        return banknotesOf50
    } else {
        return 0
    }
}

const getBanknotesOf20 = (input, accumulated100, accumulated50) => {
    const remaining = input - (accumulated100 * 100) - (accumulated50 * 50)

    if (remaining >= 20) {
        const banknotesOf20 = Math.floor(remaining / 20)
        return banknotesOf20
    } else {
        return 0
    }
}

const getBanknotesOf10 = (input, accumulated100, accumulated50, accumulated20) => {
    const remaining = input - (accumulated100 * 100) - (accumulated50 * 50) - (accumulated20 * 20)

    if (remaining >= 10) {
        const banknotesOf10 = Math.floor(remaining / 10)
        return banknotesOf10
    } else {
        return 0
    }
}

const getBanknotesOf5 = (input, accumulated100, accumulated50, accumulated20, accumulated10) => {
    const remaining = input - (accumulated100 * 100) - (accumulated50 * 50) - (accumulated20 * 20) - (accumulated10 * 10)

    if (remaining >= 5) {
        const banknotesOf5 = Math.floor(remaining / 5)
        return banknotesOf5
    } else {
        return 0
    }
}

const getBanknotesOf2 = (input, accumulated100, accumulated50, accumulated20, accumulated10, accumulated5) => {
    const remaining = input - (accumulated100 * 100) - (accumulated50 * 50) - (accumulated20 * 20) - (accumulated10 * 10) - (accumulated5 * 5)

    if (remaining >= 2) {
        const banknotesOf2 = Math.floor(remaining / 2)
        return banknotesOf2
    } else {
        return 0
    }
}

const getBanknotesOf1 = (input, accumulated100, accumulated50, accumulated20, accumulated10, accumulated5, accumulated2) => {
    const remaining = input - (accumulated100 * 100) - (accumulated50 * 50) - (accumulated20 * 20) - (accumulated10 * 10) - (accumulated5 * 5) - (accumulated2 * 2)

    if (remaining) {
        const banknotesOf1 = remaining
        return banknotesOf1
    } else {
        return 0
    }
}

const banknotesOf100 = getBanknotesOf100(banknotes)

const banknotesOf50 = getBanknotesOf50(banknotes, banknotesOf100)

const banknotesOf20 = getBanknotesOf20(banknotes, banknotesOf100, banknotesOf50)

const banknotesOf10 = getBanknotesOf10(banknotes, banknotesOf100, banknotesOf50, banknotesOf20)

const banknotesOf5 = getBanknotesOf5(banknotes, banknotesOf100, banknotesOf50, banknotesOf20, banknotesOf10)

const banknotesOf2 = getBanknotesOf2(banknotes, banknotesOf100, banknotesOf50, banknotesOf20, banknotesOf10, banknotesOf5)

const banknotesOf1 = getBanknotesOf1(banknotes, banknotesOf100, banknotesOf50, banknotesOf20, banknotesOf10, banknotesOf5, banknotesOf2)

console.log(`${banknotes}\n${banknotesOf100} nota(s) de R$ 100,00\n${banknotesOf50} nota(s) de R$ 50,00\n${banknotesOf20} nota(s) de R$ 20,00\n${banknotesOf10} nota(s) de R$ 10,00\n${banknotesOf5} nota(s) de R$ 5,00\n${banknotesOf2} nota(s) de R$ 2,00\n${banknotesOf1} nota(s) de R$ 1,00`)
