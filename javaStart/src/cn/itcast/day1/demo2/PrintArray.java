package cn.itcast.day1.demo2;

import java.util.Arrays;

public class PrintArray {
    public static void main(String[] args) {
        int[] array = {10, 20, 0, 66};
        System.out.print("[");
        for (int i = 0; i < array.length; i++) {
            if (i == array.length - 1) {
                System.out.println(array[i] + "]");
            } else {
                System.out.print(array[i] + ",");
            }
        }
        //使用面向对象toString方法
        System.out.println(Arrays.toString(array));
    }
}
