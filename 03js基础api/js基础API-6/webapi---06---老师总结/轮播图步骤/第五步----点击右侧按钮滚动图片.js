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
  // 开始的时候默认选中第一个小圆圈
  ol.children[0].className = "current";

  // 程序来动态创建一个 li， 添加ul的最后面
  // 克隆第一张图片(li)放到ul 最后面
  var first = ul.children[0].cloneNode(true);
  ul.appendChild(first);
  // 第五步， 点击右侧按钮滚动图片
  //点击右侧按钮， 图片滚动一张
  var num = 0; // 这个变量含义是 当前是第几张图片

  arrow_r.addEventListener("click", function() {
    // 滚动到最后一张图片的时候，让整个图片直接滚回到left为0的位置，并重置num为0
    // ul.children.length这个长度为5， 最大的索引为4
    if (num == ul.children.length - 1) {
      ul.style.left = 0;
      // 注意,这里没有使用动画的移动,而是直接利用css的属性left,直接显示到left=0的位置
      num = 0;
    }
    // 上面执行完毕之后， num=0; 这个时候当前图片的位置在第5张，克隆的那个图片位置
    // 右边点击一下， 图片向右边移动一个图片的距离，并且num+1
    // 这里滑到最后那个复制的第一张时，num已经等于0了，注意下面是先num++, 然后再移动，
    // 所以是从最后一张直接跳到第二张， 因为 -1*focusWidth 是它的终止位置
    num++; //这一步之后 num=1; 下面又有一个动画让图片再移动一次，移动距离为一个图片的位置
    // 下面的函数表示让 图片动起来
    // 第二次移动，相当于这里点击了一次按钮，如果是最后一张图片，就移动了2次，第一次没有使用动画
    animate(ul, -num * focusWidth);
  });
});
