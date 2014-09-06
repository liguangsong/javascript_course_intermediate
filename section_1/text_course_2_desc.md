二.函数的使用方法

在上一小节内容里,我们使用到了两种不同于一般函数的使用方法,下面我们就总结一下到目前为止,函数所有的使用方法.

1.函数调用(普通函数调用)

在JavaScript基础课程里面,我们了解到了如何定义并调用一个普通形式的函数.

    function say_hello(){
        console.log("Hello!");
    }
    say_hello();	        	//调用函数

我们知道,数据共有六种类型(String,Number,Boolean,Null,Undefined,Object),那函数的类型是什么呢?

我们取say_hello函数的类型:
	
    typeof(say_hello);

输出:

    js > function

前面说过,数据类型只有六种,不包括函数.这是因为函数并不是一种全新的类型,他只是对象的一种特殊表现形式.所以函数是一种对象,但反过来,对象不一定就是函数.函数是一种包含了可执行代码,并能够被其他代码调用的特殊对象.

2.方法调用(调用对象的函数属性)

对象的函数属性有一种区别于一般函数的名称,叫做 方法.相应的,调用对象的函数属性时就叫做方法的调用.

在字面量表达式的内容里我们定义过一个属性值含有函数的对象,那我们定义在对象内部的函数(即方法)如何调用呢?
		
    //通过字面量定义的对象
    var robot = { x: 2, say_hello: function(){ console.log( "Hello!" ) } };
    robot.say_hello();		    //调用对象的方法

输出:

    js > Hello!

通过new表达式生成的对象

    var robot = new Object();
    robot.say_hello = function(){ console.log( "Hello!" ) };
    robot.say_hello();		    //调用对象的方法

输出:

    js > Hello!

可见,无论以何种方法生成的对象,其结果是一样的.

3.构造函数调用(相当于类的用法,用来生成对象)

在 对象的new表达式 内容的代码里:

    var robot = new Object();				//生成一个对象robot

这里的 类( Object() ) 很明显是一个函数,这样能够用来生成对象的函数叫做 构造函数,也就是类.JavaScript中"类" 和 "构造函数"是一个概念.

Object()是JavaScript内置的构造函数,当然我们也可以定义自己的构造函数,并用来生成对象(将在后续章节里讲到).