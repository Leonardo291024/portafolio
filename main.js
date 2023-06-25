
const btnEnviar = document.getElementById('enviar__mensaje');
btnEnviar.addEventListener('click' ,validarFormulario);

function validarFormulario(){
    const inputNombre = document.getElementById('nombre').value;
    const inputEmail = document.getElementById('email').value;
    const inputAsunto = document.getElementById('asunto').value;
    const textMensaje = document.getElementById('mensaje').value;

    if(inputNombre === ""){
        alert("proporciona un nombre");
        return;
    }

    if(inputNombre.length > 50){
        alert("el campo debe tener maximo 50 caracteres");
        return;
    }

    if(inputEmail === ""){
        alert("agrega un email");
        return;
    }

    if(inputAsunto === ""){
        alert("Escribe un asunto");
        return;
    }

    if(textMensaje === ""){
        alert("Escribe un mensaje para ponerme en contacto contigo");
        
    }else{
        alert("mensaje enviado")
    }

    
   
    
}