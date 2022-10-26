// function enviar (){
//     let Nombre = document.getElementById ("Nombre").value;
//     let Apellido = document.getElementById ("Apellido").value;
//     let Pais = document.getElementById ("Pais").value;
//     let Calle = document.getElementById ("Calle").value;
//     let Numero = document.getElementById ("Numero").value;
//     let Mensaje = document.getElementById ("Mensaje").value;
//     console.log({Nombre:Nombre,Apellido:Apellido,Pais:Pais,Calle:Calle,Numero:Numero,Mensaje:Mensaje});
//     alert(`${Nombre}, ${Apellido} del ${Pais} ha enviado un msj`)
// }

// function enviar (){
//     let Nombre = document.getElementById ("Nombre");
//     if (!Nombre.value) {
//         console.log("Vacio");
//         alert("te falta completar el nombre")
//     }else{
//         console.log("Nombre esta completado")
//     }
// }

// function enviar(){
//      let Nombre = document.getElementById("Nombre");
//      let NombreError = document.getElementById("NombreError");
//      if (Nombre.value) {
//          Nombre.classList.remove("campoInvalido")
//      }else{
//          Nombre.classList.add("campoInvalido")
//          NombreError.classList.remove("ocultarError");
//         }
//     }
function enviar(){
let Nombre = document.getElementById ("Nombre");
let NombreError = document.getElementById("NombreError");
let Apellido = document.getElementById ("Apellido");
let ApellidoError = document.getElementById ("ApellidoError");
let Pais = document.getElementById ("Pais");
let PaisError = document.getElementById ("PaisError");
let Calle = document.getElementById ("Calle");
let CalleError = document.getElementById ("CalleError");
let Numero = document.getElementById ("Numero");
let NumeroError = document.getElementById ("NumeroError");
let Mensaje = document.getElementById ("Mensaje");
let MensajeError = document.getElementById ("MensajeError");
validarInput(Nombre,NombreError);
validarInput(Apellido,ApellidoError);
validarInput(Pais,PaisError);
validarInput(Calle,CalleError);
validarInput(Numero,NumeroError);
validarInput(Mensaje,MensajeError);
}
function validarInput (inputElement,inputError){
    if (inputElement.value) {
        inputElement.classList.remove("campoInvalido")
        inputError.classList.add("ocultarError");
        }else{
        inputElement.classList.add("campoInvalido")
        inputError.classList.remove("ocultarError");
    }
}