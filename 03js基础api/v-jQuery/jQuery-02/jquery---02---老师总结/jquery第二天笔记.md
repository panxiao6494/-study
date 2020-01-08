#### jQuery属性操作

1. 三种方式 prop,attr,data

2. prop 一般在表单元素的 属性操作里面使用   如disabled / checked / selected

3. attr  一般用在自定义元素的操作   类似原生的get/setAttribute()

4. 它们都是可读写的属性， 根据参数个数的不同，含义不同

   ```javascript
   // 都是可读写属性
   // prop使用场景
   $("a").prop("href")
   $(this).prop("checked")
   
   // attr属性
   $("div").attr("index")
   $("div").attr("data-index", 5)
   
   // data属性
   $("span").data("uname", "andy");
   $("span").data("uname")
   
   // 原生js
   dom对象.setAttribute('index', 0);
   dom对象.getAttribute('index');
   ```

   

#### jQuery文本属性值

1. 三种方法 html,text,val  都是可读写的， 类比着原生的三种方式来学习，时刻记住jquery是一个库，封装了我们的原生js

   ```javascript
   $("div").html()
   $("div").html('可识别<br>html的标签')
   
   $("div").text()
   $("div").text('不能识别<br>html的标签')
   
   // 表单元素要用单独的 方法
   $("input").val()
   $("input").val('123')
   
   // 元素的方法复习
   var divDom = document.querySelector('div');
   divDom.innerHTML = 'XXX';
   divDom.innerText = 'xxx';
   divDom.value = "xxx";
   ```

   

#### jQuery元素操作

1. 返回祖先元素

   ```javascript
   // parent 没有加s  表示返回第一个父亲，亲爸爸
   $(".current").parent().parent().parent();
   
   // 返回所有的父亲， 祖先都会遍历出来
   $(".four").parents()
   // 返回类名 含有one的祖先
   $(".four").parents(".one")
   ```

2. 遍历元素 each(),  $.each() 两种方法

   ```javascript
   //  不要去强行记忆这个两个方法， 仅仅在jquery里面使用，后面会学习一个forEach，和这个很像，但参数不一样，很容易弄错
   // each() 方法遍历元素 , 
   var arr = ["red", "green", "blue"];
   var obj = {name:'aa', age: 12}
   $("div").each(function (index, item) {
       console.log('each: ', index, item)
   })
   
   $.each(arr, function (index, item) {
       console.log('$.each: ', index, item);
   })
   
   // 注意 这两种形式获取的 item 也就是 遍历的每一步获取的 元素是 DOM对象， 不能使用jQuery的方法， 想使用必须DOM对象转jQuery对象 $(item)
   ```

3. 创建、添加、删除 元素

   ```javascript
   //1. jquery方式 先创建 再添加
   var li = $("<li></li>");
   // 这样添加的是父子关系
   $("ul").append(li);
   $("ul").prepend(li);
   // 2.这样添加的是 兄弟关系
   var div = $("<div>我是后妈生的</div>");
   // $(".test").after(div);
   $(".test").before(div);
   
   // 3. 删除元素
   $("ul").remove(); // 删除匹配的元素，包括自己
   $("ul").empty(); // 删除匹配元素里面的 子元素
   $("ul").html(""); // 也是删除里面的子元素
   
   //原生js的方式
   var ul = document.querySelector('ul');
   var li = document.createElement('li');
   ul.appendChild(li);
   ul.insertBefore(li, ul.children[0])
   ```

   

#### jQuery尺寸、位置操作

1. 尺寸操作

   ![](/image/尺寸操作.png)

   ```javascript
   // 1. width() / height() 获取设置元素 width和height大小 
   console.log($("div").width());
   // $("div").width(300);
   // 2. innerWidth() / innerHeight()  获取设置元素 width和height + padding 大小 
   console.log($("div").innerWidth());
   // 3. outerWidth()  / outerHeight()  获取设置元素 width和height + padding + border 大小 
   console.log($("div").outerWidth());
   // 4. outerWidth(true) / outerHeight(true) 获取设置 width和height + padding + border + margin
   console.log($("div").outerWidth(true));
   ```

   

2. 位置操作 offset(),position(), scrollTop()/scrollLeft()

   1. offset() 可读写， 返回一个对象，里面有left/top属性， 可设置或返回 距离文档左侧或顶部的距离；  注意是相对于文档，和父级的定位无关
   2. 设置元素的偏移   $('.div').offset({top:100, left:100})
   3. position() 只能读不能写， 返回的相对于带有定位的父级元素的偏移坐标，使用`position().top, position().left`
   4. scrollTop(), 可读写；  可以设置或者返回  元素被卷去的头部



























