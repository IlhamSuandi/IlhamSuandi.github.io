const burger = document.querySelector(".burger-wrapper");
const navlinks = document.querySelector(".nav-links");
const links = document.querySelector(".nav-links li");

burger.addEventListener("click", () => {
  navlinks.classList.toggle("open");
});
