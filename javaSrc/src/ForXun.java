public class ForXun {
    public static void main(String[] args) {
        for (int i = 1; i <= 5; i++) {
            System.out.println("我错了！");
        }
        System.out.println("Stop");
        setGame();
        getSum(100);
        getHours();
    }

    public static void setGame() {
        int a = 0;
        int sum = 0;
        while (a < 5) {
            sum += a;
            a++;
        }
        System.out.println(sum);
    }

    //求1-100之间所有偶数的和
    public static void getSum(int num) {
        int a = 0;
        for (int i = 0; i <= num; i++) {
            if (i % 2 == 0) {
                a += i;
            }
        }
        System.out.println(a);
    }

    public static void getHours() {
        //外层循环一次，内层循环60次
        for (int hour = 0; hour < 24; hour++) {//外层控制小时

            for (int minute = 0; minute < 60; minute++) {//内层控制分钟
                System.out.println(hour + "点" + minute + "分");//必须和字符串相加
            }
        }
    }
}
