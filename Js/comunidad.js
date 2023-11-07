const abrirPopup = document.getElementById('abrir-popup');
const cerrarPopup = document.getElementById('cerrar-popup');
const popup = document.getElementById('popup');
const publicar = document.getElementById('publicar');
const textoPublicacion = document.getElementById('texto-publicacion');
const imagenPublicacion = document.getElementById('imagen-publicacion');
const contenidoPrincipal = document.getElementById('contenido-principal');

// seccion del pop up
abrirPopup.addEventListener('click', () => {
    popup.style.display = 'block';
});

cerrarPopup.addEventListener('click', () => {
    popup.style.display = 'none';
});

//seccion de publicar
publicar.addEventListener('click', () => {
    const texto = textoPublicacion.value;
    const imagen = imagenPublicacion.files[0];

    //condicion para limitar los caracteres a publicar 
    if (texto.length > 80) {
        alert('El texto no puede superar los 50 caracteres.');
        return;
    }
    //seccion para determinar que hacer con el texto y la imagen a publicar 
    if (texto || imagen) {

        const nuevaPublicacion = document.createElement('section');
        nuevaPublicacion.className = 'publicacion';

        const header = document.createElement('section');
        header.className = 'publicacion-header';


        const imagenPerfil = document.createElement('img');
        imagenPerfil.className = 'minfoto';
        imagenPerfil.src = 'img/perfil.png';

        const nombreUsuario = document.createElement('p');
        nombreUsuario.textContent = 'Nombre de Usuario';
        nombreUsuario.classList.add('titulopubli');

        // definimos que se publicara en el header de la publicacion 
        header.appendChild(imagenPerfil);
        header.appendChild(nombreUsuario);
        nuevaPublicacion.appendChild(header);

        if (texto) {
            const parrafo = document.createElement('p');
            parrafo.className = 'publicacion-texto';
            parrafo.textContent = texto;
            nuevaPublicacion.appendChild(parrafo);
        }

        if (imagen) {
            const imagenElement = document.createElement('img');
            imagenElement.src = URL.createObjectURL(imagen);
            nuevaPublicacion.appendChild(imagenElement);
            imagenElement.classList.add('fotopublicada');
        }

        const opciones = document.createElement('section');
        opciones.className = 'publicacion-opciones';

        const botonMeGusta = document.createElement('button');
        botonMeGusta.className = 'boton-opcion';
        botonMeGusta.textContent = 'Me gusta';

        const botonComentar = document.createElement('button');
        botonComentar.className = 'boton-opcion';
        botonComentar.textContent = 'Comentar';

        const botonCompartir = document.createElement('button');
        botonCompartir.className = 'boton-opcion';
        botonCompartir.textContent = 'Compartir';


        opciones.appendChild(botonMeGusta);
        opciones.appendChild(botonComentar);
        opciones.appendChild(botonCompartir);
        nuevaPublicacion.appendChild(opciones);
        // hace que las publicaciones aparescan de primeras 
        contenidoPrincipal.insertBefore(nuevaPublicacion, contenidoPrincipal.firstChild);
    }

    // Restablecer el formulario
    textoPublicacion.value = '';
    imagenPublicacion.value = '';
    popup.style.display = 'none';
});


