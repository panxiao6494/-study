#### ES6

1. js这门语言是一个不断完善，功能加强的一个过程
2. ES6， 全称 ECMAScript 6.0 ，是 JavaScript 的下一个版本标准，2015.06 发版。大多数高版本的浏览器也支持 ES6，不过只实现了 ES6 的部分特性和功能



#### let,const,var

1. let   声明变量的关键字

   1. 块级作用域

   2. 防止循环遍历变成 全局变量

   3. 不存在变量声明提升

      ```javascript
      for (var i = 0; i < 2; i++) {
      	arr[i] = function () {
      		console.log(i);
      	}
      }
      
      // let 关键字
      for (let i = 0; i < 2; i++) {
      	arr[i] = function () {
      		console.log(i);
      	}
      }
      ```

      

2. const 声明变量的关键词

   1. 常量声明后值不可更改  (内存地址不能改变)
   2. 对于 基本数据类型 不能修改值； 复杂类型的 值可以修改，地址不能改



#### 解构赋值

1. 解构赋值是什么？ 对数组或者对象进行的模式匹配，然后对其中的变量进行赋值的操作，方便了复杂对象中数据字段的获取

2. 等号左边的是目标，  右边的是 解构的源

3. 数组解构

   ```javascript
   // 数组解构  可以按照一一对应的关系 从数组中提取值，然后将值赋值给变量
   let ary = [1,2,3];
   let [a, b, c, d, e] = [1,2,3];
   // 如果解构不成功， 变量跟数值个数不匹配的时候，变量的值为undefined
   console.log(a)
   console.log(b)
   console.log(c)
   console.log(d)
   console.log(e)
   
   let [a, , b] = [1, 2, 3]; // a=1 b=3  叫可忽略的结构
   let [a = 1, b] = []; // a = 1, b = undefined;  当解构的结果是undefined 时，就会用默认值作为返回结果； 如果不是undefined，就会用源里面的值 
   let [a, ...b] = [1, 2, 3]; // a=1, b=[2,3]   这个叫不完全解构
   ```

4. 对象解构

   ```javascript
   let { foo, bar } = { foo: 'aaa', bar: 'bbb' };
   {foo: foo, bar: bar}
   // foo='aaa' bar='bbb'
   let { baz : foo } = { baz : 'ddd' };  // foo ='ddd' 解构赋值是对里面的变量进行赋值
   let {a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40};
   let {a = 10, b = 5} = {a: 3}; // 解构默认值， 没有的情况下就用默认值
   let {a: aa = 10, b: bb = 5} = {a: 3};
   ```



#### 箭头函数

1. 箭头函数的几种写法，参数相关

   ```javascript
   // 箭头函数的几种写法
   var fn1 = ()=> {
     console.log(111)
   }
   var fn2 = (x,y) => x+y;
   var fn3 = x => x
   //等价于
   var fn4 = function(x){
     return x
   }
   
   //注意一种错误的情况， 当要返回一个对象时，必须用小括号括起来，不然区分不开代码块的{} 和对象的{}
   var f1 = (id,name) => {id: id, name: name}; //错误
   var f2 = (id,name) => ({id: id, name: name}); // 正确写法
   function (){
     return  {id: id, name: name}
   }
   ```

2. 箭头函数里面的this值，是定义函数时的对象，而不是使用函数时的对象。

   1. 箭头函数里面没有this，如果在里面使用了this值，那么该this就一定是外层的this

   ```javascript
   // 1. 箭头函数里面没有this对象， 它的值是 箭头函数定义时所在环境的 this值
   
   function fn () {
   	console.log(this);
   	return () => {
   			// 定义时，这个里面的this绑定是fn中的this对象
   		console.log(this)
   	}
   }
   
   const obj = {name: 'zhangsan'};
   //fn里面的this被 人为的改变为obj，所以箭头函数里面的this也是obj
   const resFn = fn.call(obj);
   
   resFn();
   
   // 2. 案例
   
   function fn() {
     setTimeout(() => {
       // 定义时，this 绑定的是 fn 中的 this 对象，
       console.log(this.a, this);
     }, 0)
   }
   var a = 20;
   // fn 的 this 对象为 {a: 18}
   fn.call({
     a: 18
   });
   // fn()  //普通调用，这个时候fn的this为window
   
   
   // 3. 适用场景 ----- 回调函数里面
   // 回调函数
   var Person = {
       'age': 18,
       'sayHello': function () {
         setTimeout(function () {
           console.log(this.age);
         });
       }
   };
   var age = 20;
   Person.sayHello();  // 20
    
   var Person1 = {
       'age': 18,
       'sayHello': function () {
         console.log(this)
         setTimeout(()=>{
           console.log(this.age);
         });
       }
   };
   var age = 20;
   Person1.sayHello();  // 18
   
   
   var fn = Person1.sayHello;
   console.log(fn)
   fn()
   
   ```



