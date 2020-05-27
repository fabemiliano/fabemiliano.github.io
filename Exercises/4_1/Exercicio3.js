//Faça um programa que retorne o maior de três números. Defina no começo do programa
//três variáveis com os valores que serão comparados.

let a = 5
let b = 8
let c = 2

if ((a > b) && (a > c)) {
    console.log("O maior número é:", a)
}
else if ((b > c) && (b > a)) {
    console.log("O maior número é b")
}
else {
    console.log("O maior número é c")
}