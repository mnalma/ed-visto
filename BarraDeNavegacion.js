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