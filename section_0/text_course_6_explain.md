
    var num1 = 3;
    var num2 = 5;
    function compare(a, b){
        return a>b ? "bigger" : "not less";  //将 a>b ? "bigger" : "not less" 语句的结果当做返回值,由return传递给被调用的位置.
    }
    result = compare(num1, num2);  //调用compare函数,获取调用结果.
    console.log( num1 + " is " + result + " than " + num2 );  //将结果组合成字符串语句,在console控制台输出. 3 is not less than 5
