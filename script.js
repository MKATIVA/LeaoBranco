/** @format */

const hamburguerMenu = document.querySelector(".hamburguer-menu");
const menu = document.querySelector(".menu");

hamburguerMenu.addEventListener("click", () => {
  menu.classList.toggle("show");
});
