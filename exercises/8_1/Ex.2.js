const maiorPalavra = (phrase) => {

let word = phrase.split(" ")
let letter = []
let countmais = 0
let imaior = 0

for (let i = 0; i < word.length; i++){
  letter.push(word[i])
  let count = letter[i].length
  if (count > countmais){
    countmais = count
    imaior = i
  }
}

console.log(`A maior palavra é "${word[imaior]}"`)
}


maiorPalavra("Arroz feijão macarrão pão maionese chocolate")


