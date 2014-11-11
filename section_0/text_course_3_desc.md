[2]变量值与实际值

    var num1 = 5;
    var num2 = num1;
    console.log(num1); // 打印结果为5
    console.log(num2); // 打印结果为5

其中 var num2 = num1 是将变量num1的实际值 5 ,赋值给新定义的变量 num2.

当 num1 的值被改变时也不会间接影响 num2 已有的值.
所以

    var num1 = 5;
    var num2 = num1;   //num被赋予和num1相同的值,但赋值之后num2和num1将不会有任何关联关系.
    num1 = 3;          //num1的值发生了变化,num2的值不会发生相应的改变.
    console.log(num1); // 打印结果为3
    console.log(num2); // 打印结果为5

变量传值(如: var num2 = num1)之后,相关的两个变量(num1, num2)之间不会有任何关联.所以num1重新赋值之后,num2不会产生相应的变化.
其对应的盒型演示图如下:
![define variables and set value](http://course-image.qiniudn.com/js_basic_define_variables_and_set_value.png)

