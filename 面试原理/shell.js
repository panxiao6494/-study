/*
typeof null='Object'
不同的对象在底层原理的存储是用二进制表示的，在javascript中，如果二进制的前三位都为0；
系统会判定为是object类型，null的存储二进制是000
000：对象类型
1:整型，数据是31位待符号的整数
010：双精度类型，数据是双精度数字
100：字符串，数据鼠字符串
110：布尔类型，数据是布尔值

typeof用来判断基本数据类型，intanceof用来判断某个对象是不是另一个对象那个的实例
Boolean('')         // false
Boolean(undefined)  // false
Boolean(null)       // false
Boolean(NaN)        // false
Boolean(false)      // false
Boolean(0)          // false
Boolean({})		    // true
Boolean([])		    // true
*/
/*
跨域解决方案
1.通过jsonp跨域
2.document.domain+iframe跨域
3.location.hash+iframe
4.window.name+iframe跨域
5.postMessage跨域
6.跨域资源共享
7.nginx代理跨域
8.nodejs中间件
9.websocket协议跨域
*/