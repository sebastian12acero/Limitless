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