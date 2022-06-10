var input = require('fs').readFileSync('1021-banknotes-and-coins/dev/stdin', 'utf8');
const lines = input.split("\n");

const value = Number(lines[0]);
const bankNotes = [100, 50, 20, 10, 5, 2];
const coins = [1, 0.5, 0.25, 0.1, 0.05, 0.01];

const toCents = (value) => {
    return Number(value.toFixed(2).replace(".", ""))
}
const toCurrency = (value) => value / 100
const processCurrency = (value, currency) => {
    const valueAsCents = toCents(value)
    const currencyAsCents = toCents(currency)
    const amount = Math.floor(valueAsCents / currencyAsCents)
    const remaining = toCurrency(valueAsCents % currencyAsCents);
    return { value, currency, amount, remaining }
}

const answer = bankNotes.concat(coins).reduce((acc, currency, index) => {
    const remaining = acc[index - 1]?.remaining || value
    const processedCurrency = processCurrency(remaining, currency);
    acc.push(processedCurrency);
    return acc;
}, [])


const formattedAnswer = () => {
    console.log("NOTAS:")
    for (let i = 0; i < 6; i++) {
        console.log(answer[i].amount + " notas de R$ " + answer[i].currency.toFixed(2))
    }
    console.log("MOEDAS:")
    for (let i = 6; i < answer.length; i++) {
        console.log(answer[i].amount + " notas de R$ " + answer[i].currency.toFixed(2))
    }
}

formattedAnswer()
