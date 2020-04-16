const id = 'tylermcginnis'

$.getJSON({
  url: `https://api.github.com/users/${id}`,
  success: updateUI,
  error: showError,
})



let arr = []
for (let i = 0; i < 10; i+=1){

}

let arr = []
  for (let i = 0; i = 10; i += 1) {
    const a = Math.floor(Math.random() * 50)
    const b = a * a
    arr.push(b)
  }
  console.log(arr)