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

// document.getElementById("validationForm").addEventListener("submit", function(event)) {
    var nombre = document.getElementById("input-name");
    var apellido = document.getElementById("input-apellido");
    var nacimiento = document.getElementById("date-usuario");

    var nombreError = document.getElementById("nombreError");
    var apellidoError = document.getElementById("apellidoError");
    var nacimientoError = document.getElementById("nacimientoError");

    const form = document.getElementById("validationForm");

    form.addEventListener('submit', (event)=>{
        event.preventDefault();
        if(!validateEmpty(nombre.value, nombre, nombreError, 'nombre')) return false;
        if(!validateEmpty(apellido.value, apellido, apellidoError, 'apellido')) return false;
        if(!validateEmpty(nacimiento.value, nacimiento, nacimientoError, 'fecha de nacimiento'))return false;

        showSuccess();
        return true;
    });


// validación general de que el campo no este vacio   
   function validateEmpty(valueInput, divInput, divError, nombreInput){
    if(valueInput.length == 0){
        showError(divInput, divError, nombreInput);
        return false;
    }else{
        hideError(divError);
        return true;
    }
   }

   function showError(divInput, divError, nombreInput){
    divError.innerHTML = `<p class= "error">El campo ${nombreInput} debe ser completado </p>`
   }

   function hideError(divError){
    divError.innerHTML = ""
   }

