const filePath: string = __dirname.split("\\").pop() + "/dev/stdin";
const input = require("fs").readFileSync(filePath, "utf8");

// Down below, the code you must insert on Beecrowd

var lines: string[] = input.split('\n');

const calcTotalSalary = (lines) => {
    const [sellerName, fixedSalary, totalSales] = lines.map(Number);
    const salesCommission = totalSales * 0.15;
    const totalSalary = fixedSalary + salesCommission;
    return totalSalary;
};

const totalSalary = calcTotalSalary(lines);

console.log(`TOTAL = R$ ${totalSalary.toFixed(2)}`);
