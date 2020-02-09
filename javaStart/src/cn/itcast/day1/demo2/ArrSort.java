package cn.itcast.day1.demo2;

public class ArrSort {
    public static void main(String[] args) {
        int[] arr = {20, 30, 40, 50};
        getSort(arr);
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + "");
        }
    }

    public static int[] getSort(int[] arr) {
        //对称交换实现数组反转
        for (int max = arr.length - 1, min = 0; min < max; max--, min++) {
            int temp = arr[max];
            arr[max] = arr[min];
            arr[min] = temp;
        }
        return arr;
    }
}
