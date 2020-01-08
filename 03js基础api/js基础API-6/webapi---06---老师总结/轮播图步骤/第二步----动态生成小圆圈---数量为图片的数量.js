window.addEventListener("load", function() {
  // 第一步
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

  // 第二步
  // 动态创建小圆圈
  var ul = focus.querySelector("ul"); // 为了获取图片的数量
  var ol = focus.querySelector(".circle"); // 小圆圈的父亲

  for (var i = 0; i < ul.children.length; i++) {
    var li = document.createElement("li");
    ol.appendChild(li);
  }
});
