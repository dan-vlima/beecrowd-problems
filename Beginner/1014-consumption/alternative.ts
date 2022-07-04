var input: string = require('fs').readFileSync('./1014-consumption/dev/stdin', 'utf8');
var lines: string[] = input.split("\n");

const calcAverageConsumption = (lines: string[]) => {
    const totalDistanceTraveled = Number(lines[0]);
    const totalFuelSpent = Number(lines[1]);
    const averageConsumption: number = totalDistanceTraveled / totalFuelSpent;
    return averageConsumption;
};

const averageConsumption: number = calcAverageConsumption(lines);

console.log(`${averageConsumption.toFixed(3)} km/l`);