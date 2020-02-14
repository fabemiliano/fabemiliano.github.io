/*10- Escreva um programa que, dado o custo de um produto e seu valor de venda, calcule quanto de 
lucro (em números absolutos) a empresa terá ao vender mil desses produtos.

Atente que, sobre o custo do produto, incide um imposto de 20% que deve ser 
considerado no calculo do lucro.

Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores 
de entrada seja menor que zero.*/

let custo = 200
let venda = 300

let lucro = (venda - custo) * 0.8 * 1000

if (custo < 0 || venda < 0) {
    console.log("Dados inválidos")
}
else {
    console.log("R$",lucro)
}