#### 三个点号

1.  放在形参或者等号左边为 rest运算符； 表示把逗号隔开的值序列 组合成一个数组

   ````javascript
   //使用场景   1. 用于不定参数的问题， 可以不再使用arguments对象，使用...arg
   const sum = (...args) => {  // (x,y,z)  [x,y,z]
   	let total = 0;
   	args.forEach(item => total += item);
   	return total;
   };
   
   console.log(sum(10, 20));
   console.log(sum(10, 20, 30));
   
   // 2. 剩余运算符 的解构赋值
   let [a, ...b] = [1, 2, 3]; // a=1, b=[2,3]   这个叫不完全解构
   let {a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40};
   ````

2. 放在实参或者等号右边的为 扩展运算符(spread)；  可以将数组拆分成以逗号分隔的参数序列

   ```javascript
   // 1. 当做函数的实参
   var foo = function (a, b, c) {
     console.log(a);
     console.log(b);
     console.log(c);
   }
   var arr = [1, 2, 3];
   //传统写法
   // foo(arr[0], arr[1], arr[2]);
   //使用扩展运算符
   foo(...arr); // foo(...arr)  1,2,3
   
   
   // 2. 合并数组， 数组的拷贝,
   let ary1 = [1, 2, 3]; // let newArr = [...arr1]
   let ary2 = [4, 5, 6];
   let ary3 = [...ary1, ...ary2];
   // 或者这样写 arr1.push(...arr2)
   
   // 3. 字符串转数组
   var str = 'hello';
   var arr5 = [...str];  // str.split('')
   
   // 4. 将伪数组转换为真正的数组
   var oDivs = document.getElementsByTagName('div');
   console.log(oDivs)
   var ary = [...oDivs];
   ary.push('a');
   console.log(ary);
   ```



#### Array相关方法

1. Array.from()

   1. 什么是类数组：  一个类数组对象必须含有 length 属性，且元素属性名必须是数值或者可转换为数值的字符。

      ```javascript
      // 作用: 将伪数组或遍历对象 转换为真正的数组
      var arrayLike = {
      "0": "1",
      "1": "2",
      "length": 2
      }
      var ary = Array.from(arrayLike, item => item * 2)
      console.log(ary)
      
      
      Array.from('hello')
      ```

2. Array.find()

   1. 查找出第一个符合条件的数组成员

      ```javascript
      var arr = [{
      	id: 1,
      	name: '张三'
      }, {
      	id: 2,
      	name: '李四'
      }];
      
      let target = arr.find(item => item.id == 2);
      console.log(target)
      
      
      // 回顾，复习
      var newArr = ary.filter(function(item,index){
      	return item.id === 2;
      	console.log(item, index)
      })
      console.log(newArr)
      ```

3. Array.findIndex()

   1. 找到第一个符合条件的数组成员的位置，如果没有找到则返回-1

      ```javascript
      aalet ary = [10, 20, 50];
      let index = ary.findIndex(item => item > 15);
      console.log(index) // 1
      ```

4. Array.includes()

   1. 判断某个数组是否包含给定的值，返回布尔值

      ```javascript
      let ary = ["a", "b", "c"];
      
      let result = ary.includes('a')
      console.log(result)
      result = ary.includes('e')
      console.log(result)
      ```



#### String扩展方法

