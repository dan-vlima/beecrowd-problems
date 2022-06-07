// VSCode answer

var grades = [5.0, 6.0, 7.0];

var a = grades[0];
var b = grades[1];
var c = grades[2];
var average = ((a * 2) + (b * 3) + (c * 5)) / 10;

console.log(`MEDIA = ${average.toFixed(1)}`)

/* 
Beecrowd answer

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var grades = input.split('\n');

var a = grades.shift(5.0);
var b = grades.shift(6.0);
var c = grades.shift(7.0);
var average = ((a * 2) + (b * 3) + (c * 5)) / 10;

console.log(`MEDIA = ${average.toFixed(1)}`)

*/