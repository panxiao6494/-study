package cn.itcast.day1.demo04;

import java.util.Scanner;//导包

public class ScannerDemo {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);//代表从键盘输入

        int num = sc.nextInt();
        //键盘输入数字后回车，执行输出函数
        System.out.println("输入的数字是" + num);

        String str = sc.next();
        System.out.println("输入的字符是" + str);
        System.out.println(num + str);
    }


}
