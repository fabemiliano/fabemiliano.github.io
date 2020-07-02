let cont = Number(localStorage.getItem('contador')) // carregar o contador ao abrir a pagina

function randomize() {
  const a = Math.floor(Math.random() * Math.floor(256));
  const b = Math.floor(Math.random() * Math.floor(256));
  const c = Math.floor(Math.random() * Math.floor(256));
  const randomRGB = `(${a},${b},${c})`
  return randomRGB
}

//styles    
let randomRGB = randomize();
const styleText = randomize();
const styleboard = randomize();
document.body.style.backgroundColor = `rgb${randomRGB}`;
document.getElementById('rgb-color').style.color = `rgb${styleText}`;
document.getElementById('title').style.color = `rgb${styleText}`;
document.getElementById('answer').style.color = `rgb${styleText}`;
document.getElementById('answer').style.fontSize = '30px';
document.getElementById('placar').style.color = `rgb${styleText}`;
document.getElementById('score').style.color = `rgb${styleText}`;
document.getElementById('center').style.backgroundColor = `rgb${styleboard}`;

document.getElementById('rgb-color').innerHTML = randomRGB;
document.getElementById('answer').innerHTML = 'Escolha uma cor';


const balls = document.querySelectorAll('.ball');

for (let i = 0; i < 6; i++) {
    const randomRGBballs = randomize();
    balls[i].innerHTML = randomRGBballs;
    balls[i].style.backgroundColor = `rgb${randomRGBballs}`;
}


let d = Math.floor(Math.random() * Math.floor(5));
balls[d].style.backgroundColor = `rgb${randomRGB}`;
balls[d].innerHTML = randomRGB;


for (let i = 0; i < 6; i++) {
    balls[i].addEventListener('click', giveAnswer);

    function giveAnswer() {

        if (balls[i].innerHTML == randomRGB) {
            document.getElementById('answer').innerHTML = 'Acertou!';
            cont = cont + 3;
            localStorage.setItem('contador', cont);
            document.getElementById('score').innerHTML = cont


        } else {
            document.getElementById('answer').innerHTML = 'Errou! Tente novamente!';
            cont = cont - 1;
            localStorage.setItem('contador', cont);
            document.getElementById('score').innerHTML = cont
        }
    }
}


let reset = document.getElementById('reset-game');
reset.addEventListener('click', reload);

function reload() {
    location.reload()
}

let restartAll = document.getElementById('reset-all');
restartAll.addEventListener('click', restart);

function restart() {
    localStorage.clear();
    location.reload()
}

document.getElementById('score').innerHTML = cont;

buttoncollor = randomize();
textbuttoncollor = randomize();
document.getElementsByTagName('button')[0].style.backgroundColor = `rgb${buttoncollor}`;
document.getElementsByTagName('button')[1].style.backgroundColor = `rgb${buttoncollor}`;
document.getElementsByTagName('button')[0].style.color = `rgb${textbuttoncollor}`;
document.getElementsByTagName('button')[1].style.color = `rgb${textbuttoncollor}`;
