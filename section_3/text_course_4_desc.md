Javascript对象(如robot)拥有自有属性(如通过构造函数this.name=name设置的属性)和继承属性(例如代理自Robot.prototype的属性)两种。

在查询对象robot的属性age时，先查找robot中自有属性的age属性，如果没找到，则查找robot继承属性(也就是robot的原型对象:robot.\_\_proto\_\_)中的age属性，直到查找到age或者一个原型是null的对象为止.

在给对象robot的age属性赋值时，如果robot自有属性中已经有一个属性age，则改变age的值，若robot中不存在自有属性age,只存在继承属性age或者所有属性中都没有age属性，则为robot创建一个自有属性age并为其赋值.

也就是说，只有在查询时原型链才会起作用。赋值只针对自有属性.

    var Robot = function(name) {        //声明一个构造函数
                    this.name = name;
                    this.say = function(){
                                console.log(this.name)
                             }
                    };
    var info = { age: 12, sex: "boy" };
    Robot.prototype = info;

    var robot = new Robot("bower");

    console.log(robot);			//打印结果为Robot {name: "bower", say: function, age: 12, sex: "boy"}
    console.log('age' in robot);	//打印结果为true
    console.log(robot.hasOwnProperty('age'));	//打印结果为false

    robot.name = "cup";
    robot.age = 13;

    console.log(robot);			//打印结果为Robot {name: "bower", say: function, age: 12, sex: "boy"}
    console.log('age' in robot);	//打印结果为true
    console.log(robot.hasOwnProperty('age'));	//打印结果为true

可以使用in 或者 hasOwnProperty 来判断对象中是否存在属性或者是否存在自有属性。

