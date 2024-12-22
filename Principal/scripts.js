document.addEventListener("DOMContentLoaded",()=>{
var cardContainer=document.getElementById('card-container');

    fetch('https://fakestoreapi.com/products?limit=20')
                .then(res=>res.json())
                .then((json)=>{
                    var products = json
                    console.log(products);
            
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
                        <p class="card-price">${product.price}</>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            `;
            cardContainer.appendChild(cardDiv);
        });
    });
})
