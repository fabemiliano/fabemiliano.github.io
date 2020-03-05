let button = document.getElementById("criar-tarefa")   //adicionar evento de criar lista no botao 
button.addEventListener("click", addTask)

function addTask() {

    //criar lista
    let bullet = document.createElement("li")
    document.getElementById("lista-tarefas").appendChild(bullet)
    bullet.className = "tarefa"

    let Task = document.getElementById("texto-tarefa").value
    bullet.innerHTML = Task
    document.getElementById("texto-tarefa").value = ""

    // adicionar click  
    bullet.addEventListener("click", changeColor)    //pra cada li criado eu crio um evento (estava colando fora da funcao)
    function changeColor() {
        bullet.style.backgroundColor = "rgb(128,128,128)"
        bullet.classList.add("selected")   //adiciona a classe selected pois irei precisar dessa classe depois para remover
    }

    // adicionar doubleclick
    bullet.addEventListener("dblclick", lineThrough)
    function lineThrough() {
        if (bullet.classList == "tarefa completed" || bullet.classList == "tarefa selected completed") {   // posso usar o bullet.classList.toggle("class") ou bullet.class.contains("")
            bullet.classList.remove("completed")
        } else { bullet.classList.add("completed") }

    }
    // apagar tudo
    let eraseButton = document.getElementById("apaga-tudo")
    eraseButton.addEventListener("click", deleteAll)

    function deleteAll() {
        document.getElementById("lista-tarefas").innerHTML = ""
    }

    //remover finalizados
    let eraseCompleted = document.getElementById("remover-finalizados")
    eraseCompleted.addEventListener("click", removeCompleted)

    function removeCompleted() {
        document.querySelectorAll('.completed').forEach(function (selected) {
            selected.remove()
        })
    }

    //remover selecionado

    let deleteSelected = document.getElementById("remover-selecionado")
    deleteSelected.addEventListener("click", removeSelected)

    function removeSelected() {
        document.querySelectorAll('.selected').forEach(function (selected) {
            selected.remove()
        })

    }
    //mover pra baixo
    let moveUp = document.getElementById("mover-cima")
    moveUp.addEventListener("click", movUp)

    function movUp() {
        document.querySelectorAll(".selected").forEach(function (selected) {

            document.getElementById("lista-tarefas").insertBefore(selected, selected.nextElementSibling)

        })
    }

    
}


/*
if (localStorage.getItem('dados')) {
    document.getElementById("lista-tarefas").innerHTML = localStorage.getItem("dados")
    document.querySelectorAll("li")

    localStorage.setItem('dados', document.getElementById('lista-tarefas').innerHTML) //observar onde colocar o localStorage

         for (let i = 0; i < 25; i++) {
            savedTasks[i].addEventListener("click", changeColor)
            savedTasks[i].addEventListener("dblclick", lineThrough)
        }
*/









