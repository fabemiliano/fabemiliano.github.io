const data = {
  animals: [
    {
      id: '0938aa23-f153-4937-9f88-4858b24d6bce',
      name: 'lions',
      popularity: 4,
      location: 'NE',
      residents: [
        {
          name: 'Zena',
          sex: 'female',
          age: 12
        },
        {
          name: 'Maxwell',
          sex: 'male',
          age: 15
        },
        {
          name: 'Faustino',
          sex: 'male',
          age: 7
        },
        {
          name: 'Dee',
          sex: 'female',
          age: 14
        }
      ]
    },
    {
      id: 'e8481c1d-42ea-4610-8e11-1752cfc05a46',
      name: 'tigers',
      popularity: 5,
      location: 'NW',
      residents: [
        {
          name: 'Shu',
          sex: 'female',
          age: 19
        },
        {
          name: 'Esther',
          sex: 'female',
          age: 17
        }
      ]
    },
    {
      id: 'baa6e93a-f295-44e7-8f70-2bcdc6f6948d',
      name: 'bears',
      popularity: 5,
      location: 'NW',
      residents: [
        {
          name: 'Hiram',
          sex: 'male',
          age: 4
        },
        {
          name: 'Edwardo',
          sex: 'male',
          age: 4
        },
        {
          name: 'Milan',
          sex: 'male',
          age: 4
        },
      ]
    },
    {
      id: 'ef3778eb-2844-4c7c-b66c-f432073e1c6b',
      name: 'penguins',
      popularity: 4,
      location: 'SE',
      residents: [
        {
          name: 'Joe',
          sex: 'male',
          age: 10
        },
        {
          name: 'Tad',
          sex: 'male',
          age: 12
        },
        {
          name: 'Keri',
          sex: 'female',
          age: 2
        },
        {
          name: 'Nicholas',
          sex: 'male',
          age: 2
        },
      ]
    },
    {
      id: '533bebf3-6bbe-41d8-9cdf-46f7d13b62ae',
      name: 'otters',
      popularity: 4,
      location: 'SE',
      residents: [
        {
          name: 'Neville',
          sex: 'male',
          age: 9
        },
        {
          name: 'Lloyd',
          sex: 'male',
          age: 8
        },
        {
          name: 'Mercedes',
          sex: 'female',
          age: 9
        },
        {
          name: 'Margherita',
          sex: 'female',
          age: 10
        },
      ]
    },
    {
      id: '89be95b3-47e4-4c5b-b687-1fabf2afa274',
      name: 'frogs',
      popularity: 2,
      location: 'SW',
      residents: [
        {
          name: 'Cathey',
          sex: 'female',
          age: 3
        },
        {
          name: 'Annice',
          sex: 'female',
          age: 2
        }
      ]
    },
    {
      id: '78460a91-f4da-4dea-a469-86fd2b8ccc84',
      name: 'snakes',
      popularity: 3,
      location: 'SW',
      residents: [
        {
          name: 'Paulette',
          sex: 'female',
          age: 5
        },
        {
          name: 'Bill',
          sex: 'male',
          age: 6
        }
      ]
    },
    {
      id: 'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5',
      name: 'elephants',
      popularity: 5,
      location: 'NW',
      residents: [
        {
          name: 'Ilana',
          sex: 'female',
          age: 11
        },
        {
          name: 'Orval',
          sex: 'male',
          age: 15
        },
        {
          name: 'Bea',
          sex: 'female',
          age: 12
        },
        {
          name: 'Jefferson',
          sex: 'male',
          age: 4
        },
      ]
    },
    {
      id: '01422318-ca2d-46b8-b66c-3e9e188244ed',
      name: 'giraffes',
      popularity: 4,
      location: 'NE',
      residents: [
        {
          name: 'Gracia',
          sex: 'female',
          age: 11
        },
        {
          name: 'Antone',
          sex: 'male',
          age: 9
        },
        {
          name: 'Vicky',
          sex: 'female',
          age: 12
        },
        {
          name: 'Clay',
          sex: 'male',
          age: 4
        },
        {
          name: 'Arron',
          sex: 'male',
          age: 7
        },
        {
          name: 'Bernard',
          sex: 'male',
          age: 6
        }
      ]
    }
  ],
  employees: [
    {
      id: 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
      firstName: 'Nigel',
      lastName: 'Nelson',
      managers: ['0e7b460e-acf4-4e17-bcb3-ee472265db83',
        'fdb2543b-5662-46a7-badc-93d960fdc0a8'],
      responsibleFor: ['0938aa23-f153-4937-9f88-4858b24d6bce',
        'e8481c1d-42ea-4610-8e11-1752cfc05a46']
    },
    {
      id: '0e7b460e-acf4-4e17-bcb3-ee472265db83',
      firstName: 'Burl',
      lastName: 'Bethea',
      managers: ['9e7d4524-363c-416a-8759-8aa7e50c0992'],
      responsibleFor: ['0938aa23-f153-4937-9f88-4858b24d6bce',
        'e8481c1d-42ea-4610-8e11-1752cfc05a46',
        'baa6e93a-f295-44e7-8f70-2bcdc6f6948d',
        'ef3778eb-2844-4c7c-b66c-f432073e1c6b']
    },
    {
      id: 'fdb2543b-5662-46a7-badc-93d960fdc0a8',
      firstName: 'Ola',
      lastName: 'Orloff',
      managers: ['9e7d4524-363c-416a-8759-8aa7e50c0992'],
      responsibleFor: ['533bebf3-6bbe-41d8-9cdf-46f7d13b62ae',
        '89be95b3-47e4-4c5b-b687-1fabf2afa274',
        '78460a91-f4da-4dea-a469-86fd2b8ccc84',
        'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5']
    },
    {
      id: '56d43ba3-a5a7-40f6-8dd7-cbb05082383f',
      firstName: 'Wilburn',
      lastName: 'Wishart',
      managers: ['0e7b460e-acf4-4e17-bcb3-ee472265db83',
        'fdb2543b-5662-46a7-badc-93d960fdc0a8'],
      responsibleFor: ['78460a91-f4da-4dea-a469-86fd2b8ccc84',
        'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5']
    },
    {
      id: '9e7d4524-363c-416a-8759-8aa7e50c0992',
      firstName: 'Stephanie',
      lastName: 'Strauss',
      managers: [],
      responsibleFor: [
        '01422318-ca2d-46b8-b66c-3e9e188244ed',
        '533bebf3-6bbe-41d8-9cdf-46f7d13b62ae'
      ]
    },
    {
      id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad',
      firstName: 'Sharonda',
      lastName: 'Spry',
      managers: ['0e7b460e-acf4-4e17-bcb3-ee472265db83',
        'fdb2543b-5662-46a7-badc-93d960fdc0a8'],
      responsibleFor: ['533bebf3-6bbe-41d8-9cdf-46f7d13b62ae',
        '89be95b3-47e4-4c5b-b687-1fabf2afa274']
    },
    {
      id: 'c1f50212-35a6-4ecd-8223-f835538526c2',
      firstName: 'Ardith',
      lastName: 'Azevado',
      managers: ['b0dc644a-5335-489b-8a2c-4e086c7819a2'],
      responsibleFor: ['e8481c1d-42ea-4610-8e11-1752cfc05a46',
        'baa6e93a-f295-44e7-8f70-2bcdc6f6948d']
    },
    {
      id: 'b0dc644a-5335-489b-8a2c-4e086c7819a2',
      firstName: 'Emery',
      lastName: 'Elser',
      managers: ['9e7d4524-363c-416a-8759-8aa7e50c0992'],
      responsibleFor: ['bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5',
        'baa6e93a-f295-44e7-8f70-2bcdc6f6948d',
        '0938aa23-f153-4937-9f88-4858b24d6bce']
    }
  ],
  hours: {
    'Tuesday': { open: 8, close: 18 },
    'Wednesday': { open: 8, close: 18 },
    'Thursday': { open: 10, close: 20 },
    'Friday': { open: 10, close: 20 },
    'Saturday': { open: 8, close: 22 },
    'Sunday': { open: 8, close: 20 },
    'Monday': { open: 0, close: 0 }
  },
  prices: {
    'Adult': 49.99,
    'Senior': 24.99,
    'Child': 20.99
  }
};
//====================================EXERCICIO 13===============================

