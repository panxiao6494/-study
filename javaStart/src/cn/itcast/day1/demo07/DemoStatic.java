package cn.itcast.day1.demo07;

/*
 * 静态方法可以访问静态属性，不能访问非静态属性，因为静态先产生
 *
 * */
public class DemoStatic {
    public static void main(String[] args) {
        Student one = new Student("郭靖", 20);
        Student.room = "101教室";//静态方法可以共用，不可改变
        Student two = new Student("黄蓉", 18);

        System.out.println(two.room);
        System.out.println(two.getId());//自动生成id
    }
}
