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
    //  tendria que nombrarla validar?
function onsubmitButton() {
    Swal.fire({
        title: "Guardar Formulario",
        text: "Guardado Correctamente!",
        icon: "success"
    });
    console.log("soy el onsubmit");
}

function onResetClick() {
    Swal.fire({
        title: "Borrar Formulario",
        text: "Formulario Borrado Correctamente!",
        icon: "success"
    });
    
}

// onsubmit="return validar()";

// //Validacion del formulario
function validar() {
    const inputNombre = document.getElementById('input-nombre');
    const inputApellido = document.getElementById('input-apellido');
    const inputEmail = document.getElementById('mail_usuario')
    const inputDate = document.getElementById('date-usuario');
    if(!inputNombre.checkValidity()) {
      alert('El campo "nombre" debe ser llenado correctamente.');
    return false;
    }
    else if(!inputApellido.checkValidity()) {
        alert('Has olvidado poner tu apellido.');
    return false;
    }
    else if(inputEmail.value=='') {
      alert('El campo mail no es válido.');
   
    }
    else if(!inputDate.checkValidity()) {
        alert('Ingresa una fecha si lo deseas');
    return false;
    }
    onsubmitButton();
return true;
} 