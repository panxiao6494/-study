package cn.itcast.day1.demo06;

/*
 * <E>泛型，装在集合当中所有的元素，全都是统一的类型
 *
 * */

import java.util.ArrayList;

public class DemoList {

    public static void main(String[] args) {
        //泛型集合，数组集合
        ArrayList<String> list = new ArrayList<>();
        //打印出来的不是地址，是内容
        System.out.println(list);
        list.add("赵丽颖");
        list.add("迪丽热巴");
        list.add("柳岩");
        list.add("马大脚");
        list.add("转转");
        String name = list.get(1);//从集合中取元素
        System.out.println(name);

        String who = list.remove(3);//删除指定索引的元素
        System.out.println("被删除的人是" + who);
        System.out.println(list);
        int size = list.size();
        System.out.println("集合的长度是" + size);

        for (int i = 0; i < list.size(); i++) {
            System.out.println(list.get(i));
        }
    }


}
