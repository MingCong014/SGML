const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

document.querySelector(".banner__close").addEventListener("click", function () {
  this.closest(".banner").style.display = "none";
});
