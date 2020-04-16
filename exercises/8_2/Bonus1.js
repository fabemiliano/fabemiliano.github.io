
const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

let allClasses = (Object.assign({}, { lesson1 }, { lesson2 }, { lesson3 }))
let lessons = Object.values(allClasses)

let soma = 0
for (let lesson in lessons) {
  let obj = lessons[lesson]
  for (let i in obj) {
    if (obj[i] == "Matemática") {
      soma = soma + obj["numeroEstudantes"]
    }
  }
}
console.log(soma)

//outra forma de fazer

let soma2 = 0 
for (let i in Object.values(allClasses)) {
  if (lessons[i].materia == "Matemática"){
    soma2 = soma2 + lessons[i].numeroEstudantes
  }
}
console.log(soma2)