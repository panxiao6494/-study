window.addEventListener("load", function() {
  var focus = document.querySelector(".focus");
  var ul = focus.children[0];
  // w表示 每张图片的宽度
  var w = focus.offsetWidth;

  // // 2. 定时器自动轮播图片
  // var index = 0;
  // var timer = setInterval(function() {
  //   index++;
  //   var translatex = -index * w;
  //   ul.style.transition = "all .3s";
  //   ul.style.transform = "translateX(" + translatex + "px)"; // css的属性是 "translateX(1px)"
  //   // ul.style.left  移动端不用考虑兼容性， 简单动画能用css就用css实现
  // }, 2000);
});
