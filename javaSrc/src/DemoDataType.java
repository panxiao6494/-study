public class DemoDataType {
    public static void main(String[] args){
        //int mu9=1.2;
        //System.out.println(mu9);隐式转换，导致精度损失
        int num=(int) 100L;//将long类型强制转换为int类型，
        System.out.println(num);

        int num2=(int) 6000000000L;//此时强制转换的long类型已经超过int类型范围，导致溢出
        System.out.println(num2);

        int num3=(int) 3.99;
        System.out.println(num3);//精度损失

        char zifu1='A';
        System.out.println(zifu1+1);//66 'A'数学运算会用哟个二进制数字代表A,ASCII码

        byte num4=40;
        byte num5=50;
        //byte result=num4+num5; //数学运算会把类型转换成int类型，从而发生隐式类型转换

        int result=num4+num5;
        System.out.println(result);


    }
}
