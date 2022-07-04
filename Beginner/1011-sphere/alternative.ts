var input: string = require('fs').readFileSync('1011-sphere/dev/stdin', 'utf8');
var lines: string[] = input.split('\n');

const calculateVolume = (lines: string[]) => {
   const pi = 3.14159;
   const r = Number(lines[0]);
   const volume: number = (4/3.0) * pi * (r * r * r);
   return volume
};

const volume: number = calculateVolume(lines);

console.log(`VOLUME = ${volume.toFixed(3)}`);



