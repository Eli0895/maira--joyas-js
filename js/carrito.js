
//VARIABLES

const carrito = document.querySelector("#carrito");
const listaDeCarrito = document.querySelector("#lista-carrito");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito")
const listaProductos = document.querySelector("#listaProductos");
const productosPrecioTotal = document.querySelector('#productos-precio-total');
const finalizarCompra = document.querySelector("#finalizar-compra");
let productosCarrito = [];

//EVENTOS

CargarEventListener();
function CargarEventListener() {
    listaProductos.addEventListener("click", agregarProducto),
        carrito.addEventListener("click", borrarProducto),
        document.addEventListener("DOMContentLoaded", () => {
            productosCarrito = JSON.parse(localStorage.getItem("carrito")) || [];
            carritoHtml()
        });
    vaciarCarritoBtn.addEventListener("click", () => {
        productosCarrito = [];
        limpiarCarrito();
        sincronizarStorage();
    });
    finalizarCompra.addEventListener("click", () => {
        if(carrito.length > 0){
            setTimeout(() => {
                window.location = "pagar.html";
            }, 500);
                }else{
            Swal.fire({
                icon: 'error',
                title: "Carrito vacio",
                text: '¡Comenza a comprar ahora!',
            })
        }});
};

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
        precio: parseInt(producto.querySelector(".product-price").textContent.slice(1)),
        id: producto.querySelector("div").getAttribute("id"),
        cantidad: 1,
    };
    const existe = productosCarrito.some((producto) => producto.id === infoJoya.id);
    if (existe) {
        const joyas = productosCarrito.map((producto) => {
            if (producto.id === infoJoya.id) {
                producto.cantidad++;
                return producto;
            } else {
                return producto;
            }
        });
        productosCarrito = [...joyas];
    } else {
        productosCarrito.push(infoJoya);
    }
    console.log(productosCarrito);

    carritoHtml();
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
    productosPrecioTotal.innerHTML = calcularTotal();

}

function sincronizarStorage() {
    localStorage.setItem("carrito", JSON.stringify(productosCarrito));
}
productosPrecioTotal.innerHTML = calcularTotal();

function calcularTotal() {
    return productosCarrito.reduce((total, item) => {
        return total + item.precio * item.cantidad;
    }, 0);
}

function limpiarCarrito() {
    while (listaDeCarrito.firstChild) {
        listaDeCarrito.removeChild(listaDeCarrito.firstChild);
    }
}

//CLICK AL CARRITO
const btnMover = document.getElementById("mover");
btnMover.addEventListener("click", mover)
function mover() {
    const elemento = document.getElementById("carrito");
    elemento.classList.toggle("mostrar");
}

// FETCH 

const listapi = document.querySelector("#listadoapi");
const fetchButton = document.querySelector("#fetchButton");


fetchButton.addEventListener("click", () => {
    console.log(fetch('https://jsonplaceholder.typicode.com/todos/1'));
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((datos) => {
        listapi.innerHTML = ''; 
        for (const post of datos) {
            console.log(post);
            const li = document.createElement("li");
            li.className = "liapi";
            li.innerHTML = `<h2>${post.title}</h2>
                            <p>${post.body}</p>`;
            listapi.appendChild(li);
        }
    });
});