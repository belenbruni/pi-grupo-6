let formulario = document.querySelector(".forms form");
let emailLogin = document.querySelector(".emailLogin");
let password = document.querySelector(".passwordLogin");
let mensajeEmail = document.querySelector(".campoEmail");
let mensajePassword = document.querySelector(".campoPassword");
let mensajeBoton = document.querySelector(".campoBoton");
let mensajeVacio = "Este campo es obligatorio, no puede quedar vacío.";
let mensajeLargo = "La contraseña debe tener al menos 6 caracteres.";

formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    if (emailLogin.value == "") {
        mensajeEmail.style.display = "block";
        mensajeEmail.innerText = mensajeVacio;

        return;
    }

    if (password.value == "") {
        mensajePassword.style.display = "block";
        mensajePassword.innerText = mensajeVacio;
        return;
    }

    if (password.value.length < 6) {
        mensajePassword.style.display = "block";
        mensajePassword.innerText = mensajeLargo;
        return;
    } else {
        localStorage.setItem("emailUsuario", emailLogin.value);
        this.submit();
    }
})


emailLogin.addEventListener("focus", function () {
    mensajeEmail.style.display = "none";

})

password.addEventListener("focus", function () {
    mensajePassword.style.display = "none";

})

