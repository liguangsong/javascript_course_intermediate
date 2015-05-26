所有的函数都默认包含apply和call这两种方法，从这个角度来看，函数其实也是一种对象。
我们可能会说，函数是一种对象？那函数上也可以自定义属性吗？实际上真的可以。这种手法常被用来定义所谓的类成员。

调用函数的apply或call方法,就相当于调用该函数.不考虑函数内的this引用的话,这和类似于 say() 这样的普通调用方式是一样的。
而apply和call的功能是，通过传参的方式，强制函数内的this指定某一对象。this引用的会被指向apply/call的第一个参数。

下面是一个使用了apply方法和call方法的函数调用的例子。
    
    function say(){ console.log(this.name); }
    var robot = {name:"cup"};
    
    say.apply(robot)			// 打印结果为cup
    //通过apply调用函数say。函数内的this引用引用了对象robot。
    
    say.call(robot)			// 打印结果为cup
    //通过call调用函数say。函数内的this引用引用了对象robot。
    
下面是一个使用了apply方法和call方法的对某对象的方法进行调用的例子。
    
    var robot_1 ={
                    name:"cup",
                    say:function(){
                            console.log(this.name)
                            }
                  };
    var robot_2 ={ name:"bower" };
    
    robot.say() //打印结果为cup
    
    robot_1.say.apply(robot_2)			// 打印结果为bower
    //通过apply调用robot_1.say方法。方法内的this引用引用了robot_2
    
    robot_1.say.call(robot_2)				// 打印结果为bower
    //通过call调用robot_1.say方法。方法内的this引用引用了robot_2


apply与call之间的不同之处在于两者对其他参数的传递方式。

对于apply来说,剩余的参数将通过数组来传递,而call是直接按参数列表传递.我们通过下面的例子来了解这一差异.

    function say(age, gender){console.log("My name is " + this.name + ",I'm a " + age + " years old " + gender + ".")}
    
    say.apply({name:"cup"}, [12, "boy"])			//打印结果为 My name is cup,I'm a 12 years old boy.
    // this.name = "cup", age = 12, gender = "boy"  作为第二个参数的数组中的元素都是函数say的参数，按顺序依次对应
    
    say.call({name:"cup"}, 12, "boy")				//打印结果为 My name is cup,I'm a 12 years old boy.
    // this.name = "cup", age = 12, gender = "boy"  从第二个参数起的参数都是函数say的参数，按顺序依次对应

在实际的编程过程中，我们有时会为了函数回调而使用apply或call调用。详细内容请参见后续课程。