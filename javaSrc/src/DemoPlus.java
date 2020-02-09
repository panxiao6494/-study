import org.omg.PortableInterceptor.ServerRequestInfo;

/*
 * 1.对于数值，那就是数学加法运算
 * 2.对于字符char类型来说，在计算之前，char会被提升为int，然后再计算
 * 3.对于字符串String(首字母大写)，并不是关键字，加号戴安字符串拼接操作
 * 任何数据类型和字符串相加都会变成字符串
 *
 * */
public class DemoPlus {
    //加法运算
    public static void main(String[] args) {
        String str1 = "Hello";
        System.out.println(str1);

        System.out.println("Hello" + "World");

        String str2 = "Java";
        System.out.println(str2 + 20);//Java20
        System.out.println(str2 + 20 + 30);

        int num3 = 30;
        System.out.println(num3++);//30,先用然后再加
        System.out.println(num3);//31
    }
}
