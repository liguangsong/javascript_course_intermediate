返回值 return 用来在函数体内向调用本函数的位置返回某些数据.
例如:

    //无返回值
    function sum(a,b){
        var result = a+b;
    }
    var sum = sum(1,2);  //sum的值为undefined

当函数没有返回值的时候,会有一个默认的返回值undefined,所以上述代码执行时

    var sum = sum();

等价于

    var sum = undefined;

有返回值

    //有返回值
    function sum(a,b){
        var result = a+b;
        return result;
    }
    var sum = sum(1, 2);  //sum的值为3

调用sum(1,2)时,该函数实际的结果为被返回的result的值,即3.
