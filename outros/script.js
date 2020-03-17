import emailAddress from 'formvalidation/dist/es6/validators/emailAddress';

const res1 = emailAddress().validate({
    value: 'niceandsimple@example.com',
    options: {
        message: 'The value is not a valid email address',
    },
});
// res1.valid === true

const res2 = emailAddress().validate({
    value: 'just"not"right@example.com',
    options: {
        message: 'The value is not a valid email address',
    },
});





// function validar(campo) { 
//     //se não desejar números é só remover da regex abaixo 
//     var regex = '[^a-zA-Z0-9]+'; 
//     if(campo.match(regex)) { 
//     //encontrou então não passa na validação 
//     return false; 
//     } else 
//     { 
//     //não encontrou caracteres especiais 
//     return true;
//      }
//      }


//     let a = validar("Maria%")

//     console.log(a)