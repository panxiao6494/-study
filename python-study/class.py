class people:
    name = ''
    gae = 0
    __weight = 0

    def __init__(self, n, a, w):
        self.name = n
        self.age = a
        self.__weight = w

    def speak(self):
        print('%s说：我%d岁。' % (self.name, self.age))

p = people('runoob', 10, 30)
p.speak()