上述代码逐行解释如下：
	
    function compare(a, b){
		function result(left, right)
        { //定义函数result
            var result = left>right ? "bigger" : "not less";  //根据两个参数比较的结果true或false来获取字符串结果"bigger"或"not less"
    		return result;	//将结果返回给result函数被调用的位置
    	}
    	var result = result(a, b);	//调用函数result,获取返回值
    	var string = a + " is " + result + " than " + b;	//拼接字符串
    	return string;		//将结果返回compare函数面被调用的位置
    }
    console.log( compare(5, 3) );	//5 is bigger than 3