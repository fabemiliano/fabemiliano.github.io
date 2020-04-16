let randomNumber = () => {
  const number = Math.floor(Math.random()*100)
  return number
}



test("#randomNumber", () => {
  // testando se a função foi chamada
  randomNumber = jest.fn().mockReturnValue(10)
  randomNumber()
  expect(randomNumber).toHaveBeenCalled();
  randomNumber.mockImplementationOnce((a,b)=> a/b)
  expect(randomNumber(10,5)).toBe(2)
  expect(randomNumber).toHaveBeenCalledTimes(2)
  

});

