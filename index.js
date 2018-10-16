const fs = require("fs");
const inFile = __dirname + '/expansions.json';

const items = JSON.parse(fs.readFileSync(inFile, 'utf8'));

let _nextIndex = 0;

module.exports = {
  get TotalItems() {
    return items.length;
  },
  get NextIndex() {
    return _nextIndex;
  },
  set NextIndex(newIndex) {
    _nextIndex = newIndex;
  },
  getRandom() {
    var randomIndex = Math.round(Math.random() * items.length - 1);
    return items[randomIndex];
  },
  getNext() {
    const result = items[_nextIndex];
    _nextIndex = _nextIndex+1 >= items.length ? 0 : _nextIndex+1;
    return result;
  }
};