package cn.itcast.day1.demo07;

import java.util.Arrays;

public class DemoArray {
    public static void main(String[] args) {
        int[] intArray = {10, 20, 30};
        //数组转化成字符串
        String intStr = Arrays.toString(intArray);
        System.out.println(intStr);

        int[] array1 = {9, 8, 5, 10};
        Arrays.sort(array1);
        System.out.println(Arrays.toString(array1));
        getSort();
    }

    public static void getSort() {
        String str = "as1uda23kn4adp0j34";
        char[] chars = str.toCharArray();
        Arrays.sort(chars);

        for (int i = chars.length - 1; i >= 0; i--) {
            System.out.print(chars[i]);
        }
    }
}
