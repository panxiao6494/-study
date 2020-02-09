public class IfElse {
    public static void main(String[] args) {
        int x = 10;
        int y;
        if (x >= 3) {
            y = 2 * x + 1;
        } else if (x > -1 && x < 3) {
            y = 2 * x;
        } else {
            y = 2 * x - 1;
        }
        System.out.println(y);
        getSum(6);
    }

    public static void getSum(int num) {
        switch (num) {
            case 20:
                System.out.println("NI");
                break;
            case 30:
                System.out.println("好");
                break;
            default:
                System.out.println("不是");
                break;
        }
    }
}
