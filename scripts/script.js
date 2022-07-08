document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navUL = document.getElementById("nav-ul");
  const hamburgerChildren = hamburger.children;
  console.log(hamburgerChildren);
  // Triggers the nav list to show on hamburger click
  hamburger.addEventListener("click", () => {
    hamburgerChildren[0].classList.toggle("show-1");
    hamburgerChildren[1].classList.toggle("hide");
    hamburgerChildren[2].classList.toggle("show-2");
    navUL.classList.toggle("show");
  });
});
