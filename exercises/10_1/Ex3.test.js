const Ex3 = require('./Ex3')


// implemente seus testes aqui
it ("testando exercicio 3",()=>{
  expect(Ex3.mySum([1,2,3,4])).toBe(10)
  expect(Ex3.mySum([1, -2, -3, 4])).toBe(0)
}
)