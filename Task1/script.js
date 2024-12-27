let var1 = document.querySelector(".slider");
let var2 = document.querySelector(".slider-open");
function openNav() {
  var1.classList.add("hide");
  var2.classList.remove("hide");
}

function closeNav() {
  var2.classList.add("hide");
  var1.classList.remove("hide");
}
