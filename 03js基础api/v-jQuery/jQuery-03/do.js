$(function () {
    load();
    //键盘按下事件 enter=13
    $('#title').on('keydown', function (e) {
        if (e.keyCode === 13) {
            if ($(this).val() == '') {
                alert('输入内容不能为空')
            } else {
                var local = getData(); //获取数据的函数
                console.log(local);
                local.push({
                    title: $(this).val(),
                    done: false
                }); //把表单中的数据放到本地存储
                saveData(local); //保存本地数据的函数
                load();
                $(this).val('')
            }
        }
    });
    //点击a删除操作
    $('ol,ul').on('click', 'a', function () {
        var data = []; //每次操作都是获取，修改，再保存，渲染
        var data = getData();
        var index = $(this).attr('id');
        data.splice(index, 1); //点击a就删除一个数组中的元素
        saveData(data);
        load();
    });
    //正在进行和已完成操作
    $('ol,ul').on('click', 'input', function () {
        var data = getData();
        var index = $(this).siblings('a').attr('id'); //找他兄弟a的索引
        data[index].done = $(this).prop('checked'); //根据input的选中状态来改变done
        saveData(data); //从而实现把已完成的放在下面
        load();
    });
    //获取本地存储的函数
    function getData() {
        var data = localStorage.getItem('todolist');
        if (data !== null) { //不要把null和undefined相比较
            return JSON.parse(data)
        } else {
            return [] //数据为空就返回空数组
        }
    };
    //定义保存本地数据的函数
    function saveData(data) {
        localStorage.setItem('todolist', JSON.stringify(data))
    };

    //根据数据来渲染视图，定义渲染页面的函数,就是根据数据创建ol和ul中的li
    function load() { //渲染函数
        var data = getData(); //获取数据
        $("ol,ul").empty();
        var doneCount = 0;
        var todoCount = 0;

        $.each(data, function (i, n) { //遍历数据,根据数据来渲染页面
            // console.log(n);
            if (n.done) { //true时就放在下面ul
                $("ul").prepend("<li><input type='checkbox' checked='checked' > <p>" + n.title + "</p> <a href='javascript:;' id=" + i + " ></a></li>");
                doneCount++;
            } else { //没有完成就放在上面ol
                $("ol").prepend("<li><input type='checkbox' > <p>" + n.title + "</p> <a href='javascript:;' id=" + i + " ></a></li>");
                todoCount++;
            }

        });
        $("#todocount").text(todoCount);
        $("#donecount").text(doneCount);
    }










})