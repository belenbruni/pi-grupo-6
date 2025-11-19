let queryString = location.search;
let query = new URLSearchParams(queryString);
let categoria = query.get("categoria");
let productos = document.querySelector(".contenedorpadreblush")
let titulo = document.querySelector(".tituloblush")

let URL = `https://dummyjson.com/products/category/${categoria}`;
fetch(URL)
    .then(function (res) {
        return res.json()
    })

    .then(function (data) {
        console.log(data)
        let listaProductos = data.products
        for (let i= 0; i < listaProductos.length; i++) {
            titulo.innerText = `${categoria}`
            const element = listaProductos[i];
            productos.innerHTML += `<article class="cadablush">
                 <a href="./producto.html?id=${element.id}"><img class="imagenblush" src="${element.images[0]}" alt="Blush Happy">
                    <h4 class="nombreblush">${element.title}</h4>
                    <p class="detallesblush"></p>
                </a>
                <p class="precio">$${element.price} </p>
                <a class="botoncompra" href="./producto.html?id=${element.id}">Ver más</a>
            </article>`
        }
        
    })
    .catch(function (err) {
        console.log(err)
    })

    





