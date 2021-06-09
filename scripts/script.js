var burger = document.querySelector(".burger");
var nav = document.querySelector(".header__nav-list");
var btn = document.querySelector(".header__nav-btn");

burger.addEventListener("click", function () {
  burger.classList.toggle("burger--active");
  nav.classList.toggle("header__nav-list--active");
})
