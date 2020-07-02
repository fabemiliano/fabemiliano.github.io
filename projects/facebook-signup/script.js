const input = document.getElementById('user-email-phone');

// login
// Formulario
// const nomeForm = document.getElementById('nomeForm');
// const sobreNomeForm = document.getElementById('sobrenomeForm');
// const emailForm = document.getElementById('emailForm');
// const senhaForm = document.getElementById('senhaForm');
// const nascimentoForm = document.getElementById('senhaForm');
// const radioFemForm = document.getElementById('femininoForm');
// const radioMascForm = document.getElementById('masculinoForm');
// const radioPersonForm = document.getElementById('personForm');
// submit

function submit() {
  alert(input.value);
}

// function verificaFormulario() {
// }

window.onload = function () {
  const submitLogin = document.getElementById('button-login');
  // const submitForm = document.getElementById('facebook-register');

  submitLogin.addEventListener('click', submit);
  // submitForm.addEventListener('click', verificaFormulario);
};
