const assert = require('assert')

const myList = [1, 2, 3]


// function swap (primeiro, segundo, terceiro) {
//     return [terceiro,segundo,primeiro]
// }
// const swappedList = swap(...myList)

// escreva swap abaixo

function swap (numbers) {
    const [primeiro, segundo, terceiro] = numbers
    return [terceiro, segundo, primeiro]
}

const swappedList = swap(myList)

assert.equal(swappedList[0], 3)
assert.equal(swappedList[1], 2)
assert.equal(swappedList[2], 1)
    
