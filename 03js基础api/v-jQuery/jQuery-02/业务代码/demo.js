//第一步全选状态改变时，所有单选跟着全选状态改变
$(function () {
    $(".checkall").change(function () {
        $(".j-check,.checkall").prop("checked", $(this).prop("checked"));
    });
    //第二步，单选全部选中时，全选被选中
    $(".j-check").change(function () {
        if ($(".j-check:checked").length == $(".j-check").length) {
            $(".checkall").prop("checked", true);
        } else {
            $(".checkall").prop("checked", false);
        }
    });
    //第三步增减数量,根据数量改变单价
    $(".add").click(function () {//阻止a链接的默认行为，javascript:;
        var nu = parseInt($(this).siblings(".itxt").val());
        nu++;
        $(this).siblings(".itxt").val(nu);
        var p = $(this).parent(".num").siblings(".j-prize").text();//注意j-prize的空格和换行，会影响内容
        p = parseFloat(p.substr(1));
        $(this).parent(".num").siblings(".j-sum").html("￥" + (p * nu).toFixed(2));
        getSum();
    });

    $(".reduce").click(function () {
        var nu = parseInt($(this).siblings(".itxt").val());
        if (nu == 1) {
            return false;
        }
        nu--;
        $(this).siblings(".itxt").val(nu);
        var p = $(this).parent(".num").siblings(".j-prize").text();
        p = parseFloat(p.substr(1));
        $(this).parent(".num").siblings(".j-sum").html("￥" + (p * nu).toFixed(2));
        getSum();
    });
    //4 直接改变输入框的数量，改变单价
    $(".itxt").change(function () {
        var nu = parseInt($(this).val());
        var p = $(this).parent(".num").siblings(".j-prize").text();//注意j-prize的空格和换行，会影响内容
        p = parseFloat(p.substr(1));
        $(this).parent(".num").siblings(".j-sum").html("￥" + (p * nu).toFixed(2));
        getSum();
    });
    //5，定义总件数和总价的函数
    getSum();
    function getSum() {
        var sum = 0;//总价
        var count = 0;//总计
        //遍历数量
        $(".itxt").each(function (i, ele) {
            count += parseInt($(ele).val());
        });
        $(".total em").text(count);

        $(".j-sum").each(function (i, ele) {
            sum += parseFloat($(ele).text().substr(1));
        })
        $(".prize-all em").text("￥" + sum.toFixed(2));
    };
    //6 删除 清空的操作
    $(".j-del").click(function () {
        $(this).parents(".item-car").remove();
        getSum()
    });
    $(".remove").click(function () {
        $(".j-check:checked").parents(".item-car").remove();
        getSum()
    });
    $(".clear").click(function () {
        $(".item-car").remove();
        getSum()
    });
    //改变背景颜色
    $(".j-check").change(function () {
        if ($(this).prop("checked")) {
            $(this).parents(".item-car").addClass("current");
        } else {
            $(this).parents(".item-car").removeClass("current")
        }
    })
})