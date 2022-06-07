// VSCode answer

var lines = ["JOAO", 500.00, 1230.30]

var sellerName = lines[0];
var fixedSalary = lines[1];
var totalSales = lines[2];
var salesCommission = totalSales * 0.15;

var totalSalary = fixedSalary + salesCommission;

console.log(`TOTAL = R$ ${totalSalary.toFixed(2)}`);

/* 
Beecrowd answer
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var sellerName = lines.shift("JOAO");
var fixedSalary = parseFloat(lines.shift(500.00));
var totalSales = parseFloat(lines.shift(1230.30));
var salesCommission = parseFloat(totalSales * 0.15);

var totalSalary = fixedSalary + salesCommission;

console.log(`TOTAL = R$ ${totalSalary.toFixed(2)}`);
*/
