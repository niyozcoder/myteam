var burger = document.querySelector(".burger");
var body = document.querySelector(".body");
var nav = document.querySelector(".header__nav");

burger.addEventListener("click", function () {
  burger.classList.toggle("burger--active");
  nav.classList.toggle("header__nav--active");
  body.classList.toggle("body--active");
})
