const lib = require('../index');
const expect = require('chai').expect;

describe('Test all module functions', () => {

  it('should return a random result', () => {
    const result = lib.getRandom();
    expect(result).to.exist;
  });

  it('should return a different result on consecutive calls to getNext()', () => {
    var result1 = lib.getNext();
    var result2 = lib.getNext();
    expect(result1).to.not.equal(result2);
  });

  it('should cycle back to first result after running through all items', () => {
    // reset index
    lib.NextIndex = 0;
    var result1 = lib.getNext();
    var lastResult = null;
    for (let index = 0; index < lib.TotalItems; index++) {
      lastResult = lib.getNext();
    }
    expect(result1).to.equal(lastResult);
  });

});