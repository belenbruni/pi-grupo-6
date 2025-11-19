let queryString = location.search;
let qs = new URLSearchParams(queryString);
let id = qs.get("id");
let productos = document.querySelector(".contenedorPadreIndex")
let productosDos = document.querySelector(".contenedorPadreIndexDos")
let URL = `https://dummyjson.com/products/`;
console.log(id)
console.log(URL)


fetch(URL)
    .then(function (res) {
        return res.json()
    })
    
    .then(function (data) {
        console.log(data)
        let listaProductos = data.products
        for (let i= 0; i < (listaProductos.length)/3; i++) {
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

fetch(URL)
    .then(function (res) {
        return res.json()
    })
    
    .then(function (data) {
        console.log(data)
        let listaProductos = data.products
        for (let i= 20; i < (listaProductos.length); i++) {
            const element = listaProductos[i];
            productosDos.innerHTML += `<article class="cadablush">
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