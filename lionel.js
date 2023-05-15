const nav = document.querySelector("nav");
window.addEventListener("scroll", function () {
  nav.classList.toggle("sticky", window.scrollY > 40);
});

const burger = document.querySelector(".burger");
const navbar = document.querySelector(".Menu");
const navLinks = document.querySelectorAll(".Menu li");
const navslide = () => {
  burger.addEventListener("click", () => {
    //Toggle nav

    navbar.classList.toggle("nav-active");

    //animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        // link.style.animation = "";
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
    burger.classList.toggle("toggle");
  });
};

const nav_quit = () => {
  navLinks.forEach((link, index) => {
    link.addEventListener("click", () => {
      navbar.classList.toggle("nav-active");
      burger.classList.remove("toggle");
      link.style.animation = "";
    });
  });
  // navLinks.forEach((link, index) => {
  //   link.style.animation = "";
  // });
};
navslide();
nav_quit();
