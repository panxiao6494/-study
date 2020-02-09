package cn.itcast.day1.demo04;


import java.util.Scanner;

//求键盘输入是哪个数字的最大值
public class AddScanner {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("请输入第一个数字:");
        int a = sc.nextInt();
        System.out.println("请输入第二个数字");
        int b = sc.nextInt();
        System.out.println("请输入第三个数字");
        int c = sc.nextInt();
        int max1 = a > b ? a : b;
        int max2 = max1 > c ? max1 : c;
        System.out.println("最大值是:" + max2);
    }
}
