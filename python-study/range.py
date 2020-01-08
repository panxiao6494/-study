for i in range(5):
	print(i)

for i in range(2,6):
	print(i)
print('=============')

for i in range(0,10,2): #步长为2输出0,10
	print(i)

print('=================')

for letter in 'Runoob':
	if letter =='o':
		continue
	print('当前字母：',letter)