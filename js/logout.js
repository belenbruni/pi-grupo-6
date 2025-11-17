let logout= document.querySelector(".logout");
logout.addEventListener('click', function(event) {
    event.preventDefault();
    localStorage.removeItem("emailUsuario");
    window.location.href= "./login.html"
    for (let i = 0; i < listas.length; i++) {
        logout[i].innerHTML =
            '<li class="listabarra"><a href="./register.html">Registrarse</a></li>' +
            '<li class="listabarra"><a href="./login.html">Iniciar sesion</a></li>';}
    })

    ///PREGUNTAR SI ESTA BIEN USADO EL FOR Y EL INNER HTML