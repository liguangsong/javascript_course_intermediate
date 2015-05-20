二.对象的函数

1.方法调用(调用对象的函数属性)

对象的函数属性有一种区别于一般函数的名称，叫做 **方法**。相应的，调用对象的函数属性时就叫做方法的调用.

在字面量表达式的内容里我们定义过一个属性值含有函数的对象,那我们定义在对象内部的函数(即方法)如何调用呢?
		
    //通过字面量定义的对象
    var robot = { 
                    x           : 2, 
                    say_hello   : function(){ console.log( "Hello!" ); }
                };
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

2.构造函数调用(相当于类的用法,用来生成对象)

在 对象的new表达式 内容的代码里:

    var robot = new Object();				//生成一个对象robot

这里的 Object 很明显是一个函数，但我们又说它是一个类，那它到底是一个函数还是一个类？
其实，类是一个抽象的概念，像是一个人的灵魂，当我们创建一个类之后，想要实例化，就必须要有一个具体的函数调用。
那么这个具体的函数被称之为构造函数，它就像是跨在阴阳两界的一座桥。

Object()是JavaScript内置对象Object的构造函数。
当然我们也可以定义自己类，自己的构造函数,并用来生成对象(将在后续章节里讲到).

3.动态访问对象的函数

对象的函数属性依然是函数，所以除了点+函数名的方式访问，对象也可以通过[]的方式访问。比如

     var robot = {
                        x           : 2,
                        say_hello   : function(){ console.log( "Hello!" ); }
                 };
     robot["say_hello"](); //等价于 robot.say_hello();