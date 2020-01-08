window.addEventListener("load", function() {
  // 第一步
  var arrow_l = document.querySelector(".arrow-l");
  var arrow_r = document.querySelector(".arrow-r");
  var focus = document.querySelector(".focus");

  // 第四步添加， 需要用到图片的宽度，
  // 每步骤 图片移动的 距离都是 这个值的整数倍
  var focusWidth = focus.offsetWidth;

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

  // 小圆圈的处理逻辑
  for (var i = 0; i < ul.children.length; i++) {
    var li = document.createElement("li");
    // 记录当前小圆圈的索引号 通过自定义属性来做  --- 第四步添加， 需要自定义属性
    li.setAttribute("index", i);
    ol.appendChild(li);

    // 第三步  小圆圈添加点击事件，排他思想
    li.addEventListener("click", function() {
      for (var i = 0; i < ol.children.length; i++) {
        ol.children[i].className = "";
      }
      this.className = "current";

      // 第四步，  让图片滚动起来
      var index = this.getAttribute("index");
      animate(ul, -index * focusWidth);
    });
  }
});
