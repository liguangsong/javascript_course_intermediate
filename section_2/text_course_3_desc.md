所有的函数(函数其实也是一种对象)都默认包含apply和call这两种方法,他们通过调用函数的this引用,可以指向任意特定的对象.可以认为apply和call能够强制函数内的this指定某一对象.

下面是一个使用了apply方法和call方法的函数调用的例子.
    
    function say(){ console.log(this.name); }
    var robot = {name:"cup"};
    
    say.apply(robot)			// 打印结果为cup
    //通过apply调用函数say. 函数内的this引用引用了对象robot.
    
    say.call(robot)			// 打印结果为cup
    //通过call调用函数say. 函数内的this引用引用了对象robot.
    
下面是一个使用了apply方法和call方法的对方法调用的例子.
    
    var robot_1 ={
                    name:"cup",
                    say:function(){
                            console.log(this.name)
                            }
                  };
    var robot_2 ={ name:"bower" };
    
    robot_1.say.apply(robot_2)			// 打印结果为bower
    //通过apply调用robot_1.say方法.方法内的this引用引用了robot_2
    
    robot_1.say.call(robot_2)				// 打印结果为bower
    //通过call调用robot_1.say方法.方法内的this引用引用了robot_2

对函数调用apply或call方法,就能够调用该函数.不考虑函数内的this引用的话,这和类似于 say() 这样的普通调用方式是一样的.

apply和call两者的区别仅在于被调用的函数(方法)内的this引用,this引用的是作为apply/call的第一个参数被传递的对象.而apply与call之间的不同之处在于两者对其他参数的传递方式.

对于apply来说,剩余的参数将通过数组来传递,而call是直接按原样传递.我们通过下面的例子来了解这一差异.

    function say(sex,age){console.log("My name is " + this.name + ",I'm a " + age + "years old " + sex + ".")}
    
    say.apply({name:"cup"}, [12, "boy"])			//打印结果为 My name is cup,I'm a boyyears old 12.
    // this.name = "cup", age = 12, sex = "boy"  作为第二个参数的数组中的元素都是函数say的参数.
    
    say.call({name:"cup"}, 12, "boy")				//打印结果为 My name is cup,I'm a boyyears old 12.
    // this.name = "cup", age = 12, sex = "boy"  从第二个参数起的参数都是函数say的参数.

在实际的编程过程中,,我们常常会为了函数回调而使用apply或call调用.详细内容请参见后续的Javascript高级课程.