> 时间Date对象上的一些方法可能记住，这些不要紧，暂时过个眼，知道js最原始的格式化时间是什么模式，以后我们工作中可能会用到时间的第三方库moment，国际化的一个库，里面格式化时间的方式  栗子： moment.format('YYYY-MM-DD  HH:mm:ss') 也可以思考一下自己用Date对象自己实现一个这样的方法需要的思路，复杂

[moment文档](http://momentjs.cn/docs/)



> 倒计时案例，加个定时器setInterval(), 实现时间的动态更新

> 数组的创建一般使用字面量，工作中很少使用new Array()

> 检测是否是数组， instanceof， Array.isArray(), 补充一种方法 [1,2,3].constructor === Array, [1,2,3].constructor.name === 'Array',  后面原型链会用到的知识点， 判断是否为数组，让我们写程序更严谨，让我们程序尽量没有bug，后面的写数组深拷贝会用到





> 查找2个数组中相同的项,自己的代码小金库

```javascript
//获取2个数组中重复的向，组成一个新数组
arr1.filter(function(item){
    return arr2.indexOf(item) > -1;
})
```

>数组和字符串互转 arr.join(','), str1.split(',')

> 课堂扩展， concat,slice,splice方法 , 小技巧： 在浏览器里面查找当前浏览器内置es支持的的一些方法，输入Array.prototype,String.prototype

```javascript
// 1. concat， 返回一个新数组，不改变原数组
var arr1 = [1,2,3,4,5]
console.log(arr1.concat(1), arr1); //返回的是合并后的结果，原数组不改变,工作中可以定义一个新数组去接收它
console.log(arr1.concat([6,7,8,9,0],33,'hello')); //可以合并数组，会自动将所有值连接起来

// 2.slice ，返回一个新数组，不改变原数组
console.log(arr1.slice());  //数组的浅拷贝
console.log(arr1.slice(1)); //默认第二个参数不填，截取到数组结尾
console.log(arr1.slice(2,4));  //[begin，end) 左闭右开

// 3.splice，删除或添加 指定位置的元素, 改变原数组！！！
arr1.splice(2,0,'splice') //表示从arr1数组的 索引为2的位置上，不删除元素，新增一个元素‘splice’， 返回删除的元素组成的数组，这里为[]
arr1.splice(3,1); // 从索引位置为3的位置，删除一个元素
```



> 数组的深拷贝！！！  工作中涉及前端组件化的开发，递归组件，如树形控件

```javascript
//声明一个复杂的数据类型，数组里面有对象，对象的值有数组，拷贝
var complexArr = [12,'Lucy', {name: 'jack',age: 25,action: [1,2,3,4,5]}];
var tmp = JSON.parse(JSON.stringify(complexArr));
// var tmp = complexArr.slice();  //浅拷贝的意思就是引用类型的数据占用的内存地址是同一个，修改一个变量，另一个变量的引用类型的值也会发生改变
tmp[2].name='修改后的值';
tmp[2].action.push('添加一个数进去');
console.log('complexArr, tmp :', complexArr,tmp);

// 代码小金库，稍微完善的一种深拷贝

function deepClone(source){
  if(!source || typeof source != 'object'){
    throw new Error('params error,we need a array or object'); //需要填写一个正确的参数,英文显得专业
  }

  var target = (source.constructor === Array) ? [] :{}; // source instanceof Array
  for(var key in source){
    if(source.hasOwnProperty(key)){  //for...in循环的缺陷，控制它不要遍历原型链上的数据
      if(source[key] && typeof source[key] === 'object'){ //只要是里面的值还是 数组或者对象就在调用这个函数，简称递归
        target[key] = (source[key] instanceof Array) ? []:{};
        target[key] = deepClone(source[key])  //这几就是递归的具体体现，类似于循环，有结束条件
      }else {
        target[key] = source[key];  //如果是普通类型则直接复制操作，内存上会直接生成一个新的地址
      }
    }
  }
  return target;
}

var tmpArr = deepClone(complexArr);
tmpArr[2].action.push('新增的一个元素');
console.log('complexArr: ', complexArr, tmpArr);

```



> sort(function(a,b){return a-b}) 原理

```
​```
sort排序用在数组上存在的问题，
这个函数有一个参数，如果参数被省略，那么数组中的元素将按照ASCII字符顺序进行排序
var arr = ["a", "b", "A", "B"];
arr.sort();
// 这是因为A B 的 ASCII值分别问65 66， a,b的ASCII值分别为97 98，所以从小到大排序为这样
console.log(arr);//["A", "B", "a", "b"]

var arr = [15, 8, 25, 3];
arr.sort();
// 这是因为 sort方法会调用每个数组项的`toString()`方法，得到字符串，然后再对得到的字符串进行排序。虽然数值15比3大，但在进行字符串比较时”15”则排在”3”前面
console.log(arr);//[15, 25, 3, 8]

结论：有字符进行比较就不是比长度了，而是按字符逐个进行比较(这里比较的都是ASCII值)，直到分出大小为止
```




> 字符串， 查找字符串出现的位置和次数，利用数组，循环条件的控制，indexOf本身也有一个遍历的过程，查到了就会停止

> 对象的if判断，用到前面所学的boolean隐式转换，默认为false的几个字面量 0, ''，一般使用是否是空字符串来判断。注意数字0也是false

> 统计出现最多的字符时，如果有重复的情况会怎么样，怎样处理分支逻辑？

```javascript
var tmpArr = [];
for (var key in o){
  if(o.hasOwnProperty(key)){
    if(o[key] == max){
      var tmpObj = {};
      tmpObj[key] = o[key]
      tmpArr.push(tmpObj)
    }
  }
}
```







> 课后补充的知识点,   面试中一般会问到的push，pop知识点， 数据结构和算法 

+ 1.栈(堆栈,栈的别名)和队列, js里面的数组是最简单的内存数据结构，可以用数组模拟栈和队列
  栈是遵循后进先出的原则   push, pop 添加到栈顶，出栈就是移栈顶的元素， 栈的应用，函数调用栈 后进先出
  2.队列是遵循先进先出的原则，类似于排队， push,shift在队列的尾部添加元素，首部删除元素

  3.堆的特点是无序的key-value 键值对的存储方式；堆的存取方式和顺序无关

+ 区别与联系：
  栈的插入和删除操作都在一端进行，而队列是在两端

  栈的空间小，运行效率高；堆的空间大，运行效率相对低

+ 堆栈空间 内存分配
  简单数据类型，(又称基本数据类型)，6种，都储存在栈stack中
  复杂数据类型，地址(其他语言中叫指针) 存储在栈中，实际的值储存在堆heap中， 因为是值的引用，所以又叫引用数据类型

```javascript
//抽象的不利于理解，用代码说明
var a = "aa";
function one(){
  let a = 1;
  two();
  console.log('one');
  function two(){
    let b = 2;
    three();
    console.log('two');
    function three(){
      console.log(b)  //从这个值也可以看出先执行的是three函数，因为要是two函数先执行后销毁了，那three就拿不到变量b的值了，所以是后进先出three
      console.log('three');
    }
  }
}

one();
console.log(a);
```

![栈的执行结构](http://polq3xi73.bkt.clouddn.com/js_062_%E6%A0%88%E7%9A%84%E6%89%A7%E8%A1%8C%E9%A1%BA%E5%BA%8F.png)





+ 队列的执行顺序

```javascript
console.log(1);
console.log(2);
setTimeout(function(){
    console.log(3);
})
setTimeout(function(){
    console.log(4);
})
console.log(5);
//打印的是12534， 首先执行的是栈里的代码，但是异步操作setTimeout会被放到队列里，当栈里的代码执行完毕后，再从队列里面依次添加任务到栈里执行，先调用的就先执行， 先进先出

//得到一个结论，永远都是栈里的代码先执行，再从队列中依次读取事件，加入到栈中执行

//Dom操作，ajax操作和setTimeout定时器 这些WebAPI执行后的结果会放在回调的队列里面，当栈里的程序走完之后(先进后出)，再从任务队列里中读取事件，放到执行栈中依次执行(先进先出)，这个过程是循环不断的，  这就是程序的流程
```



[堆，栈，事件循环的概念](https://juejin.im/post/5b1deac06fb9a01e643e2a95)


