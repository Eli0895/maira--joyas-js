
let PIN= "1234";
let ingresar = false;
function ingreso() {
    for (let i = 2; i >= 0; i--) {
        let ingresoPIN = prompt("Ingresa tu contraseña");
        if( ingresoPIN === PIN){
        alert("BIENVENIDOS A MAIRA JOYAS , UN LUGAR DONDE EL DETALLE HACE LA DIFERENCIA");
        ingresar=true;
        break;
    } else {
        alert("Contraseña incorrecta, vuelva a intentarlo");
        }
    } 
}
ingreso()

if(ingresar){
    let productos=prompt(" Selecciona la promo que se ajuste mas a vos ! \n 1-ANILLO ORO + CARAVANA CIRCONIA \n 2-ANILLO 925 + PULSERA CIRCONIA \n 3-COLLAR PERLA + ANILLO CIRCONIA \n 6-PRESIONA PARA SALIR");
while (productos !== ""){
switch(productos){
    case"1": alert("El total es" + $ + );
    break;
    case"2": alert(precio(precio));
    break;
    case"3": alert(promo3);
    break;
    default: alert("opcion no valida");
    break;
        }
    productos= prompt(" Selecciona el tipo de joya en que estas interesado/a \n 1- ANILLOS \n 2-COLGANTES \n 3- PULSERAS \n 4-RELOJES \n 5-CADENAS \n 6-SALIR");
    }

}

/*SEGUNDA PRE-ENTREGA*/


const Productos=[
    { id: 1, nombre: "anillo", precio: 3000, material:"oro 18k" },
    { id: 2, nombre: "anillo1", precio: 1800, material: "plata 925" },
    { id: 3, nombre: "anillo2", precio: 2800, material: "oro 18k y circonias" },
    { id: 4, nombre: "colgante perlas", precio: 1500, material: "oro 18k y circonia" },
    { id: 5, nombre: "caravana circonia", precio: 1100, material: "plata 925 y circonia" },
    { id: 6, nombre: "pulsera circonia", precio: 1900, material: "plata 925" },
]

const carrito=[];

const promo1= Productos.filter(p=>{
    return p.nombre === 'anillo' || 
    p.nombre === 'caravana circonia'
}); 

const promo2= Productos.filter(p=>{
    return p.nombre === 'anillo2' || 
    p.nombre === 'pulsera circonia'
}); 

const promo3= Productos.filter(p=>{
    return p.nombre === 'colgante perlas' || 
    p.nombre === 'anillo1'
}); 

carrito.push(promo1)
carrito.push(promo2)

//console.log(carrito);

const total1= promo1.reduce((acu,el) => acu+el.precio,0);
const total2= promo2.reduce((acu,el) => acu+el.precio,0);
const total3= promo3.reduce((acu,el) => acu+el.precio,0);
console.log(total1)
console.log(total2)
console.log(total3)

