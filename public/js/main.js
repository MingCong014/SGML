/* For clicking collapsible menu */
const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);
/* End */

/* Closing Top Banner */
document.querySelector(".banner__close").addEventListener("click", function () {
  this.closest(".banner").style.display = "none";
});

/* Apply page drop-down plan list */
const selected = document.querySelectorAll(".selected");
const optionsContainer = document.querySelectorAll(".options-container");
const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("select-active");
});

optionsList.forEach((o) => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("select-active");
  });
});

/*  
//Not working yet
const transparent = document.querySelector(".transparent");
window.onscroll = function () {
  var top = window.scrollY;
  console.log(top);
  if (top >= 100) {
    nav.classList.add("active")
  } else {
    nav.classList.remove("active");
  }
};

*/
