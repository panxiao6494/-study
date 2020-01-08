工作中，只要我们重复写一份代码超过3次，就要想到用循环，然后再不断的优化，这样能让自己的程序越来越严谨，更接近大神的思路



1. 工作中常用的循环语句 forEach,map,filter, for...of,for...in

   ```javascript
   //记住一点，我的前端js部分每年都在更新，会收集每年外面声音比较大的一些好的函数和方法，然后整个发布，
   //我们现在学习的都是浏览器以及普遍支持的ES5， 这个是2009年发布的一个js版本，基本所有的浏览器都认识，
   //但是在2015年发布的ES6，这个新增了非常多的功能，包括数据类型和数据结构都增加了，这个代码根据各个浏览器的支持情况，有些会不认识ES6语法，所以这个就设计到了一个名词叫 babel 帮我们把ES6代码转换成ES5的代码，这样又可以使用高级用法，浏览器又不会报错
   
   //ES5 forEach,for...in 循环
   //ES6新增的遍历(循环的意思)方法，一般针对数组
   //for...of, map, filter, 都是更简洁的一种遍历手段，下次讲完数组后再给大家扩展
   ```

   

> for高级用法

```javascript
//for高级写法
var i =0;
for (; i < 9; i++) { //省略第一个参数
  console.log(i);
}

for (var i = 0;; i++) { //省略第二个参数
  console.log(i);
  if (i > 3) break;
}

for (;;) { //省略第三个参数
  if (i > 3) break;
  console.log('前面： ',i);
  i++;
}

// do...while 高级写法
var i = 0;  
do{  
	console.log(i);  
}while(i++ < 10) 
```



> 标记语句，引用标识符结合continue和break来控制程序走向

```javascript
var i,j;

loop1:
for(i=0; i<3; i++){
  loop2:
  for(j=0;j<3; j++){{
    if(i==1 && j==1){
      break loop1; //break, continue, continue loop1,continue loop2
    }
    console.log('i = ' + i + ', j = '+j);
  }}
}
```



