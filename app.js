window.onscroll = function () { myFunction() };
console.log("askjgfasgfkjas")
var navbar = document.getElementById("navbar");
console.log(navbar);
var sticky = navbar.offsetTop;
console.log(sticky);

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}