// 3- Implemente a função employeeCoverage:
// Sem parâmetros, retorna uma lista de funcionários e os animais pelos quais eles são responsáveis
// Com o id de um funcionário, retorna os animais pelos quais o funcionário é responsável
// Com o primeiro nome de um funcionário, retorna os animais pelos quais o funcionário é responsável
// Com o último nome de um um funcionário, retorna os animais pelos quais o funcionário é responsável


// function employeeCoverage(idOrName) {
//   // seu código aqui
//   //criando um dicionário
//   const ids = data.animals.map(e => e.id)
//   const names = data.animals.map(e => e.name)
//   let dictionary = {}
//   ids.forEach((e, i) => dictionary[e] = names[i])

//   //criando um array com os nomes dos empregados
//   const employees = data.employees.map(e => e.firstName + " " + e.lastName)

//   //criando o objeto de funcionarios
//   let obj = {}
//   employees.forEach(e => obj[e] = " ")

//   //definindo os ids dos animais
//   const animalsId = data.employees.map(e => e.responsibleFor)
//   //traduzindo as Ids 
//   const translatedAnimals = animalsId.map(e => e.reduce((e, i) => {
//     i = dictionary[i]
//     e.push(i)
//     return e
//   },[]))
//   //unificando o objeto de funcionarios
//   employees.forEach((e, i) => obj[e] = translatedAnimals[i])
//   if (idOrName === undefined){
//     return obj
//   } else{
//     const id = data.employees.find(e => e.id === idOrName || e.lastName === idOrName || e.firstName === idOrName)
//     const name = `${id.firstName} ${id.lastName}`
//     obj = {[name]: obj[name]}
//     return obj
//   }
// }

