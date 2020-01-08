var1=100
if var1:
	print('1-if表达式为true')
	print(var1)

var2=0 #默认隐式转换false
if var2:
	print('2-if表达条件是为true')
	print(var2)
print('good bye')

age=int(input("请输入你家狗的年龄"))
print("")
if age<=0:
	print('你在逗我吧!')
elif age==1:
	print("相当于14岁的人")
elif age>2:
	human=22+(age-2)*5
	print('对应人类年龄',human)

input('点击enter退出')