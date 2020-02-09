package cn.itcast.day1.demo04;

public class Person {
    String name;
    private int age; //私有变量，其他类不可访问
    private boolean male;

    //调用this关键字指向类成员变量，区分同名局部变量，谁调用函数，this指向谁
    public void sayHello(String name) {
        System.out.println(name + "你好，我是" + this.name);
    }

    public void show() {
        System.out.println("我叫" + name + "年龄是" + age);
    }

    //布尔值判断用is**
    public boolean isMale(boolean a) {
        male = a;
        return male;
    }

    public void setAge(int num) {
        if (num > 0 && num < 100) {
            age = num;
        } else {
            System.out.println("数据范围错误");
        }

    }

    public int getAge() {
        return age;
    }
}
