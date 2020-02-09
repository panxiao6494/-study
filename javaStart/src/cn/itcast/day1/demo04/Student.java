package cn.itcast.day1.demo04;

//构造方法
/*1.构造方法的名称必须和所在的类名完全一样，大小写一致
2.构造方法不要写返回值，也不写void
3.构造方法不能return
4.系统默认有一个构造方法
5.一旦编写了至少一个构造方法，编译器就不会有默认构造方法产生
6.构造方法也能重载
 */

public class Student {
    private String name;
    private int age;

    public Student() {
        System.out.println("无参构造函数");
    }

    public Student(String name, int age) {
        System.out.println("有参构造函数");
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

}
