const lines = []

const calculateVolume = (lines) => {
   const pi = 3.14159;
   const r = Number(lines[0]);
   const volume = (4/3.0) * pi * (r * r * r);
   return volume
};

const volume = calculateVolume();

console.log(`VOLUME = ${volume.toFixed(3)}`);