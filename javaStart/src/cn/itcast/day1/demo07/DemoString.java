package cn.itcast.day1.demo07;

import java.util.Scanner;

public class DemoString {

    public static void main(String[] args) {
//        String str1 = "aaa,bbb,ccc";
//        //split方法的参数是一个正则表达式，不能以英文句点分割
//        String[] arr1 = str1.split(",");//将字符串以逗号分割生成数组
//        for (int i = 0; i < arr1.length; i++) {
//            System.out.println(arr1[i]);
//        }
        Scanner sc = new Scanner(System.in);
        System.out.println("请输入一个字符串");
        String input = sc.next();

        int countUpper = 0;//大写字母
        int countLower = 0;//小写字母
        int countNumber = 0;//数字
        int countOther = 0;//其他

        char[] charArray = input.toCharArray();//将字符串转化成字符数组
        for (int i = 0; i < charArray.length; i++) {
            char ch = charArray[i];
            if ('A' <= ch && ch <= 'Z') {
                countUpper++;
            } else if ('a' <= ch && ch <= 'z') {
                countLower++;
            } else if ('0' <= ch && ch <= '9') {
                countNumber++;
            } else {
                countOther++;
            }
        }
        System.out.println("大写字母有" + countUpper);
        System.out.println("小写字母有" + countLower);
        System.out.println("数字有" + countNumber);
        System.out.println("其他类型有" + countOther);
    }
}
