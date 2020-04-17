document.body.style.backgroundColor = 'black'
let elemento = document.createElement('div')
elemento.innerHTML = "teste"
elemento.style.color = 'white'
document.body.appendChild(elemento)
let elemento2 = document.createElement('div')
elemento2.innerHTML= 'test2'
elemento2.style.color='white'
elemento2.id = 'teste'
document.getElementById('teste').appendChild(elemento2)