let formulario = document.querySelector(".forms form");
let emailRegister = document.querySelector(".emailRegister");
let password = document.querySelector(".passwordRegister");
let password2 = document.querySelector(".repeatPassword");
let aceptoTyC = document.querySelector(".botonTermsAndConditions");
let aceptoCondiciones = false;
let mensajeEmail = document.querySelector(".campoEmail");
let mensajePassword=document.querySelector(".campoPassword");
let mensajeBoton = document.querySelector(".campoBoton");
let mensajePassword2 = document.querySelector(".campoPassword2")

let mensajeVacio = "Todos los campos son obligatorios, no pueden quedar vacíos.";
let mensajeLargo = "La contraseña debe tener al menos 6 caracteres.";
let mensajeNoCoincide = "Las contraseñas no coinciden."
let mensajeAcepto = "Se deben aceptar los términos y condiciones."

aceptoTyC.addEventListener("click", function () {
    if (aceptoCondiciones === false) {
        aceptoCondiciones = true;
    } else {
        aceptoCondiciones = false;
    }
})


formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    if (emailRegister.value == "") {
        mensajeEmail.style.display = "block";
        mensajeEmail.innerText= mensajeVacio;

        return;
    } else if (password.value == "") {
        mensajePassword.style.display = "block";
        mensajePassword.innerText= mensajeVacio;

        return;
    } else if (password.value.length < 6) {
        mensajePassword.style.display = "block";
        mensajePassword.innerText= mensajeLargo;

        return;
    } else if (password.value != password2.value) {
        mensajePassword2.style.display = "block";
        mensajePassword2.innerText= mensajeNoCoincide;

        return;
    } else if (aceptoCondiciones == false) {
        mensajeBoton.style.display = "block";
        mensajeBoton.innerText= mensajeAcepto;
        return;
    }
    else {
        this.submit();
    }

})

emailRegister.addEventListener("focus", function() {
    mensajeEmail.style.display = "none";
    
})

password.addEventListener("focus", function() {
    mensajePassword.style.display = "none";
    
})

password.addEventListener("focus", function() {
    mensajePassword.style.display = "none";
    
})

password2.addEventListener("focus", function() {
    mensajePassword2.style.display = "none";
    
})

aceptoTyC.addEventListener("focus", function() {
    mensajeBoton.style.display = "none";
    
})

