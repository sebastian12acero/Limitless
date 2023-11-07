const openDAN = document.querySelector('#openCarritoDAN');
const modal_containerDAN = document.querySelector('#modal_container_DAN');
const closeOutsideDAN = document.querySelector('#modal_container_DAN');
const mainDAN = document.querySelector('#mainDAN')

openDAN.addEventListener('click', () => {
  modal_containerDAN.classList.add('show');  
  mainDAN.classList.add('show1');  
  console.log("funciono")
});


closeOutsideDAN.addEventListener('click', (e) => {
    if (e.target === modal_container_DAN){ 
        modal_containerDAN.classList.remove('show');
        mainDAN.classList.remove('show1');  
       }    
  });
  

/*---------------------------------------------*/ 

