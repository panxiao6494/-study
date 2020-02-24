package cn.itcast.day1.demo08;

/*
 * super关键字用法
 * 1.在子类成员方法中，调用父类变量
 * 2.在子类成员方法中，访问父类成员方法
 * 3.在子类构造方法中，访问父类的构造方法
 * super不能和this同时使用
 *
 * */
public class Son extends Father {
    int num = 2;

    public Son() {
        super(10);//调用super重载父类中构造方法，super只能用一
    }

    public void meth() {

        System.out.println(super.num);//用的是父类中的num
        System.out.println(this.num);
    }

    @Override
    public void show() {
        System.out.println("显示号码");
        System.out.println("显示姓名");
        System.out.println("显示头像");
    }
}
