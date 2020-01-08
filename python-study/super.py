class Parent:
	def myMethods(self):
		print('调用父类方法')

class Child(Parent):
	def myMethods(self):
		print('调用子类方法')

c=Child()
c.myMethods()
super(Child,c).myMethods()