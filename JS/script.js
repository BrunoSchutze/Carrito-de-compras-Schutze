
const productos = [
    {
        id: 1,
        titulo: 'Absolut Citron',
        precio: 800,
        imagen: './images/VasoABSOLUT1.jpeg'
    },
    {
        id: 2,
        titulo: 'Absolut Vodka',
        precio: 800,
        imagen: './images/VasoABSOLUT2.jpeg'
    },
    {
        id: 3,
        titulo: 'Absolut Raspberri',
        precio: 800,
        imagen: './images/VasoABSOLUT3.jpeg'
    },
    {
        id: 4,
        titulo: 'Baileys',
        precio: 500,
        imagen: './images/VasoBAILEYS.jpeg'
    },
    {
        id: 5,
        titulo: 'Brighton',
        precio: 500,
        imagen: './images/VasoBRIGHTON.jpeg'
    },
    {
        id: 6,
        titulo: 'Campari',
        precio: 500,
        imagen: './images/VasoCAMPARI.jpeg'
    },
    {
        id: 7,
        titulo: 'Fernet',
        precio: 500,
        imagen: './images/VasoFERNET.jpeg'
    },
    {
        id: 8,
        titulo: 'Havana',
        precio: 500,
        imagen: './images/VasoHAVANA-especial.jpeg'
    },
    {
        id: 9,
        titulo: 'Smirnoff',
        precio: 500,
        imagen: './images/VasosSMIRNOFF.jpeg'
    },
    
];

const carrito = document.getElementById('carrito');
const lista = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
const filtrarProductosInput = document.getElementById('filtrar-productos');
const agregarProductos = document.querySelectorAll('.agregar-carrito');

let carritoItems = [];

cargarEventListeners();

function cargarEventListeners() {
    agregarProductos.forEach(producto => {
        producto.addEventListener('click', compraElemento);
    });

    carrito.addEventListener('click', eliminarElemento);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
    filtrarProductosInput.addEventListener('input', filtrarProductos);
}

function compraElemento(e) {
    e.preventDefault();
    const productoID = parseInt(e.target.getAttribute('data-id'));
    const productoSeleccionado = productos.find(producto => producto.id === productoID);
    agregarAlCarrito(productoSeleccionado);
}

function agregarAlCarrito(producto) {
    carritoItems.push(producto);
    mostrarCarrito();
}

function mostrarCarrito() {
    limpiarHTML();

    carritoItems.forEach(producto => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${producto.imagen}" width="100"></td>
            <td>${producto.titulo}</td>
            <td>${producto.precio}</td>
            <td><a href="#" class="borrar-elemento" data-id="${producto.id}">X</a></td>
        `;
        lista.appendChild(row);
    });
}

function limpiarHTML() {
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
}

function eliminarElemento(e) {
    e.preventDefault();
    if (e.target.classList.contains('borrar-elemento')) {
        const productoID = parseInt(e.target.getAttribute('data-id'));
        carritoItems = carritoItems.filter(producto => producto.id !== productoID);
        mostrarCarrito();
    }
}

function vaciarCarrito() {
    carritoItems = [];
    limpiarHTML();
}

function filtrarProductos(e) {
    const texto = e.target.value.toLowerCase();
    const productosFiltrados = productos.filter(producto => producto.titulo.toLowerCase().includes(texto));
    limpiarHTML();
    carritoItems = productosFiltrados;
    mostrarCarrito();
}

function compraElemento(e) {
    e.preventDefault();
    const productoID = parseInt(e.target.getAttribute('data-id'));
    const productoSeleccionado = productos.find(producto => producto.id === productoID);
    
    const cantidad = prompt(`Ingrese la cantidad de "${productoSeleccionado.titulo}" que desea comprar:`);
    
    if (cantidad !== null && !isNaN(cantidad) && parseInt(cantidad) > 0) {
        productoSeleccionado.cantidad = parseInt(cantidad);
        agregarAlCarrito(productoSeleccionado);
        console.log(`${cantidad} "${productoSeleccionado.titulo}"(s) agregado(s) al carrito.`);
    } else {
        console.log('Operación cancelada o cantidad inválida.');
    }
}




