var input = require('fs').readFileSync('./1014-consumption/dev/stdin', 'utf8');
var lines = input.split("\n");

const calcAverageConsumption = (...lines) => {
    const totalDistanceTraveled = Number(lines[0]);
    const totalFuelSpent = Number(lines[1]);
    const averageConsumption = totalDistanceTraveled / totalFuelSpent;
    return averageConsumption;
};

const averageConsumption = calcAverageConsumption(...lines);

console.log(`${averageConsumption.toFixed(3)} km/l`);