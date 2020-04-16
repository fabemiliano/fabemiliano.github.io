const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  return fetch(API_URL, { headers: { Accept: 'application/json' }})
    .then(response => response.json())
    .then(data => data.joke);
};
const result = {
  'id': '7h3oGtrOfxc',
  'joke': 'Whiteboards ... are remarkable.',
  'status': 200
}
test("#randomNumber", async () => {
  // testando se a função foi chamada

  fetchJock = jest.fn().mockResolvedValue(result)
  expect(fetchJock()).resolves.toEqual({
    'id': '7h3oGtrOfxc',
    'joke': 'Whiteboards ... are remarkable.',
    'status': 200
  })
});

() => Promise.resolve(e )