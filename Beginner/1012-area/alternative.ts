const filePath: string = __dirname.split("\\").pop() + "/dev/stdin";
const input: string = require("fs").readFileSync(filePath, "utf8");

// Down below, the code you must insert on Beecrowd

var lines: string[] = input.split(" ");

type AreaCalculatorFunctionType = (lines: string[]) => number

const calcRectangledTriangleArea: AreaCalculatorFunctionType  = (lines) => {
    const [a, b, c] = lines.map(Number);
    const rectangledTriangleArea = (a * c) / 2;
    return rectangledTriangleArea;
};

const calcCircleArea: AreaCalculatorFunctionType = (lines) => {
    const pi = 3.14159;
    const [a, b, c] = lines.map(Number);
    const circleArea = (pi * c * c);
    return circleArea;
};

const calcTrapeziumArea: AreaCalculatorFunctionType = (lines) => {
    const [a, b, c] = lines.map(Number);
    const trapeziumArea = ((a + b) * c) / 2;
    return trapeziumArea;
};

const calcSquareArea: AreaCalculatorFunctionType = (lines) => {
    const [a, b, c] = lines.map(Number);
    const squareArea = b * b;
    return squareArea;
};

const calcRectangleArea: AreaCalculatorFunctionType = (lines) => {
    const [a, b, c] = lines.map(Number);
    const rectangleArea = a * b;
    return rectangleArea;
};

const rectangledTriangleArea = calcRectangledTriangleArea(lines);

const circleArea = calcCircleArea(lines);

const trapeziumArea = calcTrapeziumArea(lines);

const squareArea = calcSquareArea(lines);

const rectangleArea = calcRectangleArea(lines);

console.log(`TRIANGULO: ${rectangledTriangleArea.toFixed(3)}`);
console.log(`CIRCULO: ${circleArea.toFixed(3)}`);
console.log(`TRAPEZIO: ${trapeziumArea.toFixed(3)}`);
console.log(`QUADRADO: ${squareArea.toFixed(3)}`);
console.log(`RETANGULO: ${rectangleArea.toFixed(3)}`);
