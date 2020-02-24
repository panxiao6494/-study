package cn.itcast.day1.demo08;

//子类继承父类的方法，也可以重写父类中的某些方法
public class PubFun {
    public static void main(String[] args) {
        Son son = new Son();
        son.call();
        son.send();
        son.show();
        son.meth();
    }
}
