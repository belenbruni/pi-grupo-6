let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get('id')
let contenedorPro = document.querySelector(".contenedorpadreproducto")
let contenedor = document.querySelector(".reviews")


let URL = `https://dummyjson.com/products/${id}`
fetch(URL)
    .then(function (res) {
        return res.json()

    })
    .then(function (data) {
        console.log(data)
        contenedorPro.innerHTML += `
    <h1 class="tituloproducto">${data.title}</h1>
                <article class="articleproducto">
                    <img class="imagenproducto" src=${data.images[0]}>
                    <p class="detallesproducto2"><a href="./category.html?categoria=${data.category}">Categoria: ${data.category}</a></p>
                </article class="productodescr">

                <article class="descriproducto">
                    <p class="descripcion">${data.description}</p>
                    <span>Información:</span>
                    <ul class="tonosproducto">
                        <li>Marca: ${data.brand}</li>
                        <li>Stock: ${data.stock}</li> 
                        <li>Rating: ${data.rating}</li>
                        <li>Descuento: ${data.discountPercentage}</li>
                        <li>Garantía: ${data.warrantyInformation}</li>
                        <li>Estado: ${data.availabilityStatus}</li>
                        <li>Devolución: ${data.returnPolicy}</li>
                        <li>Mínimo de pedidos: ${data.minimumOrderQuantity}</li>
                        <li>Tags: ${data.tags}</li>
                    </ul>
                    <p class="precioDetalle">$${data.price}</p>
                    <a class="botoncomprarya" href="./index.html">Comprar ya!</a>
                </article>`
        let reviews = data.reviews
        for (let i = 0; i < reviews.length; i++) {
            const element = reviews[i];
            contenedor.innerHTML += `<article class="articleReview">
                                    <h3 class="nombrereview"> ${element.reviewerName} </h3>
                                    <h4 class="emailReview"> - ${element.reviewerEmail} -</h4>
                                    <p class="rating"> Rating: ${element.rating}</p>
                                    <p class="review">Comentario: ${element.comment}</p>
                                    <p class="date"> ${element.date}</p>
                                </article>`
        }
    })
    .catch(function (err) {
        console.log(err)

    });