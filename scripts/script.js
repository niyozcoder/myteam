var burger = document.querySelector(".burger");
var nav = document.querySelector(".header__nav");

burger.addEventListener("click", function () {
  burger.classList.toggle("burger--active");
  nav.classList.toggle("header__nav--active");
})
