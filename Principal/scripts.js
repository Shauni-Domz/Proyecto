document.addEventListener("DOMContentLoaded",()=>{
var cardContainer=document.getElementById('card-container');

    fetch('https://fakestoreapi.com/products?limit=20')
                .then(res=>res.json())
                .then((json)=>{
                    var products = json;
            
            cardContainer.innerHTML="";
        products.forEach((product) => {

            const cardDiv = document.createElement("div")

            cardDiv.className = 'col-lg-4 d-flex align-items-stretch';

            cardDiv.innerHTML = `
                <div class="card mx-auto">
                    <img src="${product.image}" class="card-img-top" alt="${product.title}">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">${product.description}</p>
                        <p class="card-price">Precio:$${product.price}</p>
                        <button class="btn btn-success mt-auto">Agregar al carrito</button>
                    </div>
                </div>
            `;

            const botonAgregar =cardDiv.querySelector("button");
            botonAgregar.addEventListener("click", ()=>
                {
                    agregarAlCarrito(product);
                });
                

            cardContainer.appendChild(cardDiv);
        });
        
    })
    .catch((error)=>console.log("Error API",error));
    
    function agregarAlCarrito(product){
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(product);
        localStorage.setItem("cart",JSON.stringify(cart));
        Swal.fire({
            title: "Añadido correctamente",
            text: `${product.title} ha sido agregado correctamente al carrito.`,
            icon: "success"
          });
    }




})


