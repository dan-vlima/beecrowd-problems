/* 
Uncompleted code below:
Beecrowd answer

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const pi = 3.14159;
var a = parseFloat(lines.shift(3.0));
var b = parseFloat(lines.shift(4.0));
var c = parseFloat(lines.shift(5.2));

var triangle = ( a * c ) / 2;
var circle = ( pi * c * c);
var trapezium = (( a + b) * c) / 2;
var square = b * b;
var rectangle = a * b;

console.log(`TRIANGULO: ${triangle.toFixed(3)}`);
console.log(`CIRCULO: ${circle.toFixed(3)}`);
console.log(`TRAPEZIO: ${trapezium.toFixed(3)}`);
console.log(`QUADRADO: ${square.toFixed(3)}`);
console.log(`RETANGULO: ${rectangle.toFixed(3)}`);

*/
