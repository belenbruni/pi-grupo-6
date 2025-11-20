let formulario = document.querySelector(".forms form");
let emailRegister = document.querySelector(".emailRegister");
let password = document.querySelector(".passwordRegister");
let password2 = document.querySelector(".repeatPassword");
let aceptoTyC = document.querySelector(".botonTermsAndConditions");
let aceptoCondiciones = false;

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
        alert(mensajeVacio);
        return;
    } else if (password.value == "") {
        alert(mensajeVacio);
        return;
    } else if (password.value.length < 6) {
        alert(mensajeLargo);
        return;
    } else if (password.value != password2.value) {
        alert(mensajeNoCoincide);
        return;
    } else if (aceptoCondiciones == false) {
        alert(mensajeAcepto);
        return;
    }
    else {
        this.submit();
    }

})