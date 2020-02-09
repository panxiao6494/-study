package cn.itcast.day1.demo05;


public class ArrayObj {
    public static void main(String[] args) {
        //创建对象数组
        ObjectDemo[] array = new ObjectDemo[3];

        ObjectDemo one = new ObjectDemo("马尔扎哈", 20);
        ObjectDemo two = new ObjectDemo("迪丽热巴", 22);
        ObjectDemo three = new ObjectDemo("古力拉扎", 23);

        array[0] = one;
        array[1] = two;
        array[2] = three;
        System.out.println(array[0].getName());
    }
}
