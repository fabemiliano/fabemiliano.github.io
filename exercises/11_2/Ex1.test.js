let randomNumber = () => {
  const number = Math.floor(Math.random()*100)
  return number
}



test("#randomNumber", () => {
  // testando se a função foi chamada
  randomNumber = jest.fn().mockReturnValue(10)
  randomNumber()
  expect(randomNumber).toHaveBeenCalled();
  expect(randomNumber()).toBe(10)
  expect(randomNumber).toHaveBeenCalledTimes(2)

});

