
    var function_1=function(callback){
        var num = 0;				//num = 0
        console.log(num++);			//num = 0
        (callback && typeof(callback) === "function") && callback(num);	//num = 1
    }
    function_1(function(num){console.log(num)});

num++执行时,num先参与当前环境下的调用,然后再输出.