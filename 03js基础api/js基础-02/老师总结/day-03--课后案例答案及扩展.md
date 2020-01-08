2. for循环99乘法表

   ```javascript
   var str = "";
   for(var i =1; i<10; i++){
   	for(var j = 1; j<10; j++){
   		if(i>=j){
   			str += i + ' * ' +  j + ' = ' + i * j + '  ';
   		}
   	}
   	str += "\n";
   }
   console.log(str);
   ```

3. while循环

   ```javascript
   var userName = '';
   var pwd = '';
   do{
   	userName = prompt('请输入账号：');
   	pwd = prompt('请输入密码：');
   }while(!(userName == 'admin' && pwd == '123456'))
   ```

4. 打印1-100所有整数的和，跳过尾数为3的数

   ```javascript
   //验证正确性，就是两组结果的相加是不是5050
   var sum = 0;
   var sumThree = 0;
   for(var i = 1; i<=100; i++){
   	if(i%10 == 3){
   		sumThree += i;
   		console.log('i: ', i );
   		continue;
   	}
   	sum += i;
   }
   console.log(sumThree);
   console.log(sum);
   ```

5. 工作中判断位数为3的高级写法

   ```javascript
   var num = parseInt(prompt("请输入一个数字"))
   var pattern = /^[0-9]+$/;
   if(pattern.test(num)){  //这个叫正则表达式，判断任何用户输入的数字尾数是否为3，不局限于100
   	console.log("你输入的数字尾数是3")
   }else{
     alert("你输入的数字尾数不是3");
   }
   ```

   