// console.log(employeeCoverage('4b40a139-d4dc-4f09-822d-ec25e819a5ad'))

// const ids = data.animals.map(e => e.id)
// const names = data.animals.map(e => e.name)
// console.log(ids)
// console.log(names)
// let obj = {}
// ids.forEach((e,i)=>obj[e] = names[i])
// console.log(obj)

//====================================EXERCICIO 12===============================


// function increasePrices(percentage) {
//   // seu código aqui
// const arr = [data.prices.Adult, data.prices.Senior, data.prices.Child]
// const keys = Object.keys(data.prices)

// arr.forEach((e,i)=> {
//  data.prices[keys[i]] = (Math.round((e * (1 + (percentage / 100)))*100))/100
// })

// return data.prices

// }
// console.log(increasePrices(50))




//====================================EXERCICIO 11===============================


// Passado o id de um funcionário, encontra a primeira espécie de animal gerenciado pelo funcionário, e retorna um array 
// com nome, sexo e idade do animal mais velho dessa espécie
// function oldestFromFirstSpecies(id) {
// seu código aqui

// const employee = data.employees.find(e => e.id === id)
// const animal = employee.responsibleFor[0]
// const animalIf = data.animals.find(e => e.id === animal)
// const cadaAnimal = animalIf.residents
// const age = cadaAnimal.reduce((old,e) => {
//   if (old < e.age){
//     old = e.age
//     return old
//   } return old
// },0)
// const maisvelho = cadaAnimal.find(e => e.age === age)
// const arr =[maisvelho.name, maisvelho.sex, maisvelho.age]
// return arr
//}

// console.log(oldestFromFirstSpecies('4b40a139-d4dc-4f09-822d-ec25e819a5ad'))

// 9
// 8
// 9
// 10


//====================================EXERCICIO 10===============================REFAZER

// function schedule(dayName) {
//   // seu código aqui
//   const days = Object.keys(data.hours)
//   days.forEach(e => {
//     if (data.hours[e].close > 12) {
//       data.hours[e].close = data.hours[e].close - 12
//     }
//   })
//   if (dayName === undefined) {
//     let obj = {}
//     days.forEach((e, i) => {
//       if (e === "Monday") {
//         obj[e] = "CLOSED"
//       } else {
//         obj[e] = `Open from ${data.hours[days[i]].open}am until ${data.hours[days[i]].close}pm`
//       }
//     })
//     return obj
//   }
//   let obj = {}
//   days.forEach((e) => {
//     if (e === dayName) {
//       if (e === "Monday") {
//         obj[e] = "CLOSED"
//       } else {
//         obj[e] = `Open from ${data.hours[e].open}am until ${data.hours[e].close}pm`
//       }
//     }
//   })
//   return obj
// }


