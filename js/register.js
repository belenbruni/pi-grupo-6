let formulario = document.querySelector(".forms form");
let emailRegister = document.querySelector(".emailRegister");
let password = document.querySelector(".passwordRegister");
let password2 = document.querySelector(".repeatPassword");
let aceptoTyC = document.querySelector(".botonTermsAndConditions")
let mensajeVacio = "Todos los campos son obligatorios, no pueden quedar vacíos";
let mensajeLargo = "La contraseña debe tener al menos 6 caracteres";
let mensajeNoCoincide = "Las contraseñas no coinciden"

formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    if (emailRegister.value == "") {
        alert(mensajeVacio);
        return;
    }else if (password.value == "") {
        alert(mensajeVacio);
        return;
    }else if (password.value.length < 6) {
        alert(mensajeLargo);
        return;
    }else if (password.value != password2.value) {
        alert(mensajeNoCoincide);
        return;

        ///FALTA AGREGAR LO DEL BOTON DE TERMUNIOS Y CONDICIONES 
    }else {
        this.submit();
    }

})