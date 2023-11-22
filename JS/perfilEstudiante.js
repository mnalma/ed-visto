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

//Botones Guardar y Cancelar
function onSubmitClick() {

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

//Validación formulario
function validarFormulario() {
    var nombre_usuario = document.getElementById('nombre_usuario').value;
    var apellido_usuario = document.getElementById('apellido_usuario').value;
    var date_usuario = document.getElementById('date_usuario').value;

    document.getElementById('nombreError').innerHTML = '';
    document.getElementById('apellidoError').innerHTML = '';
    document.getElementById('dateError').innerHTML = '';


    if (nombre_usuario === '') {
        document.getElementById('nombreError').innerHTML = 'El campo nombre debe ser llenado correctamente';
        return false;
    }


    if (apellido_usuario === '') {
        document.getElementById('apellidoError').innerHTML = 'Has olvidado poner tu apellido';
        return false;
    }


    if (isNaN(date_usuario)) {
        document.getElementById('ageError').innerHTML = 'El campo fecha de nacimiento es obligatorio';
        return false;
    }
    alert('Formulario enviado con exito');
    return true;
}