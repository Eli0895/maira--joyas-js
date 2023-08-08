/*
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
let productos=prompt(" Selecciona el tipo de joya en que estas interesado/a \n 1- ANILLOS \n 2-COLGANTES \n 3- PULSERAS \n 4-RELOJES \n 5-CADENAS \n 6-PRESIONA PARA SALIR");
while (productos !== ""){
switch(productos){
    case"1": alert("seleccionastes anillos");
    break;
    case"2": alert("seleccionastes colgantes");
    break; 
    case"3": alert("seleccionastes pulseras");
    break;
    case"4": alert("seleccionastes relojes");
    break;
    case"5": alert("seleccionastes cadenas");
    break;
    case"6": alert("Muchas gracias por visitarnos");
    break;
    default: alert("opcion no valida");
    }
}
productos= prompt(" Selecciona el tipo de joya en que estas interesado/a \n 1- ANILLOS \n 2-COLGANTES \n 3- PULSERAS \n 4-RELOJES \n 5-CADENAS \n 6-PRESIONA X PARA SALIR");
}


