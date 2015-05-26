由于一共只有上述的四种情况，所以Javascript里this引用肯定能够指向某一特定对象。可以认为this引用是一种在js代码中随时都可以使用的只读变量.

在最外层代码中,this引用引用的是全局对象.
在函数内,this引用根据函数调用的方式不同而有不同的含义.

上一节中我们介绍的this指向四种情况归根结底是this在对象中的用法(无论是函数,构造函数,方法和apply/call,都是基于对象的用法).

通过类和对象这课程的学习我们知道,方法是对象的属性所引用的函数.下面是一个关于关于方法和this引用的具体例子解析.

1,方法内的this调用

    //对象定义
    var robot = {
        name : "cup",
        say : function() { console.log( "Hi, I'm " + this.name + "."); }
    }
    robot.say()			// 打印结果为 Hi, I'm cup.
    //对象robot是被调用的对象，say是方法。

上面的例子：首先是将对象赋给了变量robot。这个对象有两个属性。属性name的值为"cup"，属性say的值是一个函数。该函数称作say方法。
被调用的方法say内的关键字this引用指向了被调用的对象robot。

2.函数内的this调用

如果将含有this的对象方法取出来单独执行会怎么样呢》

    var robot = {
        name : "cup",
        say : function() { console.log( "Hi, I'm " + this.name + "."); }
    }
    var fn = robot.say;
    // 将robot.say引用的函数赋值给全局变量 fn.

    fn()						// 打印结果为 Hi, I'm .
    // 执行函数(全局的方法),this引用了全局对象,由于全局对象没有name属性,所以没有取到值.

根据我们之前讲的，现在这个函数由于是无任何前缀的直接调用的，this应该是指向了全局对象，我们确认一下this是否指向了全局对象

    var robot = {
        name : "cup",
        say : function() { console.log( "Hi, I'm " + this.name + "."); }
    }
    var fn = robot.say;
    //将robot.say引用的函数赋值给全局变量 fn.
    //相当于给全局对象定义了一个属性fn,并赋予robot.say所指代的函数.

    var name = "bower",
    //相当于给全局对象定义了一个属性name,赋值为"bower"，在浏览器里，上面这行代码等价于 window.name = "bower";

    fn()					// 打印结果为 Hi, I'm bower.
    //执行函数fn(相当于调用全局对象的fn方法),执行时this引用了全局对象.所以this.name的值是"bower".

那么