今天我们要学习的是非常重要的一种数据结构----数组， 所有的其他的语言java，c，c++，python，go 都有数组，并且操作方式都差不多，一般是数组的增删改查之类，工作中我们平时写前端，抛开写页面和css之外，基本上做的是处理用户操作的增删改查之类的，例如淘宝这类商家端，商家上传修改商品图片价格等，查询一类商品分页，从一组商品中删除某一个商品，都有数组操作的影子，学习数组才是我们开启复杂数据结构的开端

今天我们会学习到 数组的含义，创建数组，遍历数组，数组元素新增，删除，编辑，以及冒泡排序

[常用排序动画摸模拟](http://jsdo.it/norahiko/oxIy/fullscreen)

[常用语言的常用排序 ](https://github.com/hustcc/JS-Sorting-Algorithm/blob/master/6.quickSort.md)



1. 数组冒泡的逐渐优化过程

   ```javascript
   //将数组里面的一组数字从小到大的排序，从大到小也可以
   var arrTest = [23,3,43,12,8];
   var count = 0;
   for(var i = 0; i<5; i++){
   	for(var j =0; j<5; j++){
   		count++;//循环次数
   		if(arrTest[j] > arrTest[j+1]){ //交换两个数据
   			var tmpItem = arrTest[j];
   			arrTest[j] = arrTest[j+1];
   			arrTest[j+1] = tmpItem
   		}
   	}
   }
   console.log('arrTest :', arrTest, count);
   
   
   //优化,循环次数的把握
   var arrTest = [23,3,43,12,8];
   var count = 0;
   for(var i = 0; i<4; i++){ //只需要四轮
   	for(var j =0; j<4-i; j++){ //每次比较数组里面的数字 减去次数
   		count++;
   		if(arrTest[j] > arrTest[j+1]){
   			var tmpItem = arrTest[j];
   			arrTest[j] = arrTest[j+1];
   			arrTest[j+1] = tmpItem
   		}
   	}
   }
   console.log('arrTest :', arrTest, count);
   
   //工作中使用，封装代码
   
   var arrTest = [23,3,43,12,8];
   			
   function bubbleSort(argc){
   	if(argc && argc instanceof Array){
   		for(var i = 0; i<4; i++){
   			for(var j =0; j<4-i; j++){
   				if(argc[j] > argc[j+1]){
   					var tmpItem = argc[j];
   					argc[j] = argc[j+1];
   					argc[j+1] = tmpItem
   				}
   			}
   		}
   		console.log('argc: ', argc);
   	}else {
   		console.error("参数必须为数组，、 params must be an Array,")
   	}
   }
   
   bubbleSort(arrTest);
   ```

   

2. 和快速排序的时间优化问题

   ```javascript
   // 排序可以从最基础的方法写起，慢慢优化的方式
   // 排序的效率问题， 成为大牛样的程序员
   
   var tmpArr = [];
   for(var i =0;i<10000;i++){
     tmpArr.push(Math.floor(Math.random()*10001)) //随机生成0-1000的随机数
   }
   
   function quickSort(arr){
     if(arr.length <= 1){
       return arr
     }
     
     var pivotIndex = Math.floor(arr.length/2);
     var pivot = arr.splice(pivotIndex,1)[0];
     var left = [];
     var right = [];
   
     for(var i =0;i<arr.length; i++){
       if(arr[i] <= pivot){
         left.push(arr[i]);
       }else {
         right.push(arr[i]);
       }
     }
   
     return quickSort(left).concat([pivot], quickSort(right));
   }
   
   console.time("快速排序时间");
   quickSort(tmpArr);
   console.timeEnd("快速排序时间");
   
   function bubbleSort(arr){
     var newArr = arr.slice(); //拷贝数组，不然就会改变原始数组，元素必须是基本数据类型，浅拷贝
     for(var i =0;i<newArr.length-1; i++){
       for(var j=0;j<newArr.length-1; j++){
         if(newArr[j] > newArr[j+1]){
           var temp = newArr[j];
           newArr[j] = newArr[j+1];
           newArr[j+1] = temp;
         }
       }
     }
     return newArr;
   }
   
   console.time("冒泡排序时间");
   bubbleSort(tmpArr);
   console.timeEnd("冒泡排序时间");
   
   console.log('排序后的数组,原始数组不会发生改变： ',tmpArr);
   
   ```

