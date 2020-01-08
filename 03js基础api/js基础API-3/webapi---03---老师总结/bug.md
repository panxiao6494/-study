1. `li.innerHTML = text.value + '<a href="javascript:;">删除</a>'`
2. `ul.removeChild(this.parentNode);`
3.  创建 tr里面的几个td时，  循环的选择， 使用计数器的写法  写不了，使用另一个循环  for...in 遍历对象
4. 循环遍历的对象  选择  datas数组里面的对象
5. `td.innerHTML = datas[i][k]`
6. 动态创建元素 不要用到之前的查找去了  
   1. tbody.appendChild(document.querySelector('td'))   错误
7.  循环绑定事件  一定写在循环(创建tbody的循环)的外面
8. 跟随鼠标的天使，   获取的x/y坐标是没有 单位的， 赋值给top/left的时候， 必须利用字符串的拼接，加上一个 ‘px’