// console.log(schedule("Monday"))


// if (dayName === undefined) {
//   let obj = {}
//   days.forEach((e, i) => {
//     if (e === "Monday") {
//       obj[e] = "CLOSED"
//     }
//     obj[e] = `Open from ${data.hours[days[i]].open}am until ${data.hours[days[i]].close}pm`
//     return obj
//   })
// }


//====================================EXERCICIO 9===============================


/* function animalMap(options) {
  // seu código aqui

  //criando o obejto com as chaves das regiões
  let animalsByLocation = {}
  data.animals.forEach(e => animalsByLocation[e.location] = ' ')

  //criando os valores das chaves, animais por regiao

  const listOfLocations = Object.keys(animalsByLocation)
  listOfLocations.forEach(e => data.animals.reduce((arrayOfAnimals, el) => {

    if (el.location === e) {
      arrayOfAnimals.push(el.name)
    }
    animalsByLocation[e] = arrayOfAnimals
    return arrayOfAnimals
  }, []))

  if (options === undefined) {
    return animalsByLocation
  }

  //colacando o nome de cada animal dentro da chave da especia

  let listOfNames = {}
  data.animals.forEach(e => {
    let arrOfNames = []
    e.residents.forEach(el => {
      if (options.sex === 'female') {
        if (el.sex === 'female') { arrOfNames.push(el.name) }
      } else {
        arrOfNames.push(el.name)
      }
      if (options.sorted === true) {
        arrOfNames.sort()
      }
      listOfNames[e.name] = arrOfNames
    })
  })

  //colocando tudo dentro do mesmo obejto

  listOfLocations.forEach(el => {
    let arrayWithNames = animalsByLocation[el].map(e => {
      return { [e]: listOfNames[e] }
    })
    animalsByLocation[el] = arrayWithNames
  })
  
  if (options.includeNames === undefined && options.sex === 'female') {

    let animalsByLocation = {}
    data.animals.forEach(e => animalsByLocation[e.location] = ' ')
    listOfLocations.forEach(e => data.animals.reduce((arrayOfAnimals, el) => {
      if (el.location === e) {
        arrayOfAnimals.push(el.name)
      }
      animalsByLocation[e] = arrayOfAnimals
      return arrayOfAnimals
    }, []))
    return animalsByLocation
  }

  if (options.includeNames === true) {
    return animalsByLocation
  }
}
console.log((animalMap({includeNames: true}))) */





// ====================================REFATORANDO PRO CODECLIMATE ===================================




function createLocationAndSpecies(listOfLocations, animalsByLocation) {
  listOfLocations.forEach(e => data.animals.reduce((arrayOfAnimals, el) => {
    if (el.location === e) {
      arrayOfAnimals.push(el.name)
    }
    animalsByLocation[e] = arrayOfAnimals
    return arrayOfAnimals
  }, []))
  return animalsByLocation
}

function createListOfNames(options) {
  let listOfNames = {}
  data.animals.forEach(e => {
    let arrOfNames = []
    e.residents.forEach(el => {
      if (options.sex === 'female') {
        if (el.sex === 'female') { arrOfNames.push(el.name) }
      } else {
        arrOfNames.push(el.name)
      }
      if (options.sorted === true) {
        arrOfNames.sort()
      }
      listOfNames[e.name] = arrOfNames
    })
  })
  return listOfNames
}

const createListOfNamesAndLocations = (listOfLocations, animalsByLocation, listOfNames) => {
  listOfLocations.forEach(el => {
    let arrayWithNames = animalsByLocation[el].map(e => {
      return { [e]: listOfNames[e] }
    })
    animalsByLocation[el] = arrayWithNames
  })
  return animalsByLocation
}


