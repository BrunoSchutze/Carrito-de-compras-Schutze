const carrito = document.getElementById('carrito');
const elementos = document.querySelectorAll('.agregar-carrito');
const lista = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

cargarEventListeners();

function cargarEventListeners() {
    for (const elemento of elementos) {
        elemento.addEventListener('click', compraElemento);
    }
    carrito.addEventListener('click', eliminarElemento);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito); // Vincula el evento click con la función vaciarCarrito.
}


function compraElemento(e) {
    e.preventDefault();
    const elemento = e.target.parentElement;

    if (elemento.classList.contains('agregar-carrito')) {
        leerDatosElemento(elemento);
    }
}


function leerDatosElemento(elemento){
    const infoElemento = {
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').textContent,
        precio: elemento.querySelector('.precio').textContent,
        id: elemento.getAttribute('data-id')
    }
    insertarCarrito(infoElemento);
}

function vaciarCarrito() {
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
}

function insertarCarrito(infoElemento) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td><img src="${infoElemento.imagen}" width="100"></td>
        <td>${infoElemento.titulo}</td>
        <td>${infoElemento.precio}</td>
        <td><a href="#" class="borrar-elemento" data-id="${infoElemento.id}">X</a></td>
    `;
    lista.appendChild(row);
}

function eliminarElemento(e) {
    e.preventDefault();
    if (e.target.classList.contains('borrar-elemento')) {
        e.target.parentElement.parentElement.remove();
    }
}



// Función para saludar al usuario con un mensaje personalizado
function saludarUsuario() {
    const nombreUsuario = prompt('Por favor, ingresa tu nombre:');
    
    if (nombreUsuario) {
        const mensaje = `¡Hola, ${nombreUsuario}! Bienvenido(a) a JTVasos. Esperamos que disfrutes explorando nuestros productos.`;
        alert(mensaje);
    }
}

// Llamar a la función de saludo cuando la página se haya cargado completamente
window.onload = function() {
    saludarUsuario();
};


