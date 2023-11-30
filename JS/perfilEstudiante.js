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

// document.getElementById("validationForm").addEventListener("submit", function(event) {
    var nombreInput = document.getElementById("input-name");
    var apellidoInput = document.getElementById("input-apellido");
    var dateInput = document.getElementById("date-usuario");

    var nombreError = document.getElementById("nombreError");
    var apellidoError = document.getElementById("apellidoError");
    var dateError = document.getElementById("dateError");

    const submit = document.getElementById("submit");

    submit.addEventListener('click', (event)=>{
        event.preventDefault();
        validateEmpty(nombreInput.value, nombreInput, nombreError);
    });

   function validateEmpty(valueInput, divInput, divError){
    if(valueInput.length == 0){
        showError(divInput, divError);
    }else{
        hideError(divInput, divError);
    }
   }

   function showError(divInput, divError){
    divInput.style.border ='1px solid red';
    divError.innerHTML = 'Olvidaste completarlo';

   }
   function hideError(){
    divInput.style.border ='1px solid red';
    divError.innerHTML = ""
   }

//     if (!nombreInput.checkValidity()) {
//         nombreError.style.display = "block";
//         event.preventDefault();
//     } else {
//         nombreError.style.display = "none";
//     }

//     if (!apellidoInput.checkValidity()) {
//         apellidoError.style.display = "block";
//         event.preventDefault();
//     } else {
//         apellidoError.style.display = "none";
//     }
//     if (!dateInput.checkValidity()) {
//         dateError.style.display = "block";
//         event.preventDefault();
//     } else {
//         dateError.style.display = "none";
//     }
//     if (nombreInput.checkValidity() && apellidoInput.checkValidity() && dateInput.checkValidity()) {
//         onsubmitButton();
// }

// });

// document.getElementById("input-name").addEventListener("input", function() {
//     document.getElementById("nombreError").style.display = "none";
// });

// document.getElementById("input-apellido").addEventListener("input", function() {
//     document.getElementById("apellidoError").style.display = "none";
// });

// function submitForm(){
// var country = document.getElementById("country");
// var dateInput = document.getElementById("date-usuario");
// var dateGrade = document.getElementById("selector-grade");

// const tarjetaContenido = `
//         <p><strong>Nombre:</strong> ${nombreInput}</p>
//         <p><strong>Apellido:</strong> ${apellidoInput}</p>
//         <h2>Estudiante</h2>
//         <p><strong>Fecha de Nacimiento:</strong> ${dateInput}</p>
//         <p><strong>Grado:</strong> ${dateGrade}</p>
//         <p><strong>País:</strong> ${country}</p>
//     `;

//     // Mostrar contenido en la tarjeta
//     document.getElementById('tarjeta').innerHTML = tarjetaContenido;
// 