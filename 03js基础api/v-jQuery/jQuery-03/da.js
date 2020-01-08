
$(function () {
    load();//防止刷新会清空页面，在一开始就调用一次
    $('#title').on("keydown", function (event) {
        if (event.keyCode === 13) {//回车
            if ($(this).val() == '') {
                alert('输入内容不能为空!')
            } else {
                var local = getData();
                console.log(local);
                local.push({ title: $(this).val(), done: false });//表单框中value拿过来
                saveData(local);//调用存储数据的函数和渲染函数
                load();
                $(this).val('')//清空
            }
        }
    });

    //删除操作
    $('ol, ul').on('click', 'a', function () {
        var data = [];
        var data = getData();//获取数据
        var index = $(this).attr("id");
        data.splice(index, 1);//在本地存储删除数组元素
        saveData(data);
        load()
    });
    //把正在进行和已完成操作
    $('ol, ul').on('click', 'input', function () {
        var data = getData();
        var index = $(this).siblings('a').attr("id");
        data[index].done = $(this).prop("checked");
        saveData(data);
        load()
    })
    //获取本地存储的函数
    function getData() {
        var data = localStorage.getItem('todolist');
        if (data !== null) {//不要把null和undefined相比较
            return JSON.parse(data)
        } else {
            return []//数据为空就返回空数组
        }
    };
    //保存本地存储
    function saveData(data) {
        localStorage.setItem('todolist', JSON.stringify(data))
    }


    function load() {//渲染函数
        var data = getData();//获取数据
        $("ol, ul").empty();
        var doneCount = 0;
        var todoCount = 0;

        $.each(data, function (i, n) {//遍历数据,根据数据来渲染页面
            // console.log(n);
            if (n.done) {//true时就放在下面ul
                $("ul").prepend("<li><input type='checkbox' checked='checked' > <p>" + n.title + "</p> <a href='javascript:;' id=" + i + " ></a></li>");
                doneCount++;
            } else {
                $("ol").prepend("<li><input type='checkbox' > <p>" + n.title + "</p> <a href='javascript:;' id=" + i + " ></a></li>");
                todoCount++;
            }

        });
        $("#todocount").text(todoCount);
        $("#donecount").text(doneCount);

    }

})
