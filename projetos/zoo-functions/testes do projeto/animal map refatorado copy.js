function animalMap(options) {
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

//colacando o nome de cada animal dentro da chave da especia

  let listOfNames = {}
  data.animals.forEach(e => {
    let arrOfNames = []
    e.residents.forEach(el =>{
    arrOfNames.push(el.name)
    listOfNames[e.name] = arrOfNames
  })})

  //colocando tudo dentro do mesmo obejto

  listOfLocations.forEach( el =>
   { let arrayWithNames = animalsByLocation[el].map(e => {
      return {[e]: listOfNames[e]}
    })
    animalsByLocation[el] = arrayWithNames
  })

    return animalsByLocation

}
console.log(JSON.stringify(animalMap()))






/sem opcóes

  let obj = {}
  data.animals.forEach(e => obj[e.location] = ' ')
  const arr = Object.keys(obj)

  arr.forEach(e => data.animals.reduce((arrayOfAnimals, el) => {
    if (el.location === e) {
      arrayOfAnimals.push(el.name)
    }
    obj[e] = arrayOfAnimals
    return arrayOfAnimals
  }, []))


  let listOfNames = {}
  data.animals.forEach(e => e.residents.reduce((arrOfNames, el) => {
    
    
    if (options !== undefined && options.sex === 'female') {
      if (el.sex === 'female') {
        arrOfNames.push(el.name)
        listOfNames[e.name] = arrOfNames
      } return arrOfNames
    }

    else {
      arrOfNames.push(el.name)
      listOfNames[e.name] = arrOfNames
      if (options !== undefined && options.sorted === true){
        return arrOfNames.sort()
      
      }
    }
    return arrOfNames
  }, []))

  //com nomes
  let list = Object.keys(obj)
  const regionAndEspecies = {}
  for (i = 0; i < list.length; i += 1) {
    let reg = list[i]
    let newArr = obj[reg].map(e => {
      if (Object.keys(listOfNames).includes(e)) {
        return { [e]: listOfNames[e] }
      }
    })
    regionAndEspecies[list[i]] = newArr
  }
  if (options == undefined) {
    return obj
  }
  if (options.includeNames === true) {
    return regionAndEspecies
  }



 