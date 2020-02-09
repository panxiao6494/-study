package cn.itcast.day1.demo04;

public class PersonClass {

    public static void main(String[] args) {
        Person index = new Person();
        index.name = "张三";
        // index.age = 18; 私有变量简介访问
        index.setAge(-20);//范围错误，取默认值
        System.out.println("是不是爷们" + index.isMale(true));
        index.getAge();
        index.show();
        String name = "王健林";
        index.sayHello(name);
    }
}
