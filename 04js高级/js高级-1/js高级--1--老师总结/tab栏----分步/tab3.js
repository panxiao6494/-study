// 第二步， 实现 tab栏的 添加功能
// 先创建， 后添加  (tab栏和section区域都是一样的操作)

var that;
class Tab {
  constructor(id) {
    that = this;
    this.main = document.querySelector(id);
    // 标签栏
    this.lis = document.querySelectorAll('li');
    // 内容区域
    this.sections = this.main.querySelectorAll('section');
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
    // 1.
    for (var i = 0; i < this.lis.length; i++) {
      this.lis[i].index = i;
      this.lis[i].onclick = function () {
        console.log(this)
        console.log(this.index);
      }
    }

    // 2. 
    this.add.onclick = this.addTab;

    this.updateNode();
  }

  // 因为我们动态添加元素 需要重新获取对应的元素
  // 每次初始化init的时候， 调用一下这个函数， 避免后添加的元素添加不进去事件
  updateNode() {
    this.lis = this.main.querySelectorAll('li');
    this.sections = this.main.querySelectorAll('section');
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
  removeTab() {

  }

  // 4. 修改功能
  editTab() {

  }
}

new Tab('#tab');