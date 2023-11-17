//Desplegable perfil
const profileMenuBtn = document.getElementById('profile-menu-button');
const userMenu = document.getElementById('user-menu');

const showHideMenu = () => {
    if(userMenu.classList.contains('hidden')){
        userMenu.classList.remove('hidden');
    } else {
        userMenu.classList.add('hidden');
    }
}

profileMenuBtn.addEventListener('click', showHideMenu);

//Botones Guardar y Cancelar
function onSubmitClick(){
    alert("Formulario guardado con éxito");
}

function onResetClick(){
    alert("Formulario borrado");
}

//Validación formulario
function validarFormulario(){
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



// const botonFeed = document.getElementById('botonFeed')
// const botonBusquedaAnalisis = document.getElementById('botonBusquedaAnalisis')
// const botonCrearColaborar = document.getElementById('botonCrearColaborar')
// const botonNavegacion = document.querySelectorAll('.botonNavegacion')

// botonFeed.addEventListener('click', function(){
//     botonNavegacion.forEach((btn) => {
//         btn.classList.remove('activo');
//     });
//     this.classList.add('activo');

//     console.log('Le diste click al botón Feed');
// })


// botonBusquedaAnalisis.addEventListener('click', function(){
//     botonNavegacion.forEach((btn) => {
//         btn.classList.remove('activo');
//     });
//     this.classList.add('activo');
        
//     console.log('Le diste click al botón búsqueda y análisis');
// })

// botonCrearColaborar.addEventListener('click', function(){
//     botonNavegacion.forEach((btn) => {
//         btn.classList.remove('activo');
//     });
//     this.classList.add('activo');

//     console.log('Le diste click al botón crear y colaborar');
// })