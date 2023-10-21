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

    // Crear un elemento <div> para mostrar la publicación
    const publicacion = document.createElement('div');
    publicacion.className = 'publicacion';

    // Agregar el contenido de texto a la publicación
    const parrafo = document.createElement('p');
    parrafo.textContent = texto;
    publicacion.appendChild(parrafo);

    // Verificar si se cargó una imagen
    if (imagenPublicacion.files.length > 0) {
        // Crear una imagen y mostrarla en la publicación
        const imagen = document.createElement('img');
        imagen.src = URL.createObjectURL(imagenPublicacion.files[0]);
        publicacion.appendChild(imagen);
    }

    // Agregar la publicación al contenido principal
    contenidoPrincipal.appendChild(publicacion);

    // Limpiar el área de publicación
    textoPublicacion.value = '';
    imagenPublicacion.value = '';
    areaPublicacion.style.display = 'none';
});