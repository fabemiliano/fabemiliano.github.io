const uppercase = (str, callback) => {
  callback(str.toUpperCase());
}
    
let str = 'Teste'

  test('Teste callback', () => {
    uppercase(str, (par) => {
      expect(par).toBe(str.toUpperCase()) 
    })
  });
