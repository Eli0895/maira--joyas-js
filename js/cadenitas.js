
/*
const Productos = [
    { id: 1, nombre: "anillo", precio: 3000, material: "oro 18k" },
    { id: 2, nombre: "anillo1", precio: 1800, material: "plata 925" },
    { id: 3, nombre: "anillo2", precio: 2800, material: "oro 18k y circonias" },
    { id: 4, nombre: "colgante perlas", precio: 1500, material: "oro 18k y circonia" },
    { id: 5, nombre: "caravana circonia", precio: 1100, material: "plata 925 y circonia" },
    { id: 6, nombre: "pulsera circonia", precio: 1900, material: "plata 925" },
]

const carrito = [];

const promo1 = Productos.filter(p => {
    return p.nombre === 'anillo' ||
        p.nombre === 'caravana circonia'
});

const promo2 = Productos.filter(p => {
    return p.nombre === 'anillo2' ||
        p.nombre === 'pulsera circonia'
});

const promo3 = Productos.filter(p => {
    return p.nombre === 'colgante perlas' ||
        p.nombre === 'anillo1'
});


let PIN = "1234";
let ingresar = false;
function ingreso() {
    for (let i = 2; i >= 0; i--) {
        let ingresoPIN = prompt("Ingresa tu contraseña");
        if (ingresoPIN === PIN) {
            alert("BIENVENIDOS A MAIRA JOYAS , UN LUGAR DONDE EL DETALLE HACE LA DIFERENCIA");
            ingresar = true;
            break;
        } else {
            alert("Contraseña incorrecta, vuelva a intentarlo");
        }
    }
}

ingreso()
if (ingresar) {
    let productos = prompt(" Selecciona la promo que se ajuste mas a vos ! \n 1-ANILLO ORO + CARAVANA CIRCONIA \n 2-ANILLO 925 + PULSERA CIRCONIA \n 3-COLLAR PERLA + ANILLO CIRCONIA \n 4- MOSTRAR CARRITO \n PRESIONA x PARA SALIR");
    while (productos !== "x") {
        switch (productos) {
            case "1":
                carrito.push(...promo1);
                break;
            case "2":
                carrito.push(...promo2);
                break;
            case "3":
                carrito.push(...promo3);
                break;
            case "4": alert(carrito.map(item => item.nombre).join(","));
                break;
            default: alert("opcion no valida");
                break;
        }
        productos = prompt(" Selecciona la promo que se ajuste mas a vos ! \n 1-ANILLO ORO + CARAVANA CIRCONIA \n 2-ANILLO 925 + PULSERA CIRCONIA \n 3-COLLAR PERLA + ANILLO CIRCONIA \n 4- MOSTRAR CARRITO  \n PRESIONA x PARA SALIR");
    }
}

const totalCarrito = carrito.reduce((total, productos) => total + productos.precio, 0)
console.log("Total del carrito: $ " + totalCarrito);

*/

//TERCER ENTREGA

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

function borrarProducto(e) {
    e.preventDefault()
    if (e.target.classList.contains("borrar-curso")) {
        const productoId = e.target.getAttribute("data-id");

        const existe = productosCarrito.some(producto => (producto.id == productoId && producto.cantidad > 1));
        if (existe) {
            const productos = productosCarrito.map(producto => {
                if (producto.id === productoId) {
                    producto.cantidad--;
                }
                return producto;
            })
            productosCarrito = [...productos]
        } else {
            productosCarrito = productosCarrito.filter(producto => producto.id !== productoId)
        }
        carritoHtml()
    }
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
        <a href="#" class="borrar-curso"data-id="${id}"> X </a>
        </td>
        `
        listaDeCarrito.appendChild(row)

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
