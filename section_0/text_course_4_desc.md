JavaScript代码的执行顺序是按照由上到下,由左到右的顺序依次执行的.
如:

    var num1;
    var num2;
    console.log(num1);  //undefined
    console.log(num2);  //undefined
    num1 = 5;
    num2 = 3;
    console.log(num1+num2);  //8

输出依次为 undefined  undefined  8

代码会按照行数1,2,3,4,5,6,7依次执行.

