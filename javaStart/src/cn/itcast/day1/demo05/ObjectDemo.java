package cn.itcast.day1.demo05;

public class ObjectDemo {
    private String name;
    private int age;

    public ObjectDemo(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public ObjectDemo() {
    }

    public String getName() {
        return name;
    }

    public ObjectDemo setName(String name) {
        this.name = name;
        return this;
    }

    public int getAge() {
        return age;
    }

    public ObjectDemo setAge(int age) {
        this.age = age;
        return this;
    }


}
