1.  js书写位置
2. js注释
3. 变量的命名规范    a-z A-Z $ _   数字不能开头
4. 交换2个变量的值！！！
5. 判读变量数据类型，   为什么是叫动态语言
6. 不同的数据类型不要进行相加减
7. 数字类型    八进制  010，  十六进制 0x9a     (----------------------------------了解)
   1. Number.MAX_VALUE  Number.MIN_VALUE
   2. Infinity,  -Infinity   正无穷， 负无穷
   3. NaN  (not a number)
   4. isNaN()

7. 什么是字符串    “pingk”  'abc'  '中文'   单双引号包裹的就叫字符串
   1.  引号的嵌套  "aa'bb'cc"    'dd"ss"dd'
   2. 字符串的长度 "aa'bb'cc".length
   3. \+拼接     数值相加， 字符相拼接
   4.  工作里面  尽量不要字符串和数字相加减
   5. 字符串 ：  引引加加
8. 布尔类型   true/false 只有2个值
   1. console.log(true + 1)  console.log(false+ 1)
9. undfined 类型
   1. console.log(undefined + 'pink'),  console.log(undefined + 1)
10. null 类型
    1. console.log(null + 'pink')，  console.log(null + 1)
11. typeof 返回的几种数据类型的 值
    1.  'number' , 'string', 'boolean', 'undefined', 'object'
12. 不要说通过颜色来判断变量的类型



13. 数据类型相互转换
    1.  转换成字符串：  toString(), + 拼接    (隐式转换, 隐晦的内容， 对性能有影响)
    2. 转换成数字： parseInt('3.14')  parseFloat('3.14')    字符串里面的字符一般只能是数字  parseInt('aaa3.14')   parseInt('3.14aaaa') 
    3. 转换布尔值   
       1. 默认的false值   '', 0, NaN, null, undefined    Boolean()
       2. if(用在这个里面){}