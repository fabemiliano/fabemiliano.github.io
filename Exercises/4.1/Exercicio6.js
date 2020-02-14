let str = "Cavalo";

let peca = str.toLowerCase();

switch (peca) {
    case "cavalo":
        console.log("Mova uma posicao para o lado e duas posicoes para frente");
        break;
    case "bispo":
        console.log("Mova na diagonal");
        break;
    case "torre":
        console.log("Mova na horizontal ou na vertigal");
        break;
    case "rei":
        console.log("Mova em qualquer direção, porém apenas uma casa");
        break;
    case "rainha":
        console.log("Mova em qualquer direçao e quantas casas quiser");
        break;
    case "peao":
        console.log("Mova apenas para frente. Se for a primeira jogada do peão, pode mover uma ou duas. O peao só come na diagonal");
        break;
    default: console.log("Peça Inválida")
    }