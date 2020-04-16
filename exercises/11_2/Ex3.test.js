let randomNumber = () => {
  const number = Math.floor(Math.random()*100)
  return number
}



test("#randomNumber", () => {
  // testando se a função foi chamada
  randomNumber = jest.fn().mockReturnValue(10)
  randomNumber()
  expect(randomNumber).toHaveBeenCalled();
  randomNumber.mockImplementation((a,b,c)=> a*b*c)
  expect(randomNumber(10,5,1)).toBe(50)
  randomNumber.mockReset()
  randomNumber.mockImplementation((a)=>a*2)
  expect(randomNumber(5)).toBe(10)
  expect(randomNumber).toHaveBeenCalledTimes(1)
  randomNumber.mockRestore()
  randomNumber = jest.fn().mockReturnValue(10)
  expect(randomNumber()).toBe(10)

});
