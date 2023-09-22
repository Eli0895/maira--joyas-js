
//VARIABLES

const formulario = document.querySelector("#form-login");
const inputUser = document.querySelector("#user");
const inputPass = document.querySelector("#contraseña");

//FUNCIONES

function registrar() {
	const user = { usuario: inputUser.value, pass: inputPass.value };
	localStorage.setItem("user", JSON.stringify(user));
}

//EVENTOS

formulario.addEventListener("submit", (e) => {
	e.preventDefault();
	registrar();
	setTimeout(() => {
		window.location = "log-in.html";
	}, 2000);
});
