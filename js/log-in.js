//VARIABLES

const check = document.querySelector("#check");
const inputUser = document.querySelector("#email");
const inputPass = document.querySelector("#pass");

//FUNCIONES

function iniciarSesion() {
	const usuario = inputUser.value;
	const pass = inputPass.value;
	const userFromStorage = JSON.parse(localStorage.getItem("user"));
	if (userFromStorage.usuario === usuario && userFromStorage.pass === pass) {
		window.location = "carrito.html";
	} else {
		Swal.fire({
            icon: 'error',
            title: "CONTRASEÑA O USUARIO INCORRECTO",
            text: '¡Volve a intentarlo!',
          })
	}
}

//EVENTOS

check.addEventListener("click", (e) => {
    setTimeout(() => {
        iniciarSesion();
	}, 500);

});
