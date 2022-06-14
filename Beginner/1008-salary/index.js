const { execPath } = require("process");

const filePath = __dirname.split("\\").pop() + "/dev/stdin";
const input = require("fs").readFileSync(filePath, "utf8");

// Down below, the code you must insert on Beecrowd

var lines = input.split('\n');

const calcEmployeeSalary = (lines) => {
    const [ monthlyWorkedHours, hourlySalary ] = [lines[1], lines[2]];
    const employeeSalary = monthlyWorkedHours * hourlySalary;
    return employeeSalary;
};

const getEmployeeNumber = (lines) => {
    const employeeNumber = Number(lines[0]);
    return employeeNumber;
};

const employeeNumber = getEmployeeNumber(lines);

const employeeSalary = calcEmployeeSalary(lines);

console.log(`NUMBER = ${employeeNumber}\nSALARY = U$ ${employeeSalary.toFixed(2)}`);
