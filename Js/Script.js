const boton0 = document.getElementById("registrouno");
const boton1 = document.getElementById("btnregreso");
const contenido0 = document.getElementById("contenido0");
const contenido1 = document.getElementById("contenido1");
contenido0.style.display = "block";
contenido1.style.display = "none";

boton0.addEventListener("click", function () {
    contenido0.style.display = "none";
    contenido1.style.display = "flex";

});

boton1.addEventListener("click", function () {
    contenido0.style.display = "block";
    contenido1.style.display = "none";

});


const abrirPublicacion = document.getElementById('abrir-publicacion');
const areaPublicacion = document.getElementById('area-publicacion');
const textoPublicacion = document.getElementById('texto-publicacion');
const imagenPublicacion = document.getElementById('imagen-publicacion');
const publicar = document.getElementById('publicar');
const contenidoPrincipal = document.getElementById('contenido-principal');

abrirPublicacion.addEventListener('click', () => {
    areaPublicacion.style.display = 'block';
});

publicar.addEventListener('click', () => {
    // Obtener el texto de la publicación
    const texto = textoPublicacion.value;

    // Crear un elemento <p> para mostrar el texto
    const parrafo = document.createElement('p');
    parrafo.textContent = texto;

    // Verificar si se cargó una imagen
    if (imagenPublicacion.files.length > 0) {
        // Crear una imagen y mostrarla
        const imagen = document.createElement('img');
        imagen.src = URL.createObjectURL(imagenPublicacion.files[0]);
        imagen.style.maxWidth = '100%';
        contenidoPrincipal.appendChild(imagen);
    }

    // Agregar el elemento <p> al contenido principal
    contenidoPrincipal.appendChild(parrafo);

    // Limpiar el área de publicación
    textoPublicacion.value = '';
    imagenPublicacion.value = '';
    areaPublicacion.style.display = 'none';
});