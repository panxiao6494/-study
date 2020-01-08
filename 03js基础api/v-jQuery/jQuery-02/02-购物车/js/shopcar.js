//第一步全选状态改变时，所有单选跟着全选状态改变
$(function () {
    $(".checkall").change(function () {
        $(".j-checkbox,checkall").prop("checked", $(this).prop("checked"));
    });
    //第二步，单选全部选中时，全选被选中
    $(".j-checkbox").change(function () {
        if ($(".j-checkbox:checked").length == $(".j-checkbox").length) {
            $(".checkall").prop("checked", true);
        } else {
            $(".checkall").prop("checked", false);
        }
    });
    //第三步增减数量,根据数量改变单价
    $(".increment").click(function () {//根据当前元素寻找兄弟元素，防止页面中其他同类名元素改变
        var num = parseInt($(this).siblings(".itxt").val());//获取
        num++;
        $(this).siblings(".itxt").val(num)//赋值
        var p = $(this).parents(".p-num").siblings(".p-price").html();
        p = parseFloat(p.substr(1));
        $(this).parents(".p-num").siblings(".p-sum").html((p * num).toFixed(2));
        getSum();
    });
    $(".decrement").click(function () {
        var num = parseInt($(this).siblings(".itxt").val());
        if (num == 1) {
            return false;
        }
        num--;
        $(this).siblings(".itxt").val(num)
        var p = $(this).parents(".p-num").siblings(".p-price").html();
        p = parseFloat(p.substr(1));
        $(this).parents(".p-num").siblings(".p-sum").html((p * num).toFixed(2));
        getSum();
    });
    //第四步直接改变输入框的数量，改变单价
    $(".itxt").change(function () {
        var num = $(this).val();
        var p = $(this).parents(".p-num").siblings(".p-price").html();
        p = parseFloat(p.substr(1));
        $(this).parents(".p-num").siblings(".p-sum").html((p * num).toFixed(2));
        getSum();
    });
    getSum()
    //第五步 定义总数和总价的函数，方便调用
    function getSum() {
        var count = 0;//总件数
        var money = 0;//总价
        $(".itxt").each(function (i, ele) {//遍历类名为itxt的元素
            count += parseInt($(ele).val());//表单用val
        })
        $(".amount-sum em").text(count);

        $(".p-sum").each(function (i, ele) {
            money += parseFloat(($(ele).text()).substr(1));//文本用text
        })
        $(".price-sum em").text("￥" + (money).toFixed(2))
    };
    //第六步 删除 清空的操作
    $(".p-action a").click(function () {
        $(this).parents(".cart-item").remove();
        getSum()
    });
    $(".remove-batch").click(function () {
        $(".j-checkbox:checked").parents(".cart-item").remove();//被选中的单选框的父亲，删除
        getSum()
    });
    $(".clear-all").click(function () {
        $(".cart-item").remove();
        getSum()
    });
    //第七步改变背景
    $(".j-checkbox").change(function () {
        if ($(this).prop("checked")) {
            $(this).parents(".cart-item").addClass("check-cart-item");
        } else {
            $(this).parents(".cart-item").removeClass("check-cart-item");
        }
    })
})


