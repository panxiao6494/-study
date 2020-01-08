class MyNumbers:
    def __iter__(self):  # 创建一个迭代器对象
        self.a = 1
        return self

    def __next__(self):  # 返回一个迭代器对象
        if self.a <= 20:
            x = self.a
            self.a += 1
            return x
        else:
            raise StopIteration


myclass = MyNumbers()
myiter = iter(myclass)

for x in myiter:
    print(x)
