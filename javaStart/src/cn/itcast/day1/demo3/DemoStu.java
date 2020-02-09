package cn.itcast.day1.demo3;


/*1.导包，同一级目录不用导
 * 2.创建类
 * 类名称 对象名=new 类名称
 * 3.使用类
 * */

public class DemoStu {
    public static void main(String[] args) {
        //根据类实例化对象
        Student stu = new Student();
        System.out.println(stu.name);//默认为null
        stu.name = "zhangsan";
        System.out.println(stu.name);
        stu.eat();
    }
}
