$(function() {
  // 在页面开始的时候 就要根据 本地存储(以后是远程服务器)的数据 进行页面的渲染
  render();

  // 1. 键盘回车事件
  $("#title").on("keydown", function(e) {
    if (e.keyCode == 13) {
      if (
        $("#title")
          .val()
          .trim()
      ) {
        var data = localData("get");
        data.unshift({
          text: $("#title")
            .val()
            .trim(),
          done: false
        });
        localData("set", data);
        $("#title").val("");

        // 数据处理完毕后， 渲染页面
        render();
      }
    }
  });

  // 本地数据的设置和获取
  function localData(type, argc) {
    if (type == "set") {
      localStorage.setItem("todolist", JSON.stringify(argc));
    } else {
      if (localStorage.getItem("todolist")) {
        return JSON.parse(localStorage.getItem("todolist"));
      } else {
        return [];
      }
    }
  }

  // 2. 数据渲染
  function render() {
    var data = localData("get");

    var todolist = "";
    var todolistCount = 0;
    var donelist = "";
    var donelistCount = 0;
    $.each(data, function(index, item) {
      if(item.done){
        donelist +='<li><input type="checkbox" checked="checked"><p>' + item.text + '</p><a href="javascript:;" data-index=' + index + "></a></li>";
        donelistCount++;
      }else {
        todolist +='<li><input type="checkbox"><p>' + item.text + '</p><a href="javascript:;" data-index=' + index + "></a></li>";
        todolistCount++;
      }
    });
    $("#todolist").html(todolist);
    $("#todocount").html(todolistCount);
    
    $("#donelist").html(donelist);
    $("#donecount").html(donelistCount);
  }

  // 3. 删除事件 , ol, ul 里面的a都要添加事件
  $("ol, ul").on("click", "a", function(e) {
    var data = localData("get");
    console.log(e.target, this);
    var index = $(this).attr("data-index");

    data.splice(index, 1);
    localData("set", data);
    render();
  });

  // 4. 勾选事件,  ol ,ul 里面都有input输入框， 隐式迭代，循环绑定，链式编程, 自定义属性 等等这个概念不要忘记
  $("ol,ul").on("click", "input", function(e) {
    var data = localData("get");
    // 获取当前 这一行的id， a的自定义属性上有
    var index = $(this).siblings("a").attr("data-index");
    data[index].done = $(this).prop('checked');

    localData('set', data);
    //  因為已完成和未完成的显示地方不一样， 也就是说应该讲渲染函数更改一下，
    //  根据done 属性的true/false 值 动态的改变 数据渲染的位置
    render();
  });
});
