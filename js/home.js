let items = document.querySelectorAll(".item");
let logo = document.querySelector("header nav .logo img");
let dropDownMenu = document.querySelector(".dropdown-menu");
let menuIcon = document.querySelector(".hamburger-menu-icon");
let loginBtn = document.querySelector(".login-btn");
let loginPopup = document.querySelector(".login-popup");
let closePopup = document.querySelector(".close-popup");

// Slider
let slideIndex = 1;
function setSlide(slideId, index) {
  slideIndex = index;
  items.forEach((elem) => {
    elem.classList.remove("active");
  });
  let item = document.querySelector(`#${slideId}`);
  item.classList.add("active");
}

setInterval(function () {
  slideIndex++;
  if (slideIndex === 5) {
    slideIndex = 1;
  }
  setSlide(`slide${slideIndex}`, slideIndex);
}, 8000);

// Scroll Nav
document.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop > 0) {
    logo.style.width = "110px";
  } else {
    logo.style.width = "130px";
  }
});

// Menu in small width
menuIcon.addEventListener("click", function () {
  dropDownMenu.classList.toggle("active");
});

// Log in btn
loginBtn.addEventListener("click", function (e) {
  e.preventDefault();
  loginPopup.classList.add("active");
  document.body.style.filter = "";
});

closePopup.addEventListener("click", function () {
  loginPopup.classList.remove("active");
});
