let estados = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"]
for (let i = 0; i < 27; i++){
    var estado = document.createElement("option")
    document.getElementById("estados").appendChild(estado)
    estado.className = "estado"
    estado.value = estados[i]
    estado.innerHTML = estados[i]
}

document.getElementById("check").addEventListener("click", testDate)

function testDate(){
    let date = document.getElementById("data-inicio").value
    let dia = date.substring(0,2)
    let mes = date.substring(3,5)
    let ano = date.substring(6,10)

    if (dia < 0 || dia > 31 || mes < 0 || mes > 12 || ano < 0 || date[2]!="/" || date[5] !="/") {
        alert("data errada, redigite")
    } else {alert("data correta")}

}

document.getElementById("clean").addEventListener("click",clean)
function clean(){
    let list = document.querySelectorAll("input")
    for (let i = 0; i < list.length; i++){
        list[i].value = ""
    }
}

