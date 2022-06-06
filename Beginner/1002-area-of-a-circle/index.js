// VSCode answer

var lines = [150.00];

const pi = 3.14159;
const R = lines[0];
const A = pi * (R * R);

var result = A;

console.log("A = " + result.toFixed(4));

/* 
Beecrowd answer

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const pi = 3.14159;
const r = lines.shift(150.00);
const a = pi * (r * r);

var result = a;

console.log("A=" + result.toFixed(4));
*/
