package cn.itcast.day1.demo2;

public class ArrayThree {
    public static void main(String[] args) {
        int[] arrA = {30, 65, 33, 67, 66};
        int[] arrB = arrA;//将arrA的指针指向arrB

        System.out.println(arrA);
        System.out.println(arrB.length);
        getArr(arrA);
    }

    public static void getArr(int[] b) {
        int max = b[0];
        for (int i = 1; i < b.length; i++) {
            if (b[i] > max) {
                max = b[i];
            }
        }
        System.out.println("最大值为" + max);
    }
}
