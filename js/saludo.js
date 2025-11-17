let emailUsuario = localStorage.getItem("emailUsuario");
let barraNav= document.querySelector(".barrauno ul");
let registerLogin = document.querySelectorAll(".ulHeader");

if (emailUsuario != null){
    for(let i = 0; i < registerLogin.length; i++){
        registerLogin[i].innerHTML= '<li class="listabarra"><a href="./login.html" class="logout">Logout</a></li>' + '<li class="listabarra">Bienvenido: ' + emailUsuario + '</li>';
    }

}
///PREGUNTAR SI ESTA BIEN USADO EL FOR Y EL INNER HTML