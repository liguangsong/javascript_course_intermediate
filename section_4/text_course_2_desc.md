一个回调函数（例如“function_1”），是一个被作为参数传递给另一个函数（例如“function_2”）的函数，回调函数在function_2中被调用。一个回调函数本质上是一种编程模式（为一个常见问题创建的解决方案），因此，使用回调函数也叫做回调模式。

下面是另一个Javascript中典型的回调函数的例子：

    var function_1=function(callback){
        console.log("do something.");
        (callback && typeof(callback) === "function") && callback();
    }
    var function_2=function(){console.log("function_2 is running.")};
    function_1(function_2);
    //callback && typeof(callback) === "function" 的作用是判断参数callback是否被传入,并且判断该参数是否是一个可执行函数.

上面的代码是将一个具名函数function_2传入函数function_1.其实际效果等同于下面的匿名函数传递.

    var function_1=function(callback){
        console.log("do something.");
        (callback && typeof(callback) === "function") && callback();
    }
    function_1(function(){console.log("function_2 is running.")});

在此，注意到我们将一个匿名函数（没有名字的函数）作为参数传递给了function_1,当function_1中调用执行该匿名函数callback时才会去执行该传入的函数,也就是说,该匿名函数只是在合适的时机去被执行。

记得此前的基础课程里我们说过Javascript编程的主要内容就是代码(编写代码)和数据(处理数据),但是此时代码和数据之间的区别已经很模糊了。

下一部分我们来了解一下回调的使用场景.