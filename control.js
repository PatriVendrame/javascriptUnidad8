const usuario = document.getElementById("username");
const password = document.getElementById("password");
const error = document.getElementById("error");
const form = document.getElementById("formulario");

function validacion() {
    let errores = "";
    let entrar = false;
    let expReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (usuario.value === null || usuario.value === "" || !expReg.test(usuario.value)) {
        errores += 'Ingresa un usuario válido';
        entrar = true;
    }

    if (password.value === null || password.value === "") {
        errores += 'La contraseña debe tener al menos 8 caracteres';
        entrar = true;
    }

    if (entrar) {
        error.innerHTML = errores;
    }

}