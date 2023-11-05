// Captura el botón y el menú
const button = document.querySelector(".btn-custom");
const dropdownMenu = document.querySelector(".contenedorlista ul");

// Variable para controlar el estado del menú
let isMenuVisible = false;

// Agregar un evento de clic al botón
button.addEventListener("click", () => {
  if (isMenuVisible) {
    // Si el menú está visible, ocultarlo
    dropdownMenu.style.display = "none";
    isMenuVisible = false;
  } else {
    // Si el menú no está visible, mostrarlo
    dropdownMenu.style.display = "block";
    isMenuVisible = true;
  }
});

// Agregar un evento de redimensionamiento de ventana para ocultar el menú en una cierta anchura
window.addEventListener("resize", () => {
  if (window.innerWidth <= 768) { // Ajusta el valor según tus necesidades
    dropdownMenu.style.display = "none";
    isMenuVisible = false;
  }
});
