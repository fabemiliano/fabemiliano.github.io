
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

const reportClasses = (classes, professor) => {

let prof =  professor
let lessons = Object.values(classes)
let aulas = []
let soma = 0

for (let i in lessons) {
  let obj = lessons[i]
  for (let i in obj) {
    if (obj[i] == prof){
      aulas.push(obj["materia"])
      soma = soma + obj["numeroEstudantes"]
    }
  }
}
console.log(aulas)
console.log(soma)
}

reportClasses(allClasses,"Maria Clara")

//outro método

let lessons = Object.values(allClasses)
let aulas2 = []
for (let i in lessons){
  if (lessons[i].professor == "Maria Clara"){
    aulas2.push(lessons[i].materia)
    console.log(aulas2)
  }
}



const assert = require('assert');

function division(x, y) {
  if (y === 0) throw new Error('parameter y must not be 0');
  return x / y;
}

assert.equal(division(10, 2), 5); // OK
assert.throws(() => { division(10, 0); }, /^Error: parameter y must not be 0$/);



const assert = require('assert');

function division(x, y) {
  if (y === 0) throw new Error('parameter y must not be 0');
  return x / y;
}

assert.equal(division(10, 2), 5); // OK
assert.throws(() => { division(10, 0); }, /^Error: parameter y must not be 0$/); // OK