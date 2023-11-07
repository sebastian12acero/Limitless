const button = document.querySelector(".btn-header");
const dropdownMenu = document.querySelector(".dropdown-menu");

let isMenuVisible = false;


button.addEventListener("click", () => {
  if (isMenuVisible) { 
    dropdownMenu.style.display = "none";
    isMenuVisible = false;
  } else {
    dropdownMenu.style.display = "block";
    isMenuVisible = true;
  }
 

});

