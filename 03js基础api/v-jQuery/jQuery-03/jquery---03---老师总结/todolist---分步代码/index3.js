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

  // 本地数据的设置和获取
  function localData(type, argc){
    if(type == 'get'){
      if(localStorage.getItem('todolist')){
        return JSON.parse(localStorage.getItem('todolist'))
      }else {
        return []
      }
    }else if(type == 'set'){
      localStorage.setItem('todolist', JSON.stringify(argc))
    }
  }

  // 2. 数据渲染
  function render(){
    var data = localData('get');

    var todolist = '';
    var todolistCount = 0;
    $.each(data, function(index, item){
      todolist += '<li><input type="checkbox"><p>'+item.text+'</p><a href="javascript:;" data-index='+ index +'></a></li>';
      todolistCount++;
    })
    $('#todolist').html(todolist);
    $('#todocount').html(todolistCount);
  }

  // 3. 删除事件， 本质上也是删除 data里面的数据，然后根据数据去动态的渲染页面
  //    这个  根据数据来驱动视图的  理念大家一定要重视， 是一些常见 MVVM 库的基础

  // 写到这里要注意  我们要获取a元素， 删除对应的 小li， 我们的li都是从data数组里面 动态渲染出来的，索引号有规律
  // 我们应该去修改前面的 渲染页面函数，  给每个a加上一个自定义属性(数组里面的索引号)
  
  //--------------------------------------------------------------------------------bug  $('a').click()
  // 动态创建的元素 只能用on 方法绑定事件; 并且优化程序，使用一下事件委托
  $('ol').on('click', 'a', function(e){
    // 一定时刻注意， 删除的是数据， 数据发生了改变，页面就会发生改变， 数据驱动视图的理念
    var data = localData('get');
    console.log(e.target, this)  // e.tartget  this 都表示当前点击的a元素，  是DOM对象， 不是jQuery对象
    var index = $(this).attr('data-index');  // $(e.target).attr('data-index');  也可以
    
    data.splice(index,1); 
    //--------------------------------------------------------------------------------bug   删除之后直接渲染
    //  必须将数据 存到我们的的本地存储里面， 再渲染， 因为渲染时用的数据是 本地存储里面的
    localData('set', data);
    render();
  })
});
