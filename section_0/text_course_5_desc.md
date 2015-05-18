几乎所有的情况都是从上到下，从左到右解释执行，但是有一种情况除外:

    console.log(num1);  //打印结果为undefined
    console.log(num2);  //打印结果为undefined
    var num1 = 5;
    var num2 = 3;
    console.log(num1+num2);  //打印结果为8

尽管num1和num2的定义在后面，输出仍然为 
    
    undefined  
    undefined  
    8

那是因为真正运行时在JavaScript代码中变量的定义语句(不包括赋值语句)会被提前到所有代码之前执行.所以这段代码运行时的效果和上一页代码是等价的.所以不会造成由于变量未定义而出错的结果.


但是如果后面没有定义语句，就没这么幸运了，例如:

    console.log(num1);  //打印：Error: num1 is not defined
    console.log(num2);  //当代码运行出错时,将停止运行后续代码.所以第二行没有被执行到.

因为代码中用到了未定义的变量,所以会在console控制台内报错.

