//常量，固定不变的量
/*
JDK（Java Development Kit）java开发工具包
JRE (Java Runtime Environments) java运行环境
JVM（java virtual machine） java虚拟机

1.字符串常量：凡是用双引号引起来的部分，都是字符串常量，例如："abc"、"Hello"
2.整数常量：直接写上的数字，例如：100,200
3.浮点数常量：有小数点的数字常量，例如：2.5，-3.15
4.字符常量，用单引号引起来的单个字符，例如'a'
5.布尔常量：取值。true,false
6.空常量：null，代表没有任何数据
*/
/*
* 基本数据类型
* 整数型 byte short int long
* 浮点型 float double
* 字符 char
* 布尔 boolean
* */
public class DemoConst {
public static void main(String[] args){
    //字符串常量
    System.out.println("ABC");
    System.out.println("");
    System.out.println("XYZ");


    //整数常量
    System.out.println(30);
    //浮点数常量
    System.out.println(3.14);
    //字符常量,
    System.out.println('a');
    System.out.println('6');
    //System.out.println('');单引号必须有且只有一个字符

    //布尔常量
    System.out.println(true);
    System.out.println(false);

    //空常量不能直接打印null
    //System.out.println(null)
}
}
