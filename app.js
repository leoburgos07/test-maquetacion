window.onscroll = function () { itemsFloat() };

window.onload = function () { charginItems() }

var navbar = document.getElementById("navbar");
var property_button = document.getElementById("property-button");
var wsp_button = document.getElementById("wsp-button");
var sticky = navbar.offsetTop;
console.log(sticky);

function itemsFloat() {
  console.log(window.pageYOffset );
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky")
    property_button.classList.add("float-button")
    wsp_button.classList.add("float-button")
    wsp_button.classList.remove("d-none");
  } else {
    navbar.classList.remove("sticky");
    property_button.classList.remove("float-button")
    wsp_button.classList.remove("float-button")
    wsp_button.classList.add("d-none");
  }
}

function charginItems(){
  const bannerText = document.getElementById("main-text");
  bannerText.classList.add("showMainText");
}

var firstImage = document.getElementById("first-image");
var secondImage = document.getElementById("second-image");
var thirdImage = document.getElementById("third-image");
var pisos = document.getElementById("pisos");
var chalets = document.getElementById("chalets");
var apartamentos = document.getElementById("apartamentos");

pisos.addEventListener("mouseover", (event) => {
  secondImage.style.display = "none";
  thirdImage.style.display = "none";
  firstImage.style.display = "block";
});

chalets.addEventListener("mouseover", (event) => {
  secondImage.style.display = "block";
  thirdImage.style.display = "none";
  firstImage.style.display = "none";
});

apartamentos.addEventListener("mouseover", (event) => {
  secondImage.style.display = "none";
  thirdImage.style.display = "block";
  firstImage.style.display = "none";
});