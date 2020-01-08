$(function() {
  // 1.  数据结构的设置   文本 和 勾选 都属于一条数据的属性，所以设置一个对象，保存一套数据
  //     类似于  obj = {title: '做的事情', done: 'true'}  // 这个done 我们定义为 按钮是否勾选上, 汉语就是事件是否完成
  //     然后多条数据 应该是 一种对象数组的格式，  数组有几个元素， 外面的页面就显示几个li

  //  思考书写的 思路  首先是三个事件，  1. 输入框 鼠标回车事件  2. 勾选事件  3. 删除事件

  $("#title").on("keydown", function(e) {
    console.log(e.keyCode);
    if(e.keyCode == 13){
      //  这个程序的麻烦点在于   对于数据的处理上 是在本地存储里面， 不是内存，
      //  所以我们所有操作的数据源都要用本地存储， 进行一些增删改查， 所以 需要一个函数专门来处理本地存储的增删改查
      
      //  一般判断用户输入，将首尾空格去掉， 原生方法 ' a aa '.trim();   jquery方法  $.trim(' a aa ')
      if($("#title").val().trim()){
        var data = localData('get')
        data.unshift({  // push方法也可以
          text: $("#title").val().trim(),
          done: false  // 事件默认都是开启的，没有完成的
        })
        localData('set', data);
        // -----------------------------------------------------bug  $("#title").val() = "";
        $("#title").val("");
      }else{
        // 如果 输入的是空格获取没有输入， 按下回车什么也不做
      }
    }
  });


  // 本地存储的 增删改查
  function localData(type, argc){
    if(type == 'get'){
      if(localStorage.getItem('todolist')){
        // 一定注意， 获取的数据是字符串， 需要字符串解析为对象(数组也是对象)，才能使用，
        return JSON.parse(localStorage.getItem('todolist'))
      }else {
        //  因为要用对数据进行增删改查， 所以必须有返回值，给其他的地方使用
        return []
      }
    }else {
      // 本地存储里面 只能储存字符串，不能存储对象，所以需要转换一下
      localStorage.setItem('todolist', JSON.stringify(argc))
    }
  }
});
