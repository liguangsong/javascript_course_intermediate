在javascript的函数中，除了函数声明时定义的形参之外，每个函数还可以接收另一个隐藏的参数：this，又称this引用。
这里就讲一下this的作用以及不同场景下它的不同指向。this的值（即它的指向）取决于调用的方式。在javascript中this指向大致有四种情况：

1.无任何前缀的函数调用时，this指向顶层对象或者叫全局对象，浏览器里是window（nodejs里是global）。

    function fn(){
        console.log(this);
    }
    fn();                //打印结果为window{...}

2.方法调用的时候，this指向方法所在的对象

    var robot = {
                name:"cup",
                say:function(){
                       console.log(this.name)
                    }
                };
    robot.say();        //打印结果为'cup'

3.构造函数里，this指向新生成的实例

    function Robot(name){
        this.name = name;
        this.say = function(){
                    console.log(this.name)
                 }
    }
    var robot_1 = new Robot('bower');
    robot_1.say()        //  打印结果为'bower'
    var robot_2 = new Robot('cup');
    robot_2.say()        //  打印结果为'cup'

4.apply/call调用的时候，this指向apply/call方法中的第一个参数

    var robot_1 = {name:'cup'}
    var robot_2 = {name:'bower'}

    function say(){
      console.log(this.name)
    }
    say.call(robot_1)     //  打印结果为'cup'
    say.call(robot_2)     //  打印结果为'bower'

apply/call是js语法中一种特殊用法，两者的用法十分相似，具体内容在本节后续内容进行详细介绍。

那么