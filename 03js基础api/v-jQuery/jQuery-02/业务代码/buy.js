$(function () {
    $(".checkall").change(function () {
        $(".j-check,.checkall").prop("checked", $(this).prop("checked"))
    });

    $(".j-check").change(function () {
        if ($(".j-check:checked").length == $(".j-check").length) {
            $(".checkall").prop("checked", true)
        } else {
            $(".checkall").prop("checked", false)
        }
    });

    $(".add").click(function () {
        var nu = parseInt($(this).siblings(".itxt").val());
        nu++;
        $(this).siblings(".itxt").val(nu);
        var p = $(this).parent(".num").siblings(".j-prize").text();
        p = parseFloat(p.substr(1));
        $(this).parent(".num").siblings(".j-sum").html("￥" + (p * nu).toFixed(2));
        getSum()
    });
    $(".reduce").on("click", function () {
        var nu = parseInt($(this).siblings(".itxt").val());
        if (nu == 1) {
            return false;
        } else {
            nu--;
        }
        $(this).siblings(".itxt").val(nu);
        var p = $(this).parent(".num").siblings(".j-prize").text();
        p = parseFloat(p.substr(1));
        $(this).parent(".num").siblings(".j-sum").html("￥" + (p * nu).toFixed(2));
        getSum()
    });

    $(".itxt").change(function () {
        var nu = parseInt($(this).val());
        var p = $(this).parent(".num").siblings(".j-prize").text();
        p = parseFloat(p.substr(1));
        $(this).parent(".num").siblings(".j-sum").html("￥" + (p * nu).toFixed(2));
        getSum()
    });

    getSum();

    function getSum() {
        var sum = 0;
        var count = 0;
        $(".itxt").each(function (i, ele) {
            count += parseInt($(ele).val());
        });
        $(".total em").text(count);

        $(".j-sum").each(function (i, ele) {
            sum += parseFloat($(ele).text().substr(1));
        })
        $(".prize-all em").text("￥" + sum.toFixed(2));
    };

    $(".j-del").on("click", function () {
        $(this).parents(".item-car").remove();
        getSum()
    });

    $(".remove").on("click", function () {
        $(".j-check:checked").parents(".item-car").remove();
        getSum()
    });

    $(".clear").on("click", function () {
        $(".item-car").remove();
        getSum()
    });

    $(".j-check").change(function () {
        if ($(this).prop("checked")) {
            $(this).parent(".item-car").addClass("current");
        } else {
            $(this).parent(".item-car").removeClass("current");
        }
    })

})