let allClasses = {
  lesson1:
   { materia: 'Matemática',
     numeroEstudantes: 20,
     professor: 'Maria Clara',
     turno: 'manhã' },
  lesson2:
   { materia: 'História',
     numeroEstudantes: 20,
     professor: 'Carlos',
     turno: 'noite' },
  lesson3:
   { materia: 'Matemática',
     numeroEstudantes: 10,
     professor: 'Maria Clara',
     turno: 'noite' }
};

const selectLesson = (lesson) => {
  let array = allClasses[lesson]
  console.log(array)
  let array2 = Object.values(array)
  console.log(array2)
  console.log(array2[2])
}

selectLesson("lesson1")


// refatorando a funçAo acima
const selectLesson2 = (lesson,position) => {
console.log(Object.values(allClasses[lesson])[position]) //Traduzindo: seleciono uma das chaves do objeto principal e obtenho todos os valores com o object.value, como cria um array eu seleciono qual posicao eu quero pegar
}

selectLesson2("lesson3", 3)


