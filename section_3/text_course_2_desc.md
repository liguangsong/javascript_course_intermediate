那么，原型prototype在哪里呢？其实任何一个函数都有prototype属性。


访问自带的构造函数Array的原型

    Array.prototype		//访问结果为 [ ]

访问自定义构造函数Robot的原型

    function Robot(name) {
        this.name = name;
        this.say = function(){
                    console.log(this.name)
                 }
    };
    Robot.prototype = { age: 12, gender: "boy" }	//设置构造函数Robot的原型对象(属性值可以为函数)
    Robot.prototype		//Object { age: 12, gender: "boy" }

但是一般只有当把一个函数当构造函数使用时，我们才使用prototype。
上一节讲到，我们自定义类的时候，使用的那种方式是费内存的，我们使用prototype来定义就会不同。

    function Car(x,y){ 
            this.x = x;
            this.y = y;
            
    }
    
    Car.prototype.run = function(x_increase, y_increase){
        this.x += x_increase;
        this.y += y_increase;
    }
    Car.prototype.show = function(){
        console.log("( " + this.x + "," + this.y + " )");
    }

这样当我们new Car的时候，run和show并不会每次都分配内存，所以会比较省内存。

当我们得到一个实例之后，访问实例的原型,使用\_\_proto\_\_属性.(注:\_\_proto\_\_不是标准属性，但是被大多数浏览器支持.)

    var Robot = function(name) {
                    this.name = name;
                    this.say = function(){
                                console.log(this.name)
                             }
                    };
    Robot.prototype = { age: 12, gender: "boy" }	//设置构造函数Robot的原型对象(属性值可以为函数)
    var robot = new Robot("bower")		//实例化一个对象
    robot.__proto__		//Object { age: 12, gender: "boy" }

由于原型链的结构比较复杂,我们在本次学习的最后进行讲解.

