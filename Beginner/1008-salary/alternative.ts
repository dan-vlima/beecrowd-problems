const { execPath } = require("process");

const filePath = __dirname.split("\\").pop() + "/dev/stdin";
const input: string = require("fs").readFileSync(filePath, "utf8");

// Down below, the code you must insert on Beecrowd

var lines: string[] = input.split('\n');

const calcEmployeeSalary = (lines: string[]) => {
    const [ monthlyWorkedHours, hourlySalary, ...rest ] = lines.map(Number);
    console.log(monthlyWorkedHours)
    const employeeSalary: number = monthlyWorkedHours * hourlySalary;
    return employeeSalary;
};

const getEmployeeNumber = (lines: string[]) => {
    const employeeNumber: number = Number(lines[0]);
    return employeeNumber;
};

const employeeNumber: number = getEmployeeNumber(lines);

const employeeSalary: number = calcEmployeeSalary(lines);

console.log(`NUMBER = ${employeeNumber}\nSALARY = U$ ${employeeSalary.toFixed(2)}`);
