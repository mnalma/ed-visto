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

document.getElementById("validationForm").addEventListener("submit", function(event) {
    var nombreInput = document.getElementById("input-name");
    var apellidoInput = document.getElementById("input-apellido");
    var dateInput = document.getElementById("date-usuario");

    var nombreError = document.getElementById("nombreError");
    var apellidoError = document.getElementById("apellidoError");
    var dateError = document.getElementById("dateError");

    if (!nombreInput.checkValidity()) {
        nombreError.style.display = "block";
        event.preventDefault();
    } else {
        nombreError.style.display = "none";
    }

    if (!apellidoInput.checkValidity()) {
        apellidoError.style.display = "block";
        event.preventDefault();
    } else {
        apellidoError.style.display = "none";
    }
    if (!dateInput.checkValidity()) {
        dateError.style.display = "block";
        event.preventDefault();
    } else {
        dateError.style.display = "none";
    }
    if (nombreInput.checkValidity() && apellidoInput.checkValidity() && dateInput.checkValidity()) {
        onsubmitButton();
}

});

document.getElementById("input-name").addEventListener("input", function() {
    document.getElementById("nombreError").style.display = "none";
});

document.getElementById("input-apellido").addEventListener("input", function() {
    document.getElementById("apellidoError").style.display = "none";
});


// Carga de foto

document.addEventListener('DOMContentLoaded', function () {
    const openModalBtn = document.getElementById('openModalBtn');
    const imageModal = document.getElementById('imageModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const fileInput = document.getElementById('fileInput');
    const previewImage = document.getElementById('previewImage');
    const customButton = document.getElementById('custom-button');
  
    openModalBtn.addEventListener('click', function () {
        imageModal.style.display = 'block';
    });

    customButton.addEventListener('click', () => {
        fileInput.click();
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

    closeModalBtn.addEventListener('click', function () {
        console.log('Button clicked');
        imageModal.style.display = 'none';
    });
});