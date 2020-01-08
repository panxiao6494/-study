$(function () {
    //第一步全选状态改变时，所有单选跟着全选状态改变
    $(".checkall").change(function () {
        console.log($(this).prop("checked"));//全选框状态，true/false
        $(".j-checkbox,.checkall").prop("checked", $(this).prop("checked"));//prop获取属性值
    });
    //第二步，单选全部选中时，全选被选中
    $(".j-checkbox").change(function () {
        console.log($(".j-checkbox:checked").length);//单选被选中的个数
        if ($(".j-checkbox:checked").length == $(".j-checkbox").length) {
            $(".checkall").prop("checked", true)
        } else {
            $(".checkall").prop("checked", false)
        }
    });
    //第三步增减数量,根据数量改变单价
    $(".increment").click(function () {//给加号添加点击事件
        var num = parseInt($(this).siblings(".itxt").val());//当前加号的兄弟的 value+1，不能让其他的+1，所以用this
        num++;
        $(this).siblings(".itxt").val(num);
        var p = $(this).parent().parent().siblings(".p-price").html();//单价，由当前元素寻找父亲的父亲的兄弟
        p = parseFloat(p.substr(1));
        $(this).parent().parent().siblings(".p-sum").text("￥" + (p * num).toFixed(2));//小计，改变文本,保留两位小数
        getSum();
    });
    $(".decrement").click(function () {
        console.log($(".itxt").val());//获取input文本框的value值
        var num = parseInt($(this).siblings(".itxt").val());
        if (num == 1) {//结束，不再减
            return false;
        }
        num--;
        $(this).siblings(".itxt").val(num);
        var p = $(this).parent().parent().siblings(".p-price").html();//单价
        p = parseFloat(p.substr(1));
        $(this).parents(".p-num").siblings(".p-sum").text("￥" + (p * num).toFixed(2));//小计，改变文本
        getSum();
    });
    //4 直接改变输入框的数量，改变单价
    $(".itxt").change(function () {
        var num = parseFloat($(this).val());
        var p = $(this).parents(".p-num").siblings(".p-price").html();//单价，由当前元素寻找父亲的父亲的兄弟
        p = parseFloat(p.substr(1));
        $(this).parent().parent().siblings(".p-sum").text("￥" + (p * num).toFixed(2));//小计，
        getSum();
    });

    //5，定义总数和总价的函数
    function getSum() {
        var count = 0;//总数量
        var money = 0;//总价
        $(".itxt").each(function (i, ele) {
            count += parseInt($(ele).val());
        });
        $(".amount-sum em").text(count);

        $(".p-sum").each(function (i, ele) {
            money += parseFloat($(ele).text().substr(1));
        });
        $(".price-sum em").text("￥" + (money).toFixed(2));
    };
    getSum();//防止刷新清空价格，在外面调用一次
    //6 删除 清空的操作
    $(".p-action a").click(function () {
        $(this).parents(".cart-item").remove();//清空一件商品
        getSum()
    });
    $(".remove-batch").click(function () {
        $(".j-checkbox:checked").parents(".cart-item").remove();
        getSum()
    });
    //清空
    $(".clear-all").click(function () {
        $(".cart-item").remove();
        getSum();
    })
})