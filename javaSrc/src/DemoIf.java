public class DemoIf {
    public static void main(String[] args) {
        System.out.println("今天天气不错");
        int age = 16;
        if (age >= 18) {
            System.out.println("可以进入");
        } else {
            System.out.println("不能进入！");
        }
        call();
        getNum(52);
    }

    public static void call() {
        int score = 20;
        if (score >= 90) {
            System.out.println("优秀");
        } else if (score < 90 && score >= 80) {
            System.out.println("普通");
        } else if (score < 80 && score >= 60) {
            System.out.println("及格");
        } else {
            System.out.println("不及格");
        }
    }

    public static void getNum(int num) {
        if (num % 2 == 0) {
            System.out.println("是偶数");
        } else {
            System.out.println("是奇数");
        }
    }
}
