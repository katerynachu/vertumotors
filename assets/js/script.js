addEventListener('DOMContentLoaded', (event) => {

// BURGER_MENU
let burgerMenu = document.getElementById('burger-menu');

let overlay = document.getElementById('menu');
let phone = document.querySelector('.call-us');
burgerMenu.addEventListener('click', function() {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
phone.style = 'display: flex';
 

});
});
