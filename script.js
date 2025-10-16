// Botón para cambiar el color de fondo
const btnColor = document.getElementById('btnColor');
const colores = ['#f4f4f4', '#e3f2fd', '#fce4ec', '#e8f5e9', '#fff3e0'];
let indice = 0;

btnColor.addEventListener('click', () => {
    indice = (indice + 1) % colores.length;
    document.body.style.backgroundColor = colores[indice];
});

// Función para "enviar" el formulario
const formulario = document.getElementById('formulario');
const mensajeExito = document.getElementById('mensajeExito');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (nombre && correo && mensaje) {
        mensajeExito.classList.remove('oculto');
        formulario.reset();
        setTimeout(() => {
            mensajeExito.classList.add('oculto');
        }, 4000);
    } else {
        alert('Por favor, completa todos los campos.');
    }
});
