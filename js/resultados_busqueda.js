let query = location.search;
let qsObj = new URLSearchParams(query);
let buscador = qsObj.get("buscador")
let URL = `https://dummyjson.com/products/search?q=${buscador}`;
let resultado = document.querySelector(".resultado")
let contenedor = document.querySelector(".contenedorPadreIndex")
resultado.innerText = `Resultados de búsqueda para "${buscador}"`

fetch(URL)
    .then(function (res) {
        return res.json()
    })

    .then(function (data) {
        console.log(data);
        let productos = data.products;
        if (buscador.length == 0) {
            alert("El campo de búsqueda no debe estar vacío")
            productos = ""
        }
        else if (buscador.length < 3) {
            alert("El campo requiere más de 3 caracteres")
            productos = ""
        }
        if (productos.length === 0) {
            resultado.innerHTML = `<h2>No hay resultados para: '${buscador}'</h2>`;
            productos= ""
        } else {
            let articulo = '';

            for (let i = 0; i < productos.length; i++) {
                const element = productos[i];

                articulo += `<article class="cadablush">
                 <a href="./producto.html?id=${element.id}"><img class="imagenblush" src="${element.images[0]}" alt="Blush Happy">
                    <h4 class="nombreblush">${element.title}</h4>
                    <p class="detallesblush"></p>
                </a>
                <p class="precio">$${element.price} </p>
                <a class="botoncompra" href="./producto.html?id=${element.id}">Ver más</a>
            </article>`;
            }

            contenedor.innerHTML = articulo;
        }
    })

    .catch(function (err) {
        console.log(err);
    })