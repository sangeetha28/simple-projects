const arrowBtn = document.querySelectorAll(".arrow-btn");

arrowBtn.forEach((e) => {
  e.addEventListener("click", () => {
    e.parentElement.classList.toggle("open-box");
    e.nextElementSibling.classList.toggle("hidden-box");
  });
});
