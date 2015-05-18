 
    var num1 = 5;
    console.log(num1);
    console.log(num2);
    var num2 = 3;
    console.log(num1+num2);

实际运行时等价于下列代码：

    var num1, num2;
    num1 = 5;
    console.log(num1);  //打印结果为5
    console.log(num2);  //打印结果为undefined
    num2 = 3;
    console.log(num1+num2);  //打印结果为8

所以可以得到

    5
    undefined 
    8
    
但是希望大家不要使用这个特性，并不是所有的语言特性都值得使用。