1. 模板字符串

   1. 可以解析变量
   2. 可以换行
   3. 可以调用函数

     ```javascript
   let name = `张三`;
      let sayHello = `Hello, 我的名字叫${name}`;
      console.log(sayHello);
      
      let result = {
      	name: "zhangsan",
      	age: 20
      };
      let html = `
      	<div>
      		<span>${result.name}</span>
      		<span>${result.age}</span>
      	</div>
      `;
      console.log(html);
      
      const fn = () => {
      	return '我是fn函数'
      }
      
      let html = `我是模板字符串 ${fn()}`;
      console.log(html)
     ```

2. startsWith() 和 endsWith()

   ```javascript
   //表示参数字符串 是不是在源字符串的头部或者尾部， 返回true/false
   let str = 'Hello ECMAScript 2015';
   let r1 = str.startsWith('Hello');
   console.log(r1);
   let r2 = str.endsWith('2016');
   console.log(r2)
   ```

3. repeat()

   ```javascript
   // 将源字符串重复n次，返回一个新字符串
   console.log("y".repeat(0))
   console.log("y".repeat(5))
   ```

   



#### Set,Map 数据结构

1. 新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。

   1. Set 对象我们存储任何类型的唯一值，无论是原始值或者是对象引用

      ```javascript
      const s = new Set();
      [2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));
      for (let i of s) {
        console.log(i);
      }
      
      // 数组去重的方法 (这是将数组转换为set结构)
      const items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
      
      // 将set的数据结构转换为 数组， 这样才能使用 push 等方法
      // 对象里面发现了 __proto__ 属性为Array的时候，就是数组
      [...new Set(items)]  //等价于 Array.from(new Set(items))
      // 去除字符串里面重复的字符
      [...new Set('ababbc')].join('')
      
      
      
      // 以前的数组去重
      var arr = [12, 66, 4, 88, 3, 7, 12, 66, 23, 23, 2, 12, , 3, 3, 2, 9];
      var newArr = [];
      arr.filter(function (item, index) {
          if (newArr.indexOf(item) == -1) {
              newArr.push(item)
          }
      });
      console.log(newArr);
      ```

      

2. Map 对象保存键值对。任何值(对象或者原始值) 都可以作为一个键或一个值

   1. 传统上只能用字符串当做键， 现在这个结构可以用任意的数据类型当做key值

      ```javascript
      const m = new Map();
      const o = {p: 'Hello World'};
      
      m.set(o, 'content')
      m.get(o) // "content"
      console.log(m) // m是一个对象， 里面的key是一个对象o，知识一个字符串content
      ```

      



#### 课后扩展

1. 新的原始数据类型 Symbol

   1. 表示独一无二的值，最大的用法是用来定义对象的唯一属性名

   2. 7种数据类型：  Number 、 String 、 Boolean 、 Object、 null 、 undefined、Symbol 

   3. 可以接受一个字符串作为参数，为新创建的 Symbol 提供描述，用来显示在控制台或者作为字符串的时候使用，便于区分

   4. ```javascript
      // 不能用 new 命令，因为 Symbol 是原始数据类型，不是对象
      let sy = Symbol("KK");
      console.log(sy);   // Symbol(KK)
      typeof(sy);        // "symbol"
       
      // 相同参数 Symbol() 返回的值不相等
      let sy1 = Symbol("kk"); 
      sy === sy1;       // false
      ```

   5. 由于每一个 Symbol 的值都是不相等的，所以 Symbol 作为对象的属性名，可以保证属性不重名; 这是它的使用场景

      ```javascript
      // 作为对象的属性名，三种写法
      let sy = Symbol("key1");
       
      // 写法1
      let syObject = {};
      syObject[sy] = "kk";
      console.log(syObject);    // {Symbol(key1): "kk"}
       
      // 写法2
      let syObject = {
        [sy]: "kk"
      };
      console.log(syObject);    // {Symbol(key1): "kk"}
       
      // 写法3
      let syObject = {};
      Object.defineProperty(syObject, sy, {value: "kk"});
      console.log(syObject);   // {Symbol(key1): "kk"}
      ```

      