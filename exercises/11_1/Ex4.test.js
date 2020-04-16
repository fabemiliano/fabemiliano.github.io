const fetch = require('node-fetch');

let url = 'https://api.github.com/users/tryber/repos'
const getRepos = (url) => {
   return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name)
    });
}



let projeto = 'sd-01-week10-movie-card-library-tests'
let projeto2 = 'sd-01-week4-5-project-todo-list'

test('Teste findusers', () => {
  expect.assertions(2)
return getRepos(url).then(data => {
  expect(data.includes(projeto)).toBe(true)
  expect(data.includes(projeto2)).toBe(false)
})
});


test('Teste findusers', async() => {

const data = await getRepos(url)
  expect(data.includes(projeto)).toBe(true)
  expect(data.includes(projeto2)).toBe(false)

});



