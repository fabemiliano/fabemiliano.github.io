let randomNumber = () => {
  const number = Math.floor(Math.random()*100)
  return number
}

let isDivisible = (number) => (randomNumber() % number) === 0

console.log(isDivisible(2))

test("#randomNumber", () => {
  // testando se a função foi chamada
  randomNumber = jest.fn().mockReturnValue(100)
  isDivisible()
  expect(randomNumber).toHaveBeenCalled();
  expect(isDivisible(2)).toBe(true)
  expect(randomNumber).toHaveBeenCalledTimes(2)

});



/* let randomNumber = () => {
  const number = Math.floor(Math.random()*100)
  return number
}

let isDivisible = (number, callback) => (callback() % number) === 0

console.log(isDivisible(2, randomNumber)) */
