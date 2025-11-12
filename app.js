let btn = document.getElementById("hamburger");
let menu = document.getElementById("navLinks");

btn.addEventListener("click", function () {
  menu.classList.toggle("active");
});