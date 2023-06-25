
const btnEnviar = document.getElementById('enviar__mensaje');
btnEnviar.addEventListener('click' ,validarFormulario);

function validarFormulario(){
    const inputNombre = document.getElementById('nombre').value;
    const inputEmail = document.getElementById('email').value;
    const inputAsunto = document.getElementById('asunto').value;
    const textMensaje = document.getElementById('mensaje').value;

    if(inputNombre === ""){
        alert("proporciona un nombre");
        
    }

    if(inputEmail === ""){
        alert("agrega un email");
      
    }

    if(inputAsunto === ""){
        alert("Escribe un asunto");
      
    }

    if(textMensaje === ""){
        alert("Escribe un mensaje para ponerme en contacto contigo");
        return;
    }

    alert("mensaje enviado")
   
    
}