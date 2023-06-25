
const btnEnviar = document.getElementById('enviar__mensaje');
btnEnviar.addEventListener('click' ,validarFormulario);

function validarFormulario(){
    const inputNombre = document.getElementById('nombre').value;
    const divErrorNombre = document.getElementById('error__nombre');
    const inputEmail = document.getElementById('email').value;
    const divErrorEmail = document.getElementById('error__email');
    const inputAsunto = document.getElementById('asunto').value;
    const divErrorAsunto = document.getElementById('error__asunto');
    const textMensaje = document.getElementById('mensaje').value;
    const divErrorMensaje = document.getElementById('error__mensaje');

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(inputNombre === ""){
        divErrorNombre.textContent = "el campo no puede estar vacio";
        return;
    }else{
        divErrorNombre.textContent = "";
    }

    if(inputNombre.length > 50){
        alert("el campo debe tener maximo 50 caracteres");
        return;
    }

    if(inputEmail === ""){
        divErrorEmail.textContent = "el campo no puede estar vacio";
        return;
    }else{
        divErrorEmail.textContent = "";
    }

    if(!emailPattern.test(inputEmail)){
        alert("ingrese un email valido");
        return;
    }

    if(inputAsunto === ""){
        divErrorAsunto.textContent = "el campo no puede estar vacio";
        return;
    }else{
        divErrorAsunto.textContent = "";
    }

    if(textMensaje === ""){
       divErrorMensaje.textContent = "el campo no puede estar vacio";
        
    }else{
        divErrorMensaje.textContent = "";
        alert("mensaje enviado");
    }

    
   
    
}