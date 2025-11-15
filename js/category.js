let producto = document.querySelector(".contenedorpadreblush")
let URL = 'https://dummyjson.com/products'
fetch(URL)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        let listaProductos = data.products;
        console.log(listaProductos)
        console.log(listaProductos.length)

        for (let i = 0; i < listaProductos.length; i++) {
            const element = listaProductos[i];


            producto.innerHTML += `<article class="cadablush">
                 <a href="./producto.html?id=${element.id}"><img class="imagenblush" src="${element.images[0]}" alt="Blush Happy">
                    <h4 class="nombreblush">${element.title}</h4>
                    <p class="detallesblush"></p>
                </a>
                <p class="precio">${element.price} </p>
                <a class="botoncompra" href="./producto.html?id=${element.id}">Ver más</a>
            </article>`
        }


    })
    .catch(function (err) {
        console.log(err);
    })







