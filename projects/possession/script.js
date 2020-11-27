const button = document.getElementsByTagName('button')[0];
const vid = document.getElementsByTagName("video")[0];

button.addEventListener('click', () => {
  if (button.innerHTML === 'desligar o som') {
    vid.muted = true;
    button.innerHTML = 'ligar o som';
  } else {
    vid.muted = false;
    button.innerHTML = 'desligar o som';
  }
})