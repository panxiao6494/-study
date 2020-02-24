package cn.itcast.day1.demo07;

//求范围在-10.8~5.9之间，并且绝对值>6,<2.1之间的所有整数
public class DemoMath {

    public static void main(String[] args) {
        double min = -10.8;
        double max = 5.9;
        int count = 0;
        for (int i = (int) min; i < max; i++) {
            int abs = Math.abs(i);
            if (abs > 6 || abs < 2.1) {
                System.out.println(i);
                count++;
            }
        }
        System.out.println(count + "个");
    }
}
