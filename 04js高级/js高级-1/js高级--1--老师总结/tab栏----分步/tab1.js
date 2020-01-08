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

  // 1. 切换功能
  toggleTab(){

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