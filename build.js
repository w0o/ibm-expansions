const fs = require("fs");
const inFile = __dirname + '/expansions.txt';
const outFilePrefix = __dirname + '/expansions';
const outFileJson = outFilePrefix + '.json';
const outFileText = outFilePrefix + '.txt';

const items = fs
  .readFileSync(inFile, 'utf8')
  .split('\n')
  .filter(s => s && s.length > 0 && s.charAt(0) !== '#')
  .map(s => s.trim().split(' ').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' '))
  .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

// write json file
fs.writeFileSync(outFileJson, JSON.stringify(items, null, 4));

// write text file
fs.writeFileSync(outFileText, items.reduce((p, c) => `${p}${c}\n`, items.shift() + '\n'));