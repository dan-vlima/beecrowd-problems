// VSCode answer

var lines = [5, 6, 7, 8]

var a = lines[0];
var b = lines[1];
var c = lines[2];
var d = lines[3];

var difference = a * b - c * d;

console.log(`DIFERENCA = ${difference}`)

/* 
Beecrowd answer

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var a = lines.shift(5);
var b = lines.shift(6);
var c = lines.shift(7);
var d = lines.shift(8);

var difference = a * b - c * d;

console.log(`DIFERENCA = ${difference}`);
*/