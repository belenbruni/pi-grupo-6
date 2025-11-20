let emailUsuario = localStorage.getItem("emailUsuario");
let barraNav = document.querySelector(".barrauno ul");
let ulHeader = document.querySelector(".ulHeader");

if (emailUsuario != null) {
    ulHeader.innerHTML = '<li class="listabarra"><a href="./login.html" class="logout">Logout</a></li>' + '<li class="listabarra">Bienvenido: ' + emailUsuario + '</li>';
}


