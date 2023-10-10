
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
