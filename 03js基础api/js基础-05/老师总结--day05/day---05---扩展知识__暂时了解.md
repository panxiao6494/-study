---------------------------------全部了解为主，js高级里面每个都会讲解

 > 函数的声明方式(函数声明和函数表达式)

 ```javascript
 //要注意函数表达式  一般是匿名函数， 也可以写函数名，
 //函数表达式提供函数名，可以用于在函数内部使用来代指其本身
 
 var factorial = function recursive(n){
  return n<2? 1 : n*recursion(n-1)
 }
 factorial(4);
 ```

 > 作用域

 ```javascript
 //说到作用域，这种函数叫匿名自执行函数
 ;(function(){
    'use strict';
    var a = 1;
    function(){
        //...
    }
 })();
 //可以避免全局变量的污染
 ```

 > es6新增了块级作用域let

 ```javascript
 //作用域链，还有后面的原型链，不要混淆，这个非常重要，在写大型程序的时候，会涉及到各种方法的调用，可以看下jquery的源码，站在巨人的肩膀上学习。 发现我们看别人的源码会非常吃力，其中有一个很大的原因就是各种函数的调用，头都晕了，找个函数都找半天，所以掌握好原型链，对于我们以后看别人的源码非常重要
 ```

 

 > 预解析，这个主要是我们前面经常提到的变化和函数的声明提升，现在我们对于概念性的一些关键词要了解，短时间记不住太多，只需要我们在写程序的时候注意 在使用变量和函数的时候 一定要按照从上至下的顺序先声明后使用，这样就不会有这个问题。

 

 > 什么是对象，以手游吃鸡为例，我们当前角色的衣服，鞋子，枪支都是当前人的属性，开枪，开车，跳舞，现在流行的那个吃鸡舞蹈有没有同学会跳啊， 这些动作都是方法。 一个对象由属性和方法构成

 > 对象的结构是key value(键值对)的形式， ES6有个新的结构Map数据结构，是value value的形式，这个面试会问道，暂时不做了解



> 创建对象是一个非常重要的知识点，可以帮助我们更好的了解js底层的一些原理，在各种大牛写的代码里面都可以看到它的影子，接下来我们来了解一下6种创建对象的方法. (红宝书中一共提到了7种创建对象的方式,《JavaScript高级程序设计》)

1. 字面量， 最常用的方式， var obj1 ={};

2. js内置对象 var obj2 = new Object();

3. 工厂模式

   ```javascript
   //使用第一种和第二种方式 创建多个对象的时候，会产生大量重复的代码，看到重复，就想到优化，函数封装
   function createPerson(name,age) {
     var o = {};
     o.name = name;
     o.age = age;
     o.sayName = function() {
       alert(this.name);//想知道this值的最好方式就是打印出来
     }
     return o;
   }
   //创建多个不同的对象就简单啦，代码不会重复，这是优点，缺点就是我们不知道返回的三个对象时什么类型，他们有什么联系？
   var person1 = createPerson('Jack', 18);
   var person2 = createPerson('Lucy', 23);
   var person3 = createPerson('Jim', 36);
   
   ```

   4. 构造函数模式

      ```javascript
      function Person(name,age) {
        this.name = name;
        this.age = age;
        this.sayName = function() {
          alert(this.name);
        }
      }
      
      var person1 = new Person('Jack', 18);
      var person2 = new Person('Lucy', 23);
      var person3 = new Person('Jim', 36);
      
      //对比工厂模式，我们可以发现，
      //1.没有显示的在函数里面创建对象
      //2.直接将属性和方法赋值给了this，this的值是当前对象创建出来的实例，就是person123
      //3.没有return语句
      //4.用了个关键词new 来创建对象
      //5.规范：构造函数使用大写字母开头，非构造函数使用小写字母开头
      ```

      

   5. 原型创建对象模式

      ```javascript
      //构造函数有缺点，每个对象里面都有公用的函数，每次创建一个实例都要方法重新创建一遍，如果方法过多，就会占用很多不必要的内存，于是出现了原型创建对象的模式
      function Person(){}
      Person.prototype={
      	name:"NIke",
      	age:11,
      	sayName:function(){
      		alert(this.name);
       	}
      };
      var person1 = new Person();
      person1.sayName();
      var person2 = new Person();
      person2.sayName();
      
      //优点，sayName方法共享了，所有的实例的sayName方法都指向同一个
      // 可以动态的添加原型对象的方法和属性，直接反映到对象实例上
      //缺点：使用原型创建的对象实例，person1，person2 可以共享原型上所有的属性和方法，缺点就是所有的属性和方法都是共享的，
      //所有的方法都是共享的，没有办法创建自己的属性和方法，也不能像构造函数那样传递参数
      ```

      

   6. 组合使用构造函数和原型模式

      ```javascript
      //创建自定义类型的最常见的方式
      
      function Person(name,age) {
        this.name = name;
        this.age = age;
      }
      Person.prototype.sayName = function() {
        console.log(this.name)
      }
      var person1 = new Person('hanmeimei',24)
      person1.sayName()
      
      ```

      



> 构造函数和对象 
>
> 这里的是一个大的类型----->宝马车 ---> 宝马车里面的X6型号 -----> 我的X6
>
> [js继承的几种方式](https://segmentfault.com/a/1190000015727237)

```javascript
//对应到程序里面， 所有的面向对象的语言的一个重要特性  继承
function Car(){
  this.lunzi="四个轮子";
  this.carDrive = function(){
    console.log("自定义最高层的构造函数继承");
    return "进入Car类的 carDrive函数里面"
  }
}

function BaomaCar1(){
    this.shuangShenSize = {length: '900mm',height:'300mm'};
    this.tianShiYan = true;
    this.myDrive = function(){}
}

function X6Type2(){
    this.zhouju = '4000mm';
    this.liubei = true;
    this.ziDongJiaShi = function(){}
}

function MyX6Car3(name, tou){
	this.xingShiZheng = name;
    this.touZhen = tou;
    this.dingZhiHua = '';
    this.piaoYi = function(){}
}

//暂时了解，有个印象，后面要学习到，非常重要
MyX6Car3.prototype = new X6Type2();
MyX6Car3.prototype.constructor = MyX6Car3;
MyX6Car3.prototype.__proto__ = new BaomaCar1();
MyX6Car3.prototype.__proto__.__proto__ = new Car();

var myCar = new MyX6Car3('张三',true);
console.log('myCar :', myCar.carDrive());




//ES6的继承
class A {}

class B extends A {
  constructor() {
    super();
  }
}

```



> new的过程，重要，面试的时候会问到，工作中写代码时了解即可

```javascript
 var obj = new Person();

//js内部处理过程, 工厂模式的影子
function gouZhao(){
    var o = {};
    o.__proto__ = Person.prototype;
    Person.call(o)  //动态改变构造函数里面的this值的指向
    return o;
}
var obj = gouZhao();
```




