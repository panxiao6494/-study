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

  // 第三步， 手指拖动 让图片移动
  // 触摸元素 touchstart： 获取手指初始坐标, 这个必须要两个事件才能的得到， 一个touchstart，一个touchmove事件
  var startX = 0;
  // moveX表示手指移动的距离
  var moveX = 0; // 后面我们会使用这个移动距离所以要定义一个全局变量

  ul.addEventListener("touchstart", function(e) {
    startX = e.targetTouches[0].pageX;
    flag = false;
    // 手指触摸的时候就停止定时器， 不然拖动图片的时候就会冲突，
    clearInterval(timer);
  });
  // 移动手指 touchmove： 计算手指的滑动距离， 并且移动盒子
  ul.addEventListener("touchmove", function(e) {
    // 移动距离
    moveX = e.targetTouches[0].pageX - startX;
    // 移动盒子：  盒子原来的位置 + 手指移动的距离(这个距离就是鼠标移动的距离)
    var translatex = -index * w + moveX;
    // 手指拖动的时候，不需要动画效果所以要取消过渡效果
    ul.style.transition = "none";
    ul.style.transform = "translateX(" + translatex + "px)";
    flag = true; // 如果用户手指移动过我们再去判断否则不做判断效果
    e.preventDefault(); // 阻止滚动屏幕的行为
  });

  // 这个值表示用户是否滑动， 只有滑动之后才执行touchend里面的函数
  var flag = false; // 当用户移动之后 在touchmove事件里面将这个值 改为true
  // 第四步， 当图片移动结束后来判断，当前图片移动的距离 和我们回弹的距离进行比较，来判断该显示上一张还是下一张还是不动
  ul.addEventListener("touchend", function(e) {
    // 一定要用绝对值，左右移动的时候 都表示移动的距离
    // 如果移动距离大于50像素我们就播放上一张或者下一张
    if (flag) {
      if (Math.abs(moveX) > 50) {
        // 如果是右滑就是 播放上一张 moveX 是正值  就是 鼠标的 新值-旧值
        if (moveX > 0) {
          index--;
        } else {
          // 如果是左滑就是 播放下一张 moveX 是负值
          index++;
        }
        var translatex = -index * w; // 这个就是当前我们图片需要移动的距离
        ul.style.transition = "all .3s"; // 相当于有一个回调函数， 因为这个是动画结束后触发一个transitionend事件
        ul.style.transform = "translateX(" + translatex + "px)";
      } else {
        // (2) 如果移动距离小于50像素我们就回弹
        var translatex = -index * w;
        ul.style.transition = "all .1s";
        ul.style.transform = "translateX(" + translatex + "px)";
      }
    }
    // 手指离开的时候就重新开启定时器
    //  开始之前一定要清除，严格控制当前页面同时只有一个定时器的存在
    clearInterval(timer);
    timer = setInterval(function() {
      index++;
      var translatex = -index * w;
      ul.style.transition = "all .3s";
      ul.style.transform = "translateX(" + translatex + "px)";
    }, 2000);
  });
});
