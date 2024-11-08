const btn = document.querySelector(".press-button");

btn.addEventListener("click", () => {
  document.querySelector(".press-div").classList.toggle("hidden");
  document.querySelector(".after-press-div").classList.remove("hidden");
});
