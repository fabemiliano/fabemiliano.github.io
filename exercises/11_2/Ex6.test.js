function getDogs () {
 fetch('https://dog.ceo/dog-API/')
.then(data => data.json())
.then(data => console.log(data))
}


test("#randomNumber", async () => {
  // testando se a função foi chamada

  getDogs = jest.fn().mockResolvedValue('Requisição Passou')
  expect(getDogs()).resolves.toBe('Requisição Passou')
 
});

