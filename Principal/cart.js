document.addEventListener("DOMContentLoaded",()=>{

    const cartItemStorage = JSON.parse(localStorage.getItem('cart')) || [];
    const cartTable = document.getElementById('cartItem');
    const totalGeneral = document.getElementById('total');
    let total = 0;

    cartItemStorage.forEach( item => {
        
        const row = document.createElement('tr');
        
        var index = document.createElement('')

        var nombre = document.createElement('td');
        nombre.textContent=item.title;
        row.appendChild(nombre);

        var precio = document.createElement('td');
        precio.textContent="$"+item.price;
        row.appendChild(precio);

        var cantidad = document.createElement('td');
        cantidad.textContent= 1;
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