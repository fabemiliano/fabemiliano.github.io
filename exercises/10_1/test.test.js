const testes = require('./src');
describe("testando todos os exercícios juntos", () => {

  test("teste do exercício 1", () => {
    expect(() => { testes.sum(4, "5") }).toThrow('parameters must be numbers')
    expect(() => { testes.division(10, 0) }).toThrow('parameter y must not be 0')
  })


  test("Teste do Ecercício 1", () => {
    expect(testes.myIndexOf([1, 2, 3, 4], 3)).toBe(2)
    expect(testes.myIndexOf([1, 2, 3, 4], 5)).toBe(-1)
  })

  it("testando exercicio 3", () => {
    expect(testes.mySum([1, 2, 3, 4])).toBe(10)
    expect(testes.mySum([1, -2, -3, 4])).toBe(0)
  })

  test("Teste do Exercício 4", () => {
    expect(testes.myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
  })

  test("Teste do Exercício 5", () => {
    expect(testes.myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
  })

})


