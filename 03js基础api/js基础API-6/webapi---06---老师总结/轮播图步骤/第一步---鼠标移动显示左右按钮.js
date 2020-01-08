window.addEventListener("load", function() {
  var arrow_l = document.querySelector(".arrow-l");
  var arrow_r = document.querySelector(".arrow-r");
  var focus = document.querySelector(".focus");

  focus.addEventListener("mouseenter", function() {
    arrow_l.style.display = "block";
    arrow_r.style.display = "block";
  });
  focus.addEventListener("mouseleave", function() {
    arrow_l.style.display = "none";
    arrow_r.style.display = "none";
  });
});
