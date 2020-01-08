1. 获取元素

   ```javascript
   //1. 原生
   document.getElementById('元素id')
   document.getElementsByTagName('标签名')
   document.getElementsByClassName('box')
   document.querySelector()
   document.querySelectorAll();
   
   // 父子兄节点
   element.parentNode
   element.children
   
   // 2. jquery获取元素，  主要是选择器的使用
   $('div')   ---> DOM对象，jquery对象 相互转换  $(domDiv) $('.div')[0]
   $('.class')
   $('#id')
   $('ul,li')
   $('ul li')
   $('ul>li')
   $('li:odd')  $('li:even')
   
   // 父子兄元素的获取。  推荐使用方法
   $('li').parent()   // this.parents('.class')
   $('ul').children('li')    ---> $('ul>li')  最近一级  亲儿子
   $('ul').find('li')        ---> $('ul li') 后代选择器，所有的子代
   $('.first').siblins('li') ---> 查找兄弟节点，不包括本身
   $('li').eq(2)             ---> 当前元素里面第几个， 索引号从0开始
   ```

2. 动态创建，添加，删除元素

   ```javascript
   // 1. 原生js
   var li = document.createElement('li'); // 创建元素    
   document.write('<div>123</div>');这种创建方式不推荐  
   ul.innerHTML += '<li></li>'
   var ul = document.querySelector('ul'); //  必须获取父节点
   
   ul.appendChild(li); // 给ul的最后一位添加一个元素， 父子关系   ul.insertBefore(li, ul.children[0])
   ul.removeChild(ul.children[0]); // 删除 节点
   
   // 2. jquery
   var tr = $('<tr></tr>');
   $('tbody').append(tr); // prepend(tr) 前面连个是父子关系；   兄弟关系： after(tr) before(tr)
   var str = '<td></td><td></td>'
   tr.html(str) // 可以使用拼接字符串的方式
   $('tbody').remove(); // 删除自己，   $('tbody').empty()  .html('')  清空里面的子元素
   ```

3. 修改元素的属性，样式，类 和 值

   ```javascript
   // 关注 什么是 可读写
   // 1. 原生js
   dom.src=''; dom.title=''  btn.disabled = true;
   dom.setAttribute('data-index', 1)
   dom.getAttrubute('data-index')
   dom.style.left = '10px'   dom.style.backgroundColor='xx'
   dom.className='box'
   dom.innerHTML  dom.innerText  dom.value
   
   // 2. jquery
   $('选择器').prop('href')  固有的属性值  
   $('选择器').attr('data-index')  自定义属性
   $('选择器').css({width: 300})
   $('选择器').addClass('类名不加点')   removeClass()  toggleClass()
   $('选择器').html(),  text()  val()
   ```

4. 事件

   ```javascript
   // 1. 原生js
   //核心原理    谁(事件源) ----> 怎么做(事件类型) ---->  做什么(事件处理函数)
   dom.onclick = function(e){}  // e 事件对象
   dom.addEventListener('click', function(e){}, true/false)  // 第三个参数不写或者为false，  表示事件冒泡， 原生事件也是冒泡， 只有第三个参数为true才是捕获，一般开发关注冒泡
   dom.removeEventListener('click', fn) // 删除事件
   // 事件委托， 利用子元素冒泡
   ul.addEventListener('click', function (e) {
       //this指向ul
       e.target.style.backgroundColor = 'pink';
   })
   
   
   // 2. jquery事件
   $('选择器').click(function(e){})
   $('选择器').on({'click': function(e){}})   // on绑定事件的3大优势
   $('选择器').off('参数可传可不传')  // 事件解绑
   // 事件委托， 利用第二个参数
   $("ul").on("click", "li", function (e) {
       console.log(e.target, this)
   });
   
   
   // 都有的概念
   // 1. DOM事件的三个阶段
   //捕获阶段  ---->  当前目标阶段  ---- > 冒泡阶段    JS只能执行捕获或者冒泡其中的一个阶段
   // 2. 事件对象
   //  鼠标事件，键盘事件，touch事件，都有事件对象，就是事件处理函数的参数，js引擎自动给我们添加，里面是一些和事件相关的属性和方法
   // 3.常见事件
   1.鼠标： click, mouseover/mouseout, mouseenter/mouseleave, mouseup,mousedown    移动端 touchstar/touchmove/touchend
   2.键盘： keydown  keypress  keyup   键盘事件对象里面 回车keyCode=13, a=97 A=65 0=48
   3.其他事件： load, DOMContentLoaded, resize
   ```

5. 位置相关

   ```javascript
   // 1. 元素js
   offset/client/scroll/pageXOffset 这些都是属性
   
   // 2. jquery  // 下面这些都是方法
   $('div').offset().top/left;
   $('div').position().left/top; 
   $('div').scrollTop(100)
   ```

   

6. 常见概念

   1. 同步异步， 事件循环
   2. BOM,DOM,es5，es6
   3. this值
   4. 事件委托
   5. 原型，原型链，构造函数
   6. 继承 (分为继承属性和继承方法)
   7. call/apply/bind
   8. 闭包
   9. 递归