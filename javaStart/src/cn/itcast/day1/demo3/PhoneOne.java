package cn.itcast.day1.demo3;

public class PhoneOne {
    public static void main(String[] args) {
        Phone one = new Phone();
        one.brand = "苹果";
        one.sendMsg("小明");

        Phone two = new Phone();
        two.brand = "三星";
        two.color = "红色";
        two.price = 36666.2;
        two.sendMsg("欧巴");
        method(two);
        System.out.println(getPhone());
    }

    //对象作为参数参与方法
    public static void method(Phone param) {
        System.out.println(param.brand);
    }

    //对象作为方法的返回值
    public static Phone getPhone() {
        Phone four = new Phone();
        four.brand = "小米手";
        return four;
    }
}
