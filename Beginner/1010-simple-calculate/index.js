// To implement this resolution in Beecrowd, just change input path to /dev/stdin

var input = require('fs').readFileSync('1010-simple-calculate/dev/stdin', 'utf8');

/* 
In the snippet below, I noticed that input.split(' ') was merging the second and third values 
coming from the input file, stdin. It happened because in the ending of line 1 there's no space 
to be split by the split() method. In order to fix this, I passed a RegEx as a param to split(), 
combinating both ' ' and \n as a param
*/

var lines = input.split(/[\n' ']/);

const calcTotalPrice = (...lines) => {
    const codeOfProduct1 = Number(lines[0]);
    const unitsOfProduct1 = Number(lines[1]);
    const priceOfProduct1 = Number(lines[2]);
    const codeOfProduct2 = Number(lines[3]);
    const unitsOfProduct2 = Number(lines[4]);
    const priceOfProduct2 = Number(lines[5]);
    const totalPrice = (unitsOfProduct1 * priceOfProduct1) + (unitsOfProduct2 * priceOfProduct2);
    return totalPrice;
};

const totalPrice = calcTotalPrice(...lines);

console.log(`VALOR A PAGAR: R$ ${totalPrice.toFixed(2)}`); 