function animalMap(options) {
  let animalsByLocation = {}
  data.animals.forEach(e => animalsByLocation[e.location] = ' ')
  const listOfLocations = Object.keys(animalsByLocation)

  animalsByLocation = createLocationAndSpecies(listOfLocations, animalsByLocation)
 

  if (options === undefined) {
    return animalsByLocation
  }
  const listOfNames = createListOfNames(options)

  if (options.includeNames === undefined && options.sex === 'female') {
     return createLocationAndSpecies(listOfLocations, animalsByLocation)
  }

  animalsByLocation = createListOfNamesAndLocations(listOfLocations, animalsByLocation, listOfNames)

  if (options.includeNames === true) {
    return animalsByLocation
  }
}

console.log(JSON.stringify(animalMap({ sex: 'female'})))






// const listOfRegions = Object.keys(obj)

// let a = []

// listOfRegions.forEach(reg=> a = obj[reg].map(e => {
//   if (Object.keys(listOfNames).includes(e)){
//     e = {[e]: listOfNames[e]}
//   }
//   return e
// }))

// const nordeste = obj.NW 
// //console.log(nordeste)
// const nordestenovo = nordeste.map(e => {
//   if (Object.keys(listOfNames).includes(e)){
//     e = {[e]: listOfNames[e]}
//   }
//   return e
// })



// console.log(data.animals.find(e => e.location = "NE"))


//====================================EXERCICIO 8===============================REFAZER

// const {Adult, Child, Senior} = data.prices


// function entryCalculator(entrants) {
//   // seu código aqui

// const arr = ["Adult", "Child", "Senior"]

// const {Adult, Child, Senior} = entrants
// const payers = [Adult, Child, Senior]
// total = payers.reduce((sum, e, i) => {
//   console.log(sum, e, i)
//   return sum += e * data.prices[arr[i]]
// },0)
// console.log(total)
// }

// const entrants = { 'Adult': 2, 'Child': 3, 'Senior': 1 };

// console.log(entryCalculator(entrants))



// const arr = [0, 1, 3, 5, 6]
// const soma = arr.reduce((sum, e, i)=> {
//   console.log(sum, e, i)
//   sum += e
//   return sum
// })
// console.log(soma)

// let obj = {}
// if (obj === {}) {
//   console.log(true)
// }


//===========================EXERCÍCIO 7======================================

// function animalCount(animal) {
//   // seu código aqui
//   if (animal === undefined ){
//     const obj = {}
//     const names = data.animals.map(e => e.name)
//     names.forEach((e,i) => obj[e] = data.animals[i].residents.length)
//     console.log(obj)
//     return obj
//   }
//   const animals = data.animals.find(e => e.name === animal)
//   const total = animals.residents.length
//   console.log(total)
//   return total
// }

// animalCount("otters")



//=======================================MÉTODO ITERATIVO PARA FAZER O OBJETO=================================
// const names = data.animals.map(e => e.name)
// const quantity = data.animals.map(e=>e.residents.length)
// console.log(names, quantity)

// const obj = {}
// for (let i = 0; i < names.length; i += 1) {
//   obj[names[i]] = quantity[i]
// }

// console.log(obj)


// const obj = {}
// const names = data.animals.map(e => e.name)
// console.log(names)
// names.forEach((e,i) => obj[e] = data.animals[i].residents.length)
// console.log(obj)

// ============================================EXERCICIO 6=============================================


// function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
// const newEmployee = {id, firstName, lastName, managers, responsibleFor}
// data.employees.push(newEmployee)
// }

// addEmployee(23232, "fabiano", "emiliano")
// console.log(data.employees)


// function isTrue(teste) {
//   const managers = data.employees.map(e => e.managers.some(f => f === teste))
//   const isManager = managers.some(e => e === true)
//   return isManager
// }


// const teste = 'fdb2543b-5662-46a7-badc-93d960fdc0a8'
// console.log(isTrue(teste))

//======================================EXEMPLO CARRO============================================

// const carros = [
//   { modelo: "modelo",
//     ano: 1997,
//     cores: ["azul, amarelo"]
//   },
//   { modelo: "palio",
//     ano: 2000,
//     cores: ["preto"]
//   },
//   { modelo: "corsa",
//     ano: 1997,
//     cores: ["preto, prata"]
//   }
// ]

// const cores = carros.map(e => e.cores)
// console.log(cores)
// const amarelo = cores.find(e => e === "amarelo")
// console.log(amarelo)

