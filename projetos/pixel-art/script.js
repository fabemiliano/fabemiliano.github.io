let colorPallete = ["red", "blue", "green", "red", "orange", "grey"] //array de cores para o requisto bonus

document.getElementById("black").style.backgroundColor = document.getElementById("black").innerHTML //definicao da cor preto pro p[rimero elemento]

let color1 = colorPallete[Math.floor(Math.random() * colorPallete.length)]
document.getElementById("green").style.backgroundColor = color1 //coloro o background com a cor aletoria
document.getElementById("green").innerHTML = color1  //a cor que ta dentro do html ta em ingles pra poder ser atribuida e nao esta aparecendo o texto pq esta transparente

let color2 = colorPallete[Math.floor(Math.random() * colorPallete.length)]
document.getElementById("red").style.backgroundColor = color2
document.getElementById("red").innerHTML = color2

let color3 = colorPallete[Math.floor(Math.random() * colorPallete.length)]
document.getElementById("yellow").style.backgroundColor = color3
document.getElementById("yellow").innerHTML = color3

// selecionando a cor preta
let color = document.querySelector(".selected").innerHTML //atribui no html o selected pro elemento preto

//selecionando as cores

let colorSelected = document.querySelectorAll(".color");    //crio um array com os elementos da pelata

for (let i = 0; i < 4; i++) {    //faço um laço para iterar cada um dos elementos dentro do array

    colorSelected[i].addEventListener("click", changeSelection)   //para cada elemento i do array eu adiciono um eventlistener

    function changeSelection() {    //gero a funcao a ser executada
        document.querySelector(".selected").classList.remove("selected")   //essa funçao remove a classe selected 
        colorSelected[i].classList.add("selected") //e adiciona no elemento que está sendo clicado a classe  selected, que será utilizada pra dizer qual a cor selecionada
    }
}

//aplicando a cor

let pickPixel = document.getElementsByClassName("pixel") //pega todos os elementos pixel

for (let i = 0; i < 25; i++) {   //preciso criar um laço para atribuir um eventlistener em cada elemento do array gerado
    pickPixel[i].addEventListener("click", changeColor)

    function changeColor() {   //pra cada pixel i eu vou executar a funcao apenas dentro daquele pixel i que foi acionado
        colorChange = document.querySelector(".selected").innerHTML //se não tiver o [0] não funciona // coleta o atributo de cor que está na classe selected
        pickPixel[i].style.backgroundColor = colorChange //para cada pixel adciona a cor que foi selecionada
    }
}

let button = document.querySelector(".clear-board")  //cria o evento em cima do elemento que tem a classe clear board
button.addEventListener("click", cleanOut)

//adicionar a funçao de limpar 
function cleanOut() {
    for (let i = 0; i < 25; i++) {
        document.getElementsByClassName("pixel")[i].style.backgroundColor = "white"  //basta mudar o style de todos o elemetnos
    }
}

//criando quadro com tamanho variavel

let redefineButton = document.getElementById("generate-board")
redefineButton.addEventListener("click", defineSize)

function defineSize() {
    document.getElementById("pixel-board").innerHTML = ""; //limpa o quadro
    let n = document.getElementById("board-size").value   //pega o valor do input
    if (n <= 5) {   //condicoes do tamanho
        n = 5
    }
    if (n >= 50) {
        n = 50
    }

    for (let i = 0; i < n; i++) {    //cria um laco para poder criar as divs
        let divRow = document.createElement("div")  //cria a variável que será criada como div filha 
        divRow.className = "row"  //atribui o nome da classe
        divRow.id = "row"
        document.getElementById("pixel-board").appendChild(divRow)  //comando para criar um div filha
        for (let j = 0; j < n; j++) {    //para cada linha eu crio em seguida as colunas pra isso faço um laço
            let divColumn = document.createElement("div")  //mesmo processo acima
            divColumn.className = "pixel"
            divColumn.id = "pixel"
            divRow.appendChild(divColumn)  //crio o appendChild na variável pai row
            divColumn.addEventListener("click", changeColorBox) //precio criar um eventlister pros novos quadros
            function changeColorBox() {   //pra cada pixel i eu vou executar a funcao apenas dentro daquele pixel i que foi acionado
                colorChange = document.querySelector(".selected").innerHTML //se não tiver o [0] não funciona // coleta o atributo de cor que está na classe selected
                divColumn.style.backgroundColor = colorChange //para cada pixel adciona a cor que foi selecionada
            }
        }
    }
}