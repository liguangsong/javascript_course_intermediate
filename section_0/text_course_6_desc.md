所谓函数的嵌套,顾名思义,就是在函数内部还可以声明和调用函数.例如

    function f1(){		//声明函数f1
        console.log("this is f1");
        function f2(){	//在函数f1内部声明函数f2
            console.log("this is f2");
        }
        f2();			//在函数f1内部调用函数f2
    }

当我们调用f1的时候，实际输出:

    this is f1
    this is f2

说明在调用函数f1时,其内部代码被运行,进行了函数f2的定义和调用.

