//Desplegable perfil
const profileMenuBtn = document.getElementById('profile-menu-button');
const userMenu = document.getElementById('user-menu');

const showHideMenu = () => {
    if (userMenu.classList.contains('hidden')) {
        userMenu.classList.remove('hidden');
    } else {
        userMenu.classList.add('hidden');
    }
}

profileMenuBtn.addEventListener('click', showHideMenu);

//Botones personalizados con sweetAlert
function showSuccess() {
    Swal.fire({
        title: "Guardar Formulario",
        text: "Guardado Correctamente!",
        icon: "success"
    });
   
}

function onResetClick() {
    Swal.fire({
        title: "Borrar Formulario",
        text: "Formulario Borrado Correctamente!",
        icon: "success"
    });
    
}

//Formulario
var nombre = document.getElementById("input-name");
var apellido = document.getElementById("input-apellido");
var nacimiento = document.getElementById("date-usuario");
var mail = document.getElementById("mail_usuario");

var nombreError = document.getElementById("nombreError");
var apellidoError = document.getElementById("apellidoError");
var nacimientoError = document.getElementById("nacimientoError");
var mailError = document.getElementById("mailError");

const form = document.getElementById("validationForm");
var lettersRegex = /^[A-Za-záéíóúüñÁÉÍÓÚÜÑ\s]+$/;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!validatePattern(nombre.value, nombre, nombreError, 'nombre', lettersRegex)) return false;
    if (!validatePattern(apellido.value, apellido, apellidoError, 'apellido', lettersRegex)) return false;
    if (!validateEmpty(nacimiento.value, nacimiento, nacimientoError, 'fecha de nacimiento')) return false;
    if (!validateEmpty(mail.value, mail, mailError, 'e-mail')) return false;

    showSuccess();
    return true;
});

// Validación de que el campo no esté vacío y cumpla con el patrón
function validatePattern(valueInput, divInput, divError, nombreInput, lettersRegex) {
    if (!validateEmpty(valueInput, divInput, divError, nombreInput)) return false;

    if (!lettersRegex.test(valueInput)) {
        showError(divInput, divError, `El ${nombreInput} no debe contener números ni caracteres especiales`);
        return false;
    } else {
        hideError(divError);
        return true;
    }
}

function validateEmpty(valueInput, divInput, divError, nombreInput) {
    if (valueInput.trim().length === 0) {
        showError(divInput, divError, `El ${nombreInput} debe ser completado`);
        return false;
    } else {
        hideError(divError);
        return true;
    }
}

function showError(divInput, divError, message) {
    divError.innerHTML = `<p class="error">${message}</p>`;
}

function hideError(divError) {
    divError.innerHTML = "";
}

