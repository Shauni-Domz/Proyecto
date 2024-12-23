document.addEventListener("DOMContentLoaded",()=>{
var nav = document.getElementById('navbar');

var navigation = document.createElement("div");
navigation.innerHTML=`
<div class="container-fluid">
    <p id="navbar-brand" class="navbar-brand" style="display:flex;justify-content: center; font-size: xx-large;">Flambelle's</p>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="../index.html">Inicio</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="productos.html">Productos</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="contacto.html">Contacto</a>
            </li>
            <li>
                <a href="carrito.html" style="font-size: x-large;"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                </svg></i> Carrito</a>
            </li>
        </ul>
    </div>
</div>
`;
nav.appendChild(navigation);


});