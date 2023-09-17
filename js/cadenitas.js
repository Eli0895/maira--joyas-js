
const Productos = [
    { id: 1, nombre: "Alianzas oro", precio: 40000, material: "oro 18k", img: "20200316_102204.jpg" },
    { id: 2, nombre: "anillo circonia", precio: 2000, material: "oro 18k", img: "20220126_140653.jpg" },
    { id: 3, nombre: "anillo diamantes", precio: 2800, material: "oro 18k y circonias", img: "20220408_162340.jpg" },
    { id: 4, nombre: "Pulsera con letra", precio: 1500, material: "plata 925", img: "20220601_222937.jpg" },
    { id: 5, nombre: "cadenita arbol", precio: 1100, material: "plata 925", img: "20230619_182220.jpg" },
    { id: 6, nombre: "anillo ancho", precio: 2300, material: "plata 925 y oro 18k", img: "20220506_144242.jpg" },
    { id: 7, nombre: "cadenita chapa", precio: 1800, material: "plata 925", img: "20230214_225417.jpg" },
    { id: 8, nombre: "colgante plata 925", precio: 2000, material: "plata 925", img: "20230315_115955.jpg" },
    { id: 9, nombre: "anillo detallado", precio: 1500, material: "oro 18k y plata 925", img: "20230423_182929.jpg" },
    { id: 10, nombre: "anillo diamante", precio: 500, material: "plata 925 y oro 18k", img: "20230423_183515.jpg" },
    { id: 11, nombre: "anillo labrado", precio: 1800, material: "plata 925", img: "20230510_223111.jpg" },
    { id: 12, nombre: "esclava", precio: 1700, material: "plata 925", img: "20230504_144219.jpg" },
    { id: 13, nombre: "colgante triangulo", precio: 950, material: "oro 18k y plata 925", img: "20230427_094741.jpg" },
    { id: 14, nombre: "caravana plata", precio: 750, material: "plata 925", img: "20230423_185232.jpg" },
    { id: 15, nombre: "anillo trenza", precio: 1750, material: "plata 925 y oro 18k", img: "20230423_184153.jpg" },
    { id: 16, nombre: "anillo convinado", precio: 2800, material: "plata 925 y oro 18k", img: "20230413_103540.jpg" },
]

//VARIABLES

const carrito = document.querySelector("#carrito");
const listaDeCarrito = document.querySelector("#lista-carrito");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito")
const listaProductos = document.querySelector("#listaProductos")
let productosCarrito = [];

CargarEventListener();
function CargarEventListener() {
    listaProductos.addEventListener("click", agregarProducto),
        carrito.addEventListener("click", borrarProducto),
        document.addEventListener("DOMContentLoaded", () => {
            productosCarrito = JSON.parse(localStorage.getItem("carrito")) || [];
            carritoHtml();
        } )
        vaciarCarritoBtn.addEventListener("click", () => {
            productosCarrito = [];
            limpiarCarrito(); 
            sincronizarStorage();         
        });

        
}



//FUNCIONES

function agregarProducto(e) {
    if (e.target.classList.contains("agregar-carrito")) {
        productoSeleccionado = e.target.parentElement.parentElement;
        leerProducto(productoSeleccionado)
    }
};

function borrarProducto(productoId) {
    const existe = productosCarrito.some((producto) => producto.id == productoId && producto.cantidad > 1);
    if (existe) {
    const productos = productosCarrito.map((producto) => {
    if (producto.id === productoId) {
    producto.cantidad--;
    }
    return producto;
    });
    productosCarrito = [...productos];
    } else {
    productosCarrito = productosCarrito.filter((producto) => producto.id !== productoId);
    }
    carritoHtml();
    }
    
    

function leerProducto(producto) {
    infoJoya = {
        titulo: producto.querySelector(".product-title").textContent,
        precio: producto.querySelector(".product-price").textContent,
        id: producto.querySelector("div").getAttribute("id"),
        cantidad: 1
    }
    const existe = productosCarrito.some(producto => producto.id === infoJoya.id)
    if (existe) {
        const joyas = productosCarrito.map(producto => {
            if (producto.id === infoJoya.id) {
                producto.cantidad++;
                return producto;
            } else {
                return producto;
            }
        });
        productosCarrito = [...joyas]
    } else {
        productosCarrito.push(infoJoya)
    }
    console.log(productosCarrito);

    carritoHtml()
}

function carritoHtml() {
    limpiarCarrito()
    productosCarrito.forEach(curso => {
        const row = document.createElement("tr");
        const { titulo, precio, cantidad, id } = curso;
        row.innerHTML = `
        <td>${titulo}</td>
        <td>${precio}</td>
        <td>${cantidad}</td>
        <td>
        <button class="borrar-curso" id="borrar-${id}"> X </button>
        </td>
        `
        listaDeCarrito.appendChild(row);
		const button = document.getElementById(`borrar-${id}`);
		button.addEventListener("click", () => {
			borrarProducto(id);
    })
})
   sincronizarStorage();
}

function sincronizarStorage(){
        localStorage.setItem("carrito", JSON.stringify(productosCarrito));
}


function limpiarCarrito() {
    while (listaDeCarrito.firstChild) {
        listaDeCarrito.removeChild(listaDeCarrito.firstChild);
    }
}



const btnMover= document.getElementById("mover");
btnMover.addEventListener("click", mover)
function mover(){
    const elemento = document.getElementById("carrito");
    elemento.classList.toggle("mostrar");
}