let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get('id')

let titulo = document.querySelector(".tituloproducto")
let imagen = document.querySelector(".imagenproducto")
let categoria = document.querySelector(".detallesproducto2")
let precio = document.querySelector(".precioDetalle")
let informacion = document.querySelector(".tonosproducto")


let URL = `https://dummyjson.com/products/${id}`
fetch(URL)
.then(function(res){
    return res.json()
    
})
.then(function(data){
    console.log(data)
    titulo.innerText = data.title
    imagen.src = data.images[0]
    categoria.innerText = `Categoria: ${data.category}`
    precio.innerText = data.price
    informacion.innerHTML = `<li>Marca: ${data.brand}</li>
                            <li>Stock: ${data.stock}</li> 
                            <li>Rating: ${data.rating}</li>
                            <li>Descuento: ${data.discountPercentage}</li>
                            <li>Garantia: ${data.warrantyInformation}</li>
                            <li>Estado: ${data.availabilityStatus}</li>
                            <li>Devolucion: ${data.returnPolicy}</li>
                            <li>Minimo de pedidos: ${data.minimumOrderQuantity}</li>`
                            



    
    
})
.catch(function(err){
    console.log(err)

});