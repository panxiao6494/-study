window.addEventListener('load', function () {
    var arr_l = document.querySelector('.arrow-l');
    var arr_r = document.querySelector('.arrow-r');
    var focus = document.querySelector('.focus');
    var ol = document.querySelector('.circle');
    var ul = document.querySelector('ul')
    //第一步，鼠标移到离开focus，箭头显示隐藏
    focus.addEventListener('mouseover', function () {
        arr_l.style.display = 'block';
        arr_r.style.display = 'block';
        clearInterval(timer);//当鼠标悬停时，清除计时器，停止动画
        timer = null;
    })
    focus.addEventListener('mouseout', function () {
        arr_l.style.display = 'none';
        arr_r.style.display = 'none';
        timer = setInterval(function () {
            //添加手动点击事件
            arr_r.click()
        }, 2000);
    })
    //第三步根据图片个数ul动态生成ol里面的li，小圆点
    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li');
        li.setAttribute('index', i);//给li添加自定义属性
        ol.appendChild(li);
        ol.children[0].className = 'current';
        li.addEventListener('click', function () {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'current';
            //第四部，让图片动起来，调用已经封装好的动画函数
            var index = this.getAttribute('index');//让当前li获得属性值
            num = index;
            circle = index;
            animate(ul, -index * focus.offsetWidth)//移动的对象是ul，移动的目标位置是focus的宽度
        });
    }
    //第五步，点击箭头，让图片跟着动
    var num = 0;//定义让那个ul动起来的变量
    var circle = 0;//定义让ol里面的li动起来变量，两者保持一致
    var first = ul.children[0].cloneNode(true);//克隆节点第一个li放进ul
    ol.children[0].className = 'current';
    ul.appendChild(first);

    var flag = true;//添加节流阀，禁止频繁点击，只有一张播放完后才会播放下一张
    arr_r.addEventListener('click', function () {//右侧箭头
        if (flag) {
            flag = false;
            if (num == ul.children.length - 1) {//num=4时，让ul回到0
                ul.style.left = 0;
                num = 0;
            }

            num++;//点一下，num自加1
            animate(ul, -num * focus.offsetWidth, function () {
                flag = true;
            })

            circle++;//点一下，circle自加1
            if (circle == ul.children.length - 1) {
                circle = 0;
            }
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            ol.children[circle].className = 'current';
        }
    })

    //左侧箭头
    arr_l.addEventListener('click', function () {
        if (flag) {
            flag = false;
            if (num == 0) {//num=0时，让ul回到最后一张
                num = ul.children.length - 1;//num =4
                ul.style.left = -num * focus.offsetWidth + 'px';

            }

            num--;
            animate(ul, -num * focus.offsetWidth, function () {
                flag = true;
            });

            circle--;
            if (circle < 0) {
                circle = ol.children.length - 1;//
            }
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            ol.children[circle].className = 'current';
        }
    });
    //添加自动播放
    var timer = setInterval(function () {
        //添加手动点击事件
        arr_r.click()
    }, 2000);
})


