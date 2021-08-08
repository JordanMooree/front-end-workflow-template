document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navUL = document.getElementById("nav-ul");

  // Triggers the nav list to show on hamburger click
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    navUL.classList.toggle("show");
  });
});
