package cn.itcast.day1.demo06;

import jdk.nashorn.internal.runtime.ListAdapter;

import java.util.ArrayList;
import java.util.Random;

/*
 * ArrayList只能存储引用数据类型，若想存储基本数据类型，则要用包装类
 * byte          Byte
 * short         Short
 * int           Integer
 * long          long
 * float         Float
 * double        Double
 * char          Character
 * boolean       Boolean
 *
 * */
public class DemoBasic {

    public static void main(String[] args) {
//        ArrayList<Integer> listA = new ArrayList<>();
//        listA.add(200);
//        System.out.println(listA);
//获取一个长度为6的int数字集合，每一个数字为小于33的随机数
        ArrayList<Integer> list = new ArrayList<>();
        Random r = new Random();
        for (int i = 0; i < 6; i++) {
            int num = r.nextInt(33);
            list.add(num);
        }

        for (int i = 0; i < list.size(); i++) {
            System.out.println(list.get(i));
        }
    }

}
