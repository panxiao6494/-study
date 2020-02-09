public class BiJiao {
    public static void main(String[] args) {
        System.out.println(10 > 5 || 5 > 2);//输出布尔值true

        int a = 10;
        int b = 20;
        int max = a > b ? a : b;//三元运算
        System.out.println("最大值" + max);
        //int result = 3 > 4 ? 2.5 : 10; 会发生隐式转换
    }
}
