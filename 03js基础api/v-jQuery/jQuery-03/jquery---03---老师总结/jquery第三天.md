#### 事件注册

1.  `$('div').click(function(){})`, 一些事件类型和原生的基本一致，也是不带on， 如mouseover,mouseout,blur,focus,change,resize,scroll等



#### 事件处理

1. on(),off(),trigger()/triggerHandler()

2. on  用于事件绑定，比较好用, 可以绑定动态创建的元素

   ```javascript
   // 事件处理on
   // on可以绑定1个或者多个事件处理程序
   $("div").on({
       mouseenter: function() {
           $(this).css("background", "skyblue");
       },
       click: function() {
           $(this).css("background", "purple");
       },
       mouseleave: function() {
           $(this).css("background", "blue");
       }
   });
   
   // 第二种写法
   $("div").on("mouseenter mouseleave", function() {
       $(this).toggleClass("current");
   });
   // 事件委派
   $("ul").on("click", "li", function(e) {
       console.log(11);
     // 里面的e.target  和this 一样
   });
   // 使用on可以给动态创建的元素绑定事件， click就不行
   var li = $("<li>我是后来创建的</li>");
   $("ol").append(li);
   
   
   
   
   
   //元素dom事件， jquery对原生进行封装
   var div = document.querySelector('div');
   div.onclick = function(){}
   //传统的模式下是， 利用子元素li的事件冒泡，实现事件委派
   ul.addEventListener('click', function(){
       this.style.color = 'red'
   })
   ```

3. off解绑

   ```javascript
   // 事件解绑 off 
   // $("div").off();  // 这个是解除了div身上的所有事件
   $("div").off("click"); // 这个是解除了div身上的点击事件
   $("ul").off("click", "li"); // 接触事件委托
   // 2. one() 但是它只能触发事件一次
   $("p").one("click", function() {
       alert(11);
   })
   ```

4. trigger  事件触发

   ```javascript
   // 自动触发事件
   // 1. 元素.事件()
   // $("div").click();会触发元素的默认行为
   // 2. 元素.trigger("事件")
   // $("div").trigger("click");会触发元素的默认行为
   $("input").trigger("focus");
   // 3. 元素.triggerHandler("事件") 就是不会触发元素的默认行为
   $("div").triggerHandler("click");
   $("input").on("focus", function() {
       $(this).val("你好吗");
   });
   // $("input").triggerHandler("focus");
   ```

5. jquery 事件对象 (封装原生)

   1. 阻止默认行为 e.preventDefault();  return false

   2. 阻止冒泡  e.stopPropagation()

      ```javascript
      //jquery事件对象
      $("div").on("click", function(event) {
          // console.log(event);
          console.log('jquery事件对象: ', event)
          event.stopPropagation();
      })
      
      
      // 原生js事件对象
      var divEle = document.querySelector('div')
      divEle.addEventListener('click',function(e){
          console.log('元素事件对象: ', e)
      })
      $("div")[0].click=function(e){
        console.log('这个e也是原生事件对象， jquery对象转DOM对象');
      }
      ```
