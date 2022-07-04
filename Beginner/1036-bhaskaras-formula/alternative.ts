const input = require("fs").readFileSync( `${__dirname}/dev/stdin`.split("\\").pop(), "utf8");

// Down below, the code you must insert on Beecrowd

var lines = input.split(" ");

const calculateDelta = (lines) => {
    const [a, b, c] = lines.map(Number);
    const delta = (b * b) - 4 * a * c;
    return delta;
};

const calculateRoot1 = (lines) => {
    const delta = calculateDelta(lines);
    const [a, b, c] = lines.map(Number);
    const divider = 2 * a;
    const negativeB = b * (-1);
    const root1 = (negativeB + Math.sqrt(delta)) / (divider);
    if ((delta >= 0) && (divider > 0)) {
        return root1
    } else {
        return undefined
    }

};

const calculateRoot2 = (lines) => {
    const delta = calculateDelta(lines);
    const [a, b, c] = lines.map(Number);
    const divider = 2 * a;
    const negativeB = b * (-1);
    const root2 = (negativeB - Math.sqrt(delta)) / (divider);
    if ((delta >= 0) && (divider > 0)) {
        return root2;
    } else {
        return undefined;
    }
};

const bhaskaraRoot1 = calculateRoot1(lines);

const bhaskaraRoot2 = calculateRoot2(lines);

const canCalculate = bhaskaraRoot1 && bhaskaraRoot2;

    if (canCalculate){
    console.log(`R1 = ${Number(bhaskaraRoot1).toFixed(5)}\nR2 = ${Number(bhaskaraRoot2).toFixed(5)}`);
} else {
    console.log('Impossivel calcular');
}
