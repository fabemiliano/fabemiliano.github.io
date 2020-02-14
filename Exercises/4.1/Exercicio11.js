/*11- Um trabalhador de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o 
IR. Faça um programa que, dado um salário bruto, calcula o líquido a ser recebido pelo trabalhador.
A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos,
 use as seguintes referências:
INSS
Salário bruto até R$ 1.556,94: alíquota de 8%
Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
IR
Até R$ 1.903,98: isento de imposto de renda
De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.*/

let salario = 3400
inss = 0
ir = 0

if (salario <= 1556.94) {
    inss = 0.08 * salario
}

else if (salario <= 2594.92) {
    inss = 0.09*salario
}
else if (salario <= 5189.82) {
    inss = 0.11*salario
}
else { inss = 570.88 }


if (salario <= 1903.98) {
    ir = 0
}

else if (salario <= 2826.65) {
    ir = 0.075*salario-142.8
}
else if (salario <= 3751.05) {
    ir = 0.15*salario-354.8
}
else if (salario <= 4664.68) {
    ir = 0.225*salario-636.13
}
else { ir = 0.275*salario-869.36 }

let salfinal = salario - inss - ir 

console.log("Salario será de R$",salfinal)