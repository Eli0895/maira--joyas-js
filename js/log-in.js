const check = document.querySelector("#check");
const formulario = document.querySelector("#form-login");
const inputUser = document.querySelector("#user").value;
const inputPass = document.querySelector("#pass").value;

function registrar() {


    const user = { usuario: inputUser.value, pass: inputPass.value };
    localStorage.setItem("user", JSON.stringify(user))
}

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    registrar();
    setTimeout(() => {
        window.location = "log-in.html";
    }, 2000)
});


function iniciarSesion() {

    const usuario = email.value;
    const pass = contraseña.value;
    const userFromStorage = JSON.parse(localStorage.getItem("user"));

    if (userFromStorage.usuario === usuario && userFromStorage.pass === pass) {
        window.location = "index.html"
    } else {
        alert('Correo o contraseña incorrecta');
    }
}

check.addEventListener("click", (e) => {
    iniciarSesion();
});