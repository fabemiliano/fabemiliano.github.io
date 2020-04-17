let carta1 = "cartas/cinco-de-ouros.png"
let carta2 = "cartas/nove-de-espadas.png"
let carta3 = "cartas/quatro-de-paus.png"
let carta4 = "cartas/seis-de-copas.png"
let carta5 = "cartas/sete-de-espadas.png"
let carta6 = "cartas/sete-de-paus.png"
let carta7 = "cartas/tres-de-ouros.png"

let deck = [carta1, carta2, carta3, carta4, carta5, carta6, carta7]

let efeitos = ["spin", "grow", "ddd"]


document.querySelector(".back-deck").addEventListener("click", newCard)

function newCard(){

  let i = Math.floor(Math.random() * deck.length)
  let imagem = document.createElement("img")
  imagem.src = deck[i]
  imagem.style.width = "150px"
  imagem.style.marginRight = "20px"
  imagem.style.marginTop = "10px"
  imagem.className = "card"
  document.querySelector(".grid").appendChild(imagem)
  imagem.addEventListener("click", animate)
  let k = Math.floor(Math.random()*3)
  function animate(){
    imagem.style.animationName = efeitos[k]
    imagem.style.animationDuration = "3s"
  }
}

