let hamburgerIcon = document.getElementsByClassName('menu')[0];
let menuIcon = document.getElementsByClassName('hamburger')[0];
function myFunction() {
  menuIcon.classList.toggle("crossIcon");
  hamburgerIcon.classList.toggle("open");
}