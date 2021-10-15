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