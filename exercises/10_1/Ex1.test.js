

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// assert.equal(sum(4,5),9, "4 + 5 é igual a 9")
// assert.equal(sum(0,0),0, "0 + 0 é igual a 0")
assert.equal(sum(4,"5"),9, "4 + 5 é igual a 9")




const assert = require('assert');

function division(x, y) {
  if (y === 0) throw new Error('parameter y must not be 0');
  return x / y;
}

assert.equal(division(10, 2), 5); // OK
assert.throws(() => { division(10, 0); }, /^Error: parameter y must not be 0$/)