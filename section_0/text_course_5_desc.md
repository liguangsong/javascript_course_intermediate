但是有一种情况除外:

    console.log(num1);  //undefined
    console.log(num2);  //undefined
    var num1 = 5;
    var num2 = 3;
    console.log(num1+num2);  //8

输出仍然为 undefined  undefined  8

那是因为真正运行时在JavaScript代码中变量的定义语句(不包括赋值语句)会被提前到所有代码之前执行.所以第二段代码运行时的效果和第一段代码是等价的.
所以不会造成由于变量未定义而出错的结果.
例如:

    console.log(num1);  //Error: num1 is not defined
    console.log(num2);  //当代码运行出错时,将停止运行后续代码.所以第二行没有被执行到.

代码中用到了未定义的变量,所以会在console控制台内报错.

