window.addEventListener('load', function () {
    var focus = document.querySelector('.focus');
    var ul = focus.children[0];
    var w = focus.offsetWidth;//定义变量等于焦点图的宽度
    //第一步，设置自动播放定时器加translate
    var index = 0;//图片的索引号，0,1,2,3
    var timer = setInterval(function () {
        index++;
        var translatex = -index * w;
        ul.style.transition = 'all .3s';
        ul.style.transform = "translateX(" + translatex + "px)"; //translateX(1px)
    }, 2000);

    //每次过渡结束，都往回播放
    ul.addEventListener('transitionend', function () {//过渡结束事件
        if (index >= 3) {//到了最后一张
            index = 0;
            ul.style.transition = 'none';//先去掉过渡效果，再快速回到第一张，这个过程很快
            var translatex = -index * w;
            ul.style.transform = "translateX(" + translatex + "px)";
        } else if (index < 0) {
            index = 2;
            ul.style.transition = 'none';//先去掉过渡效果，再快速回到第一张，这个过程很快
            var translatex = -index * w;
            ul.style.transform = "translateX(" + translatex + "px)";
        }
    })
})