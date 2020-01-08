class Tab {
  constructor(id){
     this.main = document.querySelector(id);
     // 标签栏
     this.lis = document.querySelectorAll('li');
     // 内容区域
     this.sections = this.main.querySelectorAll('section');
     this.init();
  }

  // 初始化相关的操作 封装成一个函数
  init(){
    for(var i=0; i< this.lis.length; i++){
      this.lis[i].index = i;
      this.lis[i].onclick = function(){
        console.log(this)
        console.log(this.index);
      }
    }
  }

  // 1. 切换功能, 就是一个排他算法的思想在里面
  toggleTab(){
    that.clearClass();
    this.className = 'liactive';  // this表示当前点击的这个元素
    that.sections[this.index].className = 'conactive';
  }

  // 清除所有li 和section 的类
  clearClass() {
    for (var i = 0; i < this.lis.length; i++) {
      this.lis[i].className = '';
      this.sections[i].className = '';
    }
  }
  // 2. 添加功能
  addTab(){

  }

  // 3. 删除功能
  removeTab(){

  }

  // 4. 修改功能
  editTab(){

  }
}

new Tab('#tab');