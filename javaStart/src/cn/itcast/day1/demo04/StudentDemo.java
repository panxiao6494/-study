package cn.itcast.day1.demo04;

public class StudentDemo {
    public static void main(String[] args) {
        Student xiaomig = new Student(); //执行构造方法

        Student xiaozhang = new Student("张丽", 20);
        System.out.println(xiaozhang.getName());
        xiaozhang.setAge(22);
        System.out.println(xiaozhang.getAge());

        new Student().setName("赵又廷");//匿名对象
    }
}
