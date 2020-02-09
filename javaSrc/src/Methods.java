public class Methods {
    //入口函数调用方法
    public static void main(String[] args) {
        //调用方法
        cook();
    }

    //定义方法
    public static void cook() {
        System.out.println("洗菜");
        int a = 5;
        int b = 8;
        // short re=a+b;//变量转换会溢出

        short result = 5 + 8;//编译的常量优化
        System.out.println(result);
    }

}
