let producto = document.querySelectorAll(".contenedorpadreblush")
let URL = 'https://dummyjson.com/products'
fetch(URL)
.then(function(res){
    return res.json();
})
.then(function(data){
    let listaProductos = data.products;
    console.log(listaProductos)
    console.log(listaProductos.length)
   
    for (let i= 0; i<listaProductos.length; i++) {
        const element = listaProductos[i];
        producto[i].innerHTML += ` <article class="cadablush"> <h4 class="nombreblush"> <a href="./producto.html?id=${element.id}">${element.title}</a></h4><p class="precio"> ${element.price} </p> </article>`
        if (element.category) {
            
        } else {
            
        }
    }


})
.catch(function(err){
    console.log(err);
})