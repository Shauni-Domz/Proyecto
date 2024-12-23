document.addEventListener("DOMContentLoaded",()=>{

    const cartItemStorage = JSON.parse(localStorage.getItem('cart')) || [];
    const cartTable = document.getElementById('cartItem');
    const totalGeneral = document.getElementById('total');
    let total = 0;

    cartItemStorage.forEach( item => {
        
        const row = document.createElement('tr');
        

        var precio = document.createElement('td');
        precio.textContent="$"+item.price;
        row.appendChild(precio);

        var cantidad = document.createElement('td');
        cantidad.innerHTML = 
        `<button type="button" class="plus" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-patch-plus-fill" viewBox="0 0 16 16">
        <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zM8.5 6v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 1 0"/>
        </svg></button>
        <span>${item.count}</span>
        <button type="button" class="minus"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-patch-minus-fill" viewBox="0 0 16 16">
        <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zM6 7.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1"/>
        </svg></button>`;
        const plus = cantidad.querySelector('.plus');
        const minus = cantidad.querySelector('.minus');
        plus.addEventListener("click",()=>{
            item.count +=1;
            localStorage.setItem("cart",JSON.stringify(cart));
        });
        minus.addEventListener("click",()=>{
            item.count -=1;
            localStorage.setItem("cart",JSON.stringify(cart));
        });
        row.appendChild(cantidad);

        var subTotal = item.price * 1; 
        var sCell = document.createElement('td');
        sCell.textContent =`$${subTotal}`;
        row.appendChild(sCell);

        cartItem.appendChild(row);

        total += subTotal
    
    });
    totalGeneral.textContent=total.toFixed(2);
    
    
    
    
    
    
    document.getElementById('return').addEventListener('click',()=>{
        window.location.href='productos.html';
    });
    document.getElementById('empty').addEventListener('click', ()=>{
        localStorage.removeItem('cart');
        window.location.href='carrito.html';
    });
    document.getElementById('finish').addEventListener('click', ()=>{
    Swal.fire({
        title: "Compra finalizada",
        text: "Pronto te redirigiremos a la pantalla de inicio",
        icon: "success",
        confirmButtonText: "Aceptar"
      });
    setTimeout(()=>{
        window.location.href='../index.html';
    },4000);
    });











})