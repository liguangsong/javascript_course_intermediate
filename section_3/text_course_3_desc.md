大多数面向对象语言，都有new关键字。他们大多和一个构造函数一起使用，能够实例化一个类。JavaScript的new关键字是异曲同工的。

当我们，执行

    new Robot("bower")

实际上是得到了一个从Robot.prototype继承而来的一个对象。如果要理解原型继承中new的意义，还是这样理解最好。

如果我们要描述new的工作流程，如下：

1.分配一个新的空对象.

2.设置新对象的相关属性、方法，例如继承Robot.prototype上的各式方法、属性。注意，这里执行的并不是拷贝，而是类似于引用的方法,我们叫它代理(比如Robot.prototype对象的属性发生变化时,由Robot生成的实例对象直接继承的相应属性也会变化)。

3.将这个新对象作为构造函数的执行上下文（其this引用指向这个新的对象），并执行构造函数.

4.返回这个对象到执行new Robot("bower")的位置,赋值给前面的变量名.

    var Robot = function(name) {        //声明一个构造函数
                    this.name = name;
                    this.say = function(){
                                console.log(this.name)
                             }
                    };
    Robot.prototype = { age: 12, sex: "boy" }	//设置构造函数Robot的原型对象(属性值可以为函数)
    var robot = new Robot("bower")		//实例化一个对象

当执行new Robot("bower")时

首先,其中Robot.prototype这个对象的值{age:12,sex:"boy"}会被新的空对象继承,所以后面robot.age的值是12,robot.sex的值是"boy".

然后,执行构造函数,运行时执行的方法可以理解为Robot.apply(robot,["bower"])的方式.此时会去设置新对象的属性name="bower";say=function(){this.name}.所以后面robot.name的值是"bower".执行robot.say()会输出"bower".

其实,最后才把新的对象的值赋给变量robot.

但其中age和sex属性是继承属性,name和say是自有属性(这两个概念下一页将会介绍).

