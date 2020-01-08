// 第二步， 实现 tab栏的 添加功能
// 先创建， 后添加  (tab栏和section区域都是一样的操作)

var that;
class Tab {
  constructor(id) {
    that = this;
    this.main = document.querySelector(id);
    // 加号 按钮 
    this.add = this.main.querySelector('.tabadd');
    // li的父元素
    this.ul = this.main.querySelector('.fisrstnav ul:first-child');
    // section的父元素
    this.fsection = this.main.querySelector('.tabscon');
    this.init();
  }

  // 初始化相关的操作 封装成一个函数
  //  init 只负责 事件的操作
  init() {
    this.updateNode();
    // 1.
    for (var i = 0; i < this.lis.length; i++) {
      this.lis[i].index = i;
      // this.lis[i].onclick = function () {
      //   console.log(this)
      //   console.log(this.index);
      // }
      this.lis[i].onclick = this.toggleTab;
      this.remove[i].onclick = this.removeTab;
      this.spans[i].ondblclick = this.editTab;
      this.sections[i].ondblclick = this.editTab;
    }

    // 2. 
    this.add.onclick = this.addTab;
  }

  // 因为我们动态添加元素 需要重新获取对应的元素
  // 每次初始化init的时候， 调用一下这个函数， 避免后添加的元素添加不进去事件
  updateNode() {
    // 标签栏
    this.lis = document.querySelectorAll('li');
    // 内容区域
    this.sections = this.main.querySelectorAll('section');
    // 所有的删除按钮
    this.remove = this.main.querySelectorAll('.icon-guanbi');
    // 所有tab栏的文字区域
    this.spans = this.main.querySelectorAll('.fisrstnav li span:first-child');
  }

  // 1. 切换功能
  toggleTab() {

  }

  // 清除所有li 和section 的类
  clearClass() {
    for (var i = 0; i < this.lis.length; i++) {
      this.lis[i].className = '';
      this.sections[i].className = '';
    }
  }
  // 2. 添加功能
  addTab() {
    // 必须先清除所有兄弟的类名， 给当前自己加个类
    that.clearClass();
    var li = '<li class="liactive"><span>新选项卡</span><span class="iconfont icon-guanbi"></span></li>';
    that.ul.insertAdjacentHTML('beforeend', li);

    //  以前的写法
    // var li = document.createElement('li');
    // li.className = 'liactive';
    // li.innerHTML = '<span>新选项卡</span><span class="iconfont icon-guanbi"></span>';
    // that.ul.appendChild(li)
    console.log(that)

    var random = Math.random();
    var section = '<section class="conactive">测试 ' + random + '</section>';
    that.fsection.insertAdjacentHTML('beforeend', section);

    that.init();
  }

  // 3. 删除功能
  removeTab(e) {
    // 阻止冒泡 防止触发li 的切换点击事件
    e.stopPropagation();
    var index = this.parentNode.index;

    // 根据索引号删除对应的li 和section   remove()方法可以直接删除指定的元素
    that.lis[index].remove();
    that.sections[index].remove();
    that.init();
    // 当我们删除的不是选中状态的li 的时候,原来的选中状态li保持不变
    if (document.querySelector('.liactive')) return;
    // 当我们删除了选中状态的这个li 的时候, 让它的前一个li 处于选定状态
    index--;
    // 手动调用我们的点击事件  不需要鼠标触发
    that.lis[index] && that.lis[index].click();
  }

  // 4. 修改功能
  editTab() {
    var str = this.innerHTML;
    // 双击禁止选定文字
    window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
    // alert(11);
    this.innerHTML = '<input type="text" />';
    console.log(this)
    var input = this.children[0];
    input.value = str;
    input.select(); // 文本框里面的文字处于选定状态
    // 当我们离开文本框就把文本框里面的值给span 
    input.onblur = function () {
      this.parentNode.innerHTML = this.value;
    };
    // 按下回车也可以把文本框里面的值给span
    input.onkeyup = function (e) {
      if (e.keyCode === 13) {
        // 手动调用表单失去焦点事件  不需要鼠标离开操作
        this.blur();
      }
    }
  }
}

new Tab('#tab');