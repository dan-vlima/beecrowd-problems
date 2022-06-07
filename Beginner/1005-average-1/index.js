// VSCode answer

var grades = [5.0, 7.1];

var a = grades[0];
var b = grades[1];
var average = ((a * 3.5) + (b * 7.5)) / 11;

console.log(`MEDIA = ${average.toFixed(5)}`)

/* 
Beecrowd answer

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var grade = input.split('\n');

var a = grades.shift(5.0);
var b = grades.shift(7.1);
var average = ((a * 3.5) + (b * 7.5)) / 11;

console.log(`MEDIA = ${average.toFixed(5)}`)
*/