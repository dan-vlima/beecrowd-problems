const input = require("fs").readFileSync(`${__dirname}/dev/stdin`.split("\\").pop(), "utf8");

// Down below, the code you must insert on Beecrowd

var lines = input.split(" ");

const formattedLines = lines.map(element => Number(element))

const calculateTotalPrice = (lines) => {
    const productsList = [
        {
            specification: "Cachorro Quente",
            code: 1,
            price: 4.00
        },
        {
            specification: "X-Salada",
            code: 2,
            price: 4.50
        },
        {
            specification: "X-Bacon",
            code: 3,
            price: 5.00
        },
        {
            specification: "Torrada simples",
            code: 4,
            price: 2.00
        },
        {
            specification: "Refrigerante",
            code: 5,
            price: 1.50
        }
    ]

    const productAmount = lines[1]

    const selectedProduct = productsList.find(element => element.code == lines[0])

    const totalPrice = selectedProduct.price * productAmount

    return totalPrice
}

const answer = calculateTotalPrice(formattedLines)

console.log(`Total: R$ ${answer.toFixed(2)}`)
