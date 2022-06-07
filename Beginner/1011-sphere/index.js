// VSCode answer

var lines = [3]

const pi = 3.14159;
var r = lines[0];

var volume = (4/3.0) * pi * (r * r * r);

console.log(`VOLUME = ${volume.toFixed(3)}`);




/* VSCode functional programming approach as in functionalApproach.js

const lines = []

const calculateVolume = (lines) => {
   const pi = 3.14159;
   const r = lines;
   volume = (4/3.0) * pi * (r * r * r);
};

calculateVolume(3);

console.log(`VOLUME = ${volume.toFixed(3)}`);
*/



/* Beecrowd answer

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const pi = 3.14159;
var r = lines.shift(3);

var volume = (4/3.0) * pi * (r * r * r);

console.log(`VOLUME = ${volume.toFixed(3)}`);
*/



