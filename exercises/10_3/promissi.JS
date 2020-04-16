const onSuccess = (result) => 
new Promise ((resolve, reject) => {
  let arr = []
  let b = [2, 3, 5, 10]
  for (let i = 0; i < 4; i +=1) {
    arr.push(result/b[i])
  }
  console.log(arr)
  resolve(arr)
})

function onError (error) {
  console.log(error)
}

function sum (result) {
  let soma = 0 
  for (let i = 0; i< 4; i+=1){
    soma += result[i]
  }
  console.log(soma)
}

const makeArray = () => 
new Promise((resolve, reject) =>{
  let sum = 0
  let arr = []
  for (let i = 0; i < 10; i += 1) {
    arr.push(Math.floor(Math.random() * 50)*Math.floor(Math.random() * 50))
    sum += arr[i]
  }
  if (sum < 8000){
    return resolve(sum)
  } else {
    reject("É mais de oito mil! Essa promise deve estar quebrada!")
  }
})


makeArray()
  .then(onSuccess)
  .then(sum)
  .catch(onError)


  url = 'https://api.github.com/users/tryber/repos'
  //const getRepos = (url) => {
  
  
    const myObject = {
      method: 'GET',
      headers: { 'Accept': 'application/json' }
    };
    
    fetch(url, myObject)


/* const teste = async() => {
  await promise
  await onSuccess
}

 */

