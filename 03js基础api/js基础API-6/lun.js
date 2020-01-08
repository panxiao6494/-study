window.addEventListener('load', function () {
    var arr_l = document.querySelector('.arrow-l');
    var arr_r = document.querySelector(".arrow-r");
    var focus = document.querySelector('.focus');
    var ol = this.document.querySelector('.circle');
    var ul = this.document.querySelector('ul');


    focus.addEventListener('mouseover', function () {
        arr_l.style.display = 'block';
        arr_r.style.display = 'block';
        clearInterval(timer);
        timer = null;
    });

    focus.addEventListener('mouseout', function () {
        arr_l.style.display = 'none';
        arr_r.style.display = 'none';
        timer = setInterval(function () {
            arr_r.click();
        }, 2000)
    });

    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li');
        li.setAttribute('index', i);
        ol.appendChild(li);
        li.addEventListener('click', function () {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'current';
            var index = this.getAttribute('index');
            num = index;
            circle = index;

            animate(ul, -index * focus.offsetWidth);
        });


    }

    var num = 0;
    var circle = 0;
    var first = ul.children[0].cloneNode(true);
    ol.children[0].className = 'current';
    ul.appendChild(first);

    var flag = true;

    arr_r.addEventListener('click', function () {
        if (flag) {
            flag = false;

            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, -num * focus.offsetWidth, function () {
                flag = true;
            })

            circle++;

            if (circle == ul.children.length + 1) {
                circle = 0;

            }
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            ol.children[circle].className = 'current';
        }
    })

    arr_l.addEventListener('click', function () {
        if (flag) {
            flag = false;
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = -num * focus.offsetWidth + 'px';
            }

            num--;
            animate(ul, -num * focus.offsetWidth, function () {
                flag = true;
            });
            circle--;
            if (circle < 0) {
                circle = ol.children.length - 1;

            }
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            ol.children[circle].className = 'current';
        }
    })
    var timer = setInterval(function () {
        arr_r.click();
    }, 2000)

})