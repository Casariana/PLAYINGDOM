const botonStyle = document.getElementById('buttonStyles')
const cambiarBgc = document.getElementById('buttonCambiarBgC');
const cambiarText = document.getElementById('buttonCambiarText');
const cambiarRounded = document.getElementById('buttonCambiarRounded');

cambiarBgc.addEventListener('click', function(){
    botonStyle.style.backgroundColor= 'red'
})

cambiarText.addEventListener('click', function(){
    botonStyle.innerText= 'Texto Cambiado'
})

cambiarRounded.addEventListener('click', function(){
    botonStyle.style.borderRadius= '25px'
})

