const inputUser = document.querySelector("#user"),
    inputPass = document.querySelector("#pass"),
    check = document.querySelector("#check"),
    formulario = document.querySelector("#form-login");

function registrar(valor) {
    const user = { usuario: inputUser.value, pass: inputPass.value };
    valor === "localStorage" &&
        localStorage.setItem("user", JSON.stringify(user));
    valor === "sessionStorage" &&
        sessionStorage.setItem("user", JSON.stringify(user));
}

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    check.click ? registrar("localStorage") : registrar("sessionStorage");
    window.location = "log-in.html"
});


function iniciarSesion() {
    const verify = !!user.find(element => element.inputUser === usuario && element.inputPass === pass)

    if (verify) {
        window.location = "index.html"
        alert('¡Correo y contraseña correctos!');
    } else {
        alert('Correo o contraseña incorrecta');
    }
}