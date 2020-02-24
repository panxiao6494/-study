package cn.itcast.day1.demo06;

import java.util.ArrayList;
import java.util.Random;
import java.util.zip.ZipInputStream;

public class DenoStuednt {
    public static void main(String[] args) {
        ArrayList<Student> list = new ArrayList<>();

        Student one = new Student("洪七公", 50);
        Student two = new Student("欧阳峰", 30);
        Student three = new Student("黄药师", 30);
        Student four = new Student("段智兴", 30);

        list.add(one);
        list.add(two);
        list.add(four);
        list.add(three);

        for (int i = 0; i < list.size(); i++) {
            System.out.println(list.get(i).getName());
        }

        ArrayList<String> listB = new ArrayList<>();
        listB.add("张三丰");
        listB.add("张无忌");
        listB.add("宋元琼");

        // System.out.println(listB);
        printList(listB);
        filterInt();
    }

    public static void printList(ArrayList<String> list) {
        System.out.print("{");

        for (int i = 0; i < list.size(); i++) {
            String name = list.get(i);
            if (i == list.size() - 1) {
                System.out.print(name + "}");
            } else {
                System.out.print(name + "@");
            }
        }
    }

    //生成随机数字的集合，将随机数字筛选放到小集合中
    public static void filterInt() {
        ArrayList<Integer> intList = new ArrayList<>();
        Random r = new Random();
        for (int i = 0; i < 20; i++) {
            intList.add(r.nextInt(100));
        }
        ArrayList<Integer> intLis = new ArrayList<>();
        for (int i = 0; i < intList.size(); i++) {
            if (intList.get(i) % 2 == 0) {
                intLis.add(intList.get(i));
            }
        }
        System.out.println(intLis);
    }
}
