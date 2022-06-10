var input = require('fs').readFileSync('1017-fuel-spent/dev/stdin', 'utf8');
var lines = input.split('\n');

const calculateLitersNeeded = (lines) => {
  const carFuelConsumption = 12;
  const spentTime = Number(lines[0]);
  const averageSpeed = Number(lines[1]);
  const totalDistance = spentTime * averageSpeed;
  const litersNeeded = totalDistance / carFuelConsumption;
  return litersNeeded; 
};
  
  const litersNeeded = calculateLitersNeeded(lines);

console.log(`${litersNeeded.toFixed(3)}`);
