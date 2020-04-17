const assert = require('assert');
// escreva a função wordLengths para passar nos testes abaixo:

const wordLengths = (words) =>{
let arr = []
   for (let i in words){
      arr[i] = words[i].length
   }
return arr
}

//
const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

//assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepEqual(output, expected);
