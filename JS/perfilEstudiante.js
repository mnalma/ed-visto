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
//Boton carga foto de perfil
// const openModalBtn = document.getElementById('openModalBtn');

// function printPantalla() {
//     console.log("Le diste Click al botón");
// }

// openModalBtn.addEventListener('click', printPantalla);

//boton de carga de foto
  const fileInput = document.getElementById('fileInput');
  const customButton = document.getElementById('custom-button');

  customButton.addEventListener('click', () => {
    fileInput.click();
  });

document.addEventListener('DOMContentLoaded', function () {
    const openModalBtn = document.getElementById('openModalBtn');
    const imageModal = document.getElementById('imageModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const fileInput = document.getElementById('fileInput');
    const previewImage = document.getElementById('previewImage');

    openModalBtn.addEventListener('click', function () {
        imageModal.style.display = 'block';
    });

    closeModalBtn.addEventListener('click', function () {
        imageModal.style.display = 'none';
    });

    fileInput.addEventListener('change', function () {
        const file = fileInput.files[0];

        if (file) {
            const reader = new FileReader();

            reader.addEventListener('load', function () {
                previewImage.src = reader.result;
                previewImage.style.display = 'block';
            });

            reader.readAsDataURL(file);
        }
    });
});