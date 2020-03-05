//Escrever o texto do meme sobre a imagem

let textBox = document.getElementById('text-input'); // criar uma variável para o elemento que tem a caixa de input
let textMeme = document.getElementById('meme-text'); //criar uma variável para o elemento que irá conter o texto
textBox.addEventListener('keyup', writeText);   //adiciona um evento sobre a caixa de input

function writeText() {
    textMeme.innerHTML = textBox.value;      //ao digitar o texto essa funçao pega o valor de dentro do input e joga para a imagem
}

//incluir imagem

let image = document.getElementById('meme-image');   //variável criada para receber o elemento que irá conter a imagem

function uploadImage() {
    image.src = URL.createObjectURL(event.target.files[0]);  //função para carregar a imagem que foi subida no elemento que irá conter a imagem
}
//mudando as bordas

let button1 = document.getElementById("button1")  //variável que corresponde ao elemento button1
button1.addEventListener("click", changeButton1)  //adicao de evento ao elemento 1
let button2 = document.getElementById("button2")
button2.addEventListener("click", changeButton2)
let button3 = document.getElementById("button3")
button3.addEventListener("click", changeButton3)

function changeButton1() {
    document.getElementById("meme-image-container").style.border = "3px dashed red"   //funcao que irá trocar a borda
}

function changeButton2() {
    document.getElementById("meme-image-container").style.border = "5px double blue"
}

function changeButton3() {
    document.getElementById("meme-image-container").style.border = "6px groove green"
}

// selecionar imagem pre carregada

let meme = document.getElementsByClassName("images") //coletar os elementos que tem a classe images para criar um evento

for (let i = 0 ; i < meme.length; i++){    //precisa do laço for pois gera um array

    meme[i].addEventListener("click", preLoaded)   //criar o evento sobre cada elemento

    function preLoaded() {
       let imageMeme = document.getElementById("meme-image") //variavel com a div onde a imagem fica
       imageMeme.src = `imgs/meme${i+1}.jpeg` //define o src da div
    }
}