package cn.itcast.day1.demo2;

/*1.数组是一种引用类型
2.数组当中的多个数组，类型必须统一
3.数组的长度在程序运行期间不可改变
*数组的初始化：在内存中创建一个数组，并且向其中富裕一些默认值
1.动态初始化 在创建数组的时候，直接指定匀速的个数
2.静态初始化 不直接指定数组长度

如果整数类型，默认为0；
如果是浮点，默认为0.0；
如果是字符类型，默认为'\u0000'
如果是布尔，默认为false
如果是hi引用类型，默认为null



java内存划分为5部分
1.栈 存放的是方法中的局部变量
2.堆 凡是new出来的，都存在堆中
3.方法区
4.本地方法栈 与操作系统相关
5.寄存器  与CPU相关
* */
public class DemoArray {
    public static void main(String[] args) {
        //静态初始化
        int[] array = new int[300];
        array[2] = 32;
        System.out.println(array[1]);//默认为0
        System.out.println(array[2]);
        //动态初始化
        int[] arr5 = new int[]{2, 12, 35};
        String[] arr4 = new String[]{"hello", "world", "java"};

        int[] arr0 = {10, 20, 30};
        System.out.println(arr0);//内存地址
        System.out.println(arr0[1]);
    }
}
