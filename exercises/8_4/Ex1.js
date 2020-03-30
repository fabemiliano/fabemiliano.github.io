const assert = require('assert');
// escreva a função addOne para passar nos testes abaixo:

const addOne = (myArray) => {
let arr2 = []
for (let i = 0; i < myArray.length; i++){
   arr2[i] = myArray[i]+1
}
return arr2
}


//
const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);


assert.strictEqual(typeof addOne, 'function');
assert.deepEqual(output, expected);
assert.deepEqual(myArray, unchanged);
