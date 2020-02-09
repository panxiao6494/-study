package cn.itcast.day1.demo04;

import java.util.Random;
import java.util.Scanner;

//Random获取随机数
public class DenoRandom {
    public static void main(String[] args) {
        Random num = new Random();
        int a = num.nextInt(100);
        Scanner sc = new Scanner(System.in);
        while (true) {
            System.out.println("请输入你猜测的数据");
            int guessNum = sc.nextInt();
            if (guessNum > a) {
                System.out.println("太大了，请重试");
            } else if (guessNum < a) {
                System.out.println("太小了，请重试");
            } else {
                System.out.println("恭喜你，猜中了");
                break;
            }
        }
        System.out.println("游戏结束");
    }
}
