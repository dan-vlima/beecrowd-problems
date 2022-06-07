// VSCode answer

var lines = [25, 100, 5.50];

var employeeNumber = parseInt(lines[0]);
var workedHours = parseInt(lines[1]);
var hourlyPay = lines[2];
var monthlySalary = workedHours * hourlyPay;

console.log(`NUMBER = ${employeeNumber}`);
console.log(`SALARY = U$ ${monthlySalary.toFixed(2)}`);


/* 
Beecrowd answer

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var employeeNumber = parseInt(lines.shift(25));
var workedHours = parseInt(lines.shift(100));
var hourlyPay = lines.shift(5.50);
var monthlySalary = workedHours * hourlyPay;

console.log(`NUMBER = ${employeeNumber}`);
console.log(`SALARY = U$ ${monthlySalary.toFixed(2)}`);

*/