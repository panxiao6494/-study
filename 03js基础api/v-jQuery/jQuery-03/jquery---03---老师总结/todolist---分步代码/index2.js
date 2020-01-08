$(function() {
  // 在页面开始的时候 就要根据 本地存储(以后是远程服务器)的数据 进行页面的渲染
  render();

  // 1. 键盘回车事件
  $("#title").on("keydown", function(e) {
    if(e.keyCode == 13){
      if($("#title").val().trim()){
        var data = localData('get')
        data.unshift({
          text: $("#title").val().trim(),
          done: false
        })
        localData('set', data);
        $("#title").val("");

        // 数据处理完毕后， 渲染页面
        render();
      }
    }
  });

  function localData(type, argc){
    if(type == 'get'){
      if(localStorage.getItem('todolist')){
        return JSON.parse(localStorage.getItem('todolist'))
      }else {
        return []
      }
    }else {
      localStorage.setItem('todolist', JSON.stringify(argc))
    }
  }

  // 2. 将本地数据 渲染到页面上， 说白了就是 动态创建元素， 封装成一个函数，
  //    数据一发生改变，就调用这个函数，页面再动态的创建一遍
  function render(){
    var data = localData('get');

    var todolist = '';
    var todolistCount = 0;
    $.each(data, function(index, item){
      // 先写个基本的字符串骨架， 然后再用变量去替换里面的固定值
      // todolist += '<li><input type="checkbox"><p>文字</p><a href="javascript:;"></a></li>';
      todolist += '<li><input type="checkbox"><p>'+item.text+'</p><a href="javascript:;"></a></li>';
      todolistCount++;
    })
    $('#todolist').html(todolist);
    $('#todocount').html(todolistCount);
  }
});
