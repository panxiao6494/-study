window.addEventListener("load", function() {
  var focus = document.querySelector(".focus");
  var ul = focus.children[0];
  // w表示 每张图片的宽度
  var w = focus.offsetWidth;

  // 表示
  var ol = focus.children[1];
  // 2. 定时器自动轮播图片
  var index = 0;
  var timer = setInterval(function() {
    index++;
    var translatex = -index * w;
    ul.style.transition = "all .3s";
    ul.style.transform = "translateX(" + translatex + "px)"; // css的属性是 "translateX(1px)"
    // ul.style.left  移动端不用考虑兼容性， 简单动画能用css就用css实现
  }, 2000);

  // 第二步  transitionend 监听过渡完成的事件  一个新的事件
  ul.addEventListener("transitionend", function() {
    //  index的值 为 0 1 2 3
    // index == 3 的时候 表示到了最后一张， 这个时候先快速跳转到索引号为0的图片
    if (index >= 3) {
      index = 0;
      // console.log(index);
      // 去掉过渡效果 这样让我们的ul 快速的跳到目标位置
      ul.style.transition = "none";
      // 利用最新的索引号乘以宽度 去滚动图片
      var translatex = -index * w;
      ul.style.transform = "translateX(" + translatex + "px)";
      //  index如果小于零， 直接将它索引号变为2， 快速跳转到2的位置
    } else if (index < 0) {
      index = 2;
      ul.style.transition = "none";
      // 利用最新的索引号乘以宽度 去滚动图片
      var translatex = -index * w;
      ul.style.transform = "translateX(" + translatex + "px)";
    }
    // 3. 小圆点跟随变化
    // 把ol里面li带有current类名的选出来去掉类名 remove
    // 这个比我们之前的排他算法 更简洁一些
    ol.querySelector(".current").classList.remove("current");
    // 让当前索引号 的小li 加上 current   add
    ol.children[index].classList.add("current");
  });
});
