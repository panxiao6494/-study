import javax.swing.*;

public class DemoOperator {
    public static void main(String[] args) {
        System.out.println(20 + 30);

        int a = 20;
        int b = 30;
        System.out.println(a - b);

        int x = 10;
        int y = 3;
        int result = x / y;
        System.out.println(result);//除法不取余
        int result2 = x % y;
        System.out.println(result2);//取模运算
    }

}
