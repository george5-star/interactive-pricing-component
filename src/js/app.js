const toggler = document.querySelector(".toggle");
const toggleIndicator = document.querySelector(".indicator");

toggler.addEventListener("click", () => {
  toggleIndicator.classList.toggle("clicked");
});
