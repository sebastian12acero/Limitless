const boton0 = document.getElementById("boton0");
const boton1 = document.getElementById("boton1");

const contenido1 = document.getElementById("contenido1");
const contenido2 = document.getElementById("contenido2");
const contenido3 = document.getElementById("contenido3");
const contenido4 = document.getElementById("contenido4");
const contenido5 = document.getElementById("contenido5");

contenido1.style.display = "flex";
contenido2.style.display = "flex";
contenido3.style.display = "none";
contenido4.style.display = "none";
contenido5.style.display = "none";



boton0.addEventListener("click", function () {

    contenido1.style.display = "none";
    contenido2.style.display = "none";
    contenido3.style.display = "flex";
    contenido4.style.display = "flex";
    contenido5.style.display = "none";

});


boton1.addEventListener("click", function () {

    contenido1.style.display = "flex";
    contenido2.style.display = "flex";
    contenido3.style.display = "none";
    contenido4.style.display = "none";
    contenido5.style.display = "none";


});

