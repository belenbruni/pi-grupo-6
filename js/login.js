let formulario = document.querySelector(".forms form");
let emailLogin = document.querySelector(".emailLogin");
let password= document.querySelector(".passwordLogin");
let mensajeVacio = "Todos los campos son obligatorios, no pueden quedar vacíos";
let mensajeLargo= "La contraseña debe tener al menos 6 caracteres";

formulario.addEventListener('submit', function(e) {
    event.preventDefault();
    if (emailLogin.value == ""){
        alert(mensajeVacio); 
        return;
    }
    if (password.value ==""){
        alert(mensajeVacio); 
        return;
    }
    if (password.value.length < 6) {
        alert(mensajeLargo);
        return;
    }else{
        localStorage.setItem("emailUsuario", emailLogin.value);
        this.submit(); 
    }
    
})