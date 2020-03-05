
let generateLetter = document.getElementById("criar-carta")
    generateLetter.addEventListener('click', createLetter); 
    
    function createLetter(){
        let textoInput = document.getElementById("carta-texto").value 
        let textBox = textoInput.split(" ")
    
        for (let i = 0; i < textBox.length; i++){
            let word = document.createElement("span")
            document.getElementById("carta-gerada").appendChild(word)
            word.innerHTML = textBox[i]
        }
    }
    

