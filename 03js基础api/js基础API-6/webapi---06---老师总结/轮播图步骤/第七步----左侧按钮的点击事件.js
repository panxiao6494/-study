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

      // 第七步 两个bug的解决
      // 当我们点击了某个小li 就要把这个li 的索引号给 num
      num = index;
      // 当我们点击了某个小li 就要把这个li 的索引号给 circle
      circle = index;
      animate(ul, -index * focusWidth);
    });
  }
  // 开始的时候默认选中第一个小圆圈
  ol.children[0].className = "current";

  // 程序来动态创建一个 li， 添加ul的最后面
  // 克隆第一张图片(li)放到ul 最后面
  var first = ul.children[0].cloneNode(true);
  ul.appendChild(first);
  // 第五步， 点击右侧按钮滚动图片
  //点击右侧按钮， 图片滚动一张
  var num = 0; // 这个变量含义是 当前是第几张图片
  // circle 控制小圆圈当前的位置， 初始位置为0
  var circle = 0;

  arrow_r.addEventListener("click", function() {
    // 滚动到最后一张图片的时候，让整个图片直接滚回到left为0的位置，并重置num为0
    if (num == ul.children.length - 1) {
      ul.style.left = 0;
      // 注意,这里没有使用动画的移动,而是直接利用css的属性left,直接显示到left=0的位置
      num = 0;
    }
    // 右边点击一下， 图片向右边移动一个图片的距离，并且num+1
    // 这里滑到最后那个复制的第一张时，num已经等于0了，注意下面是先num++, 然后再移动，
    // 所以是从最后一张直接跳到第二张， 因为 -1*focusWidth 是它的终止位置
    num++;
    // 下面的函数表示让 图片动起来
    animate(ul, -num * focusWidth);

    circle++;
    if (circle == ul.children.length - 1) {
      circle = 0;
    }
    for (var i = 0; i < ol.children.length; i++) {
      ol.children[i].className = "";
    }
    // 让当前的小圆圈添加一个类
    ol.children[circle].className = "current";
  });

  // 第七步-- 左侧按钮的事件
  // 9. 左侧按钮做法
  arrow_l.addEventListener("click", function() {
    // 判断，如果当前图片时第0张的时候
    if (num == 0) {
      // 现在这里包括克隆的一共有 5张图片， 最后一张图片的索引为4
      console.log(ul.children.length - 1);
      num = ul.children.length - 1;
      // 这里是直接将left值 往右边移动4个图片的位置，刚好到第五张复制的图片哪里
      ul.style.left = -num * focusWidth + "px";
    }
    // 先在是 num = 4;  num--  这个时候就是利用动画将 图片从第5张移动到底4张，最后一张
    num--;
    // 第二次移动，相当于这里点击了一次按钮，如果是第一张图片，就移动了2次，第一次没有使用动画
    animate(ul, -num * focusWidth);

    // 点击左侧按钮，小圆圈跟随一起变化 可以再声明一个变量控制小圆圈的播放
    circle--;
    // 如果circle < 0  说明第一张图片，则小圆圈要改为第4个小圆圈（3）
    if (circle < 0) {
      circle = ol.children.length - 1;
    }
  });
});
