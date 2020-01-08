window.addEventListener('load', function () {
    var preview_img = document.querySelector('.preview_img');
    var mask = document.querySelector('.mask');
    var big = document.querySelector('.big');

    // 第一步  显示隐藏2个元素
    preview_img.addEventListener('mouseover', function () {
        mask.style.display = 'block';
        big.style.display = 'block';
    })
    preview_img.addEventListener('mouseout', function () {
        mask.style.display = 'none';
        big.style.display = 'none';
    });

    // 第二步  黄色方块跟着鼠标移动
    preview_img.addEventListener('mousemove', function (e) {
        var x = e.pageX - preview_img.offsetLeft;
        var y = e.pageY - preview_img.offsetTop;

        // 第三步， 让黄色遮罩层不能移动出外面的大div, 最小移动和最大移动距离
        var maskX = x - mask.offsetWidth / 2;
        var maskY = y - mask.offsetHeight / 2;
        // maskMax 表示黄色div能够移动的 x轴的 最大距离
        var maskMax = preview_img.offsetWidth - mask.offsetWidth; //400-300
        // maskMaxY 表示黄色div能够移动的 y轴的 最大距离 ,这里是正方形所以可以一样
        var maskMaxY = preview_img.offsetHeight - mask.offsetHeight; //400-300
        // 求x轴能够移动的最大距离

        if (maskX <= 0) {
            maskX = 0;
        } else if (maskX >= maskMax) {
            maskX = maskMax;
        }
        // 求y轴能够移动的最大距离
        if (maskY <= 0) {
            maskY = 0;
        } else if (maskY >= maskMaxY) {
            maskY = maskMaxY;
        }

        mask.style.left = maskX + 'px';
        mask.style.top = maskY + 'px';
        //第四步，让大图片随着透明块移动
        var bigImg = document.querySelector('.big_Img');
        bigImg.style.left = -maskX * 3 + 'px';
        bigImg.style.top = -maskY * 3 + 'px';

    });
});






