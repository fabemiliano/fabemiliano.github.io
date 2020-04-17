const functions = require('./Ex4.js')
jest.mock('./Ex4.js')

test("#randomNumber", () => {
  // testando se a função foi chamada
  functions.first.mockReturnValue('CASA')
  expect(functions.first('teste')).toBe('CASA')
  functions.first.mockImplementation((string) => string.toLowerCase())
  expect(functions.first('Teste')).toBe('teste')
  functions.second.mockImplementation((string)=>string[string.length-1])
  expect(functions.second('Teste')).toBe('e')
});

