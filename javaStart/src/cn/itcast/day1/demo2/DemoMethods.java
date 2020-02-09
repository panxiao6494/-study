package cn.itcast.day1.demo2;
//定义方法完整格式
/*修饰符 返回值类型 方法名称(参数类型 参数名称，...){
    方法体
    return 返回值
}
返回值必须和方法前面的返回值类型对应
*/

public class DemoMethods {
    public static void main(String[] args) {
        //外层每循环一次换一次行
        for (int i = 0; i <= 5; i++) {
            for (int j = 0; j <= 10; j++) {
                System.out.print("*");//不换行，一次输出
            }
            System.out.println();
        }
        int re = sum(1, 2);//赋值调用
        re += 10;//对返回值进行运算
        System.out.println(re);
        System.out.println(getBool(2, 2));
        System.out.println(getSum(1, 6));
        System.out.println(getSum(2, 6, 8.0));
        System.out.println(isSame(1, 1));
    }

    //返回值为整型，传入a和b
    public static int sum(int a, int b) {
        int resul = a + b;
        return resul;
    }

    public static boolean getBool(int a, int b) {
        if (a == b) {
            return true;
        } else {
            return false;
        }
    }

    public static int getSum(int a, int b) {
        return a + b;
    }

    //方法重载,允许传入的参数个数不同 OverLoad,传入的参数指定的类型也可以不同
    public static int getSum(int a, int b, double c) {

        return (int) (a + b + c);
    }

    public static boolean isSame(long a, long b) {
        return a == b;
    }
}
