那么，原型prototype在哪里呢？

1.访问构造函数的原型,使用prototype属性

1.1访问自带构造函数Array的原型

    Array.prototype		// [ ]

1.2访问自定义构造函数Robot的原型

    var Robot = function(name) {
                    this.name = name;
                    this.say = function(){
                                console.log(this.name)
                             }
                    };
    Robot.prototype = { age: 12, sex: "boy" }	//设置构造函数Robot的原型对象(属性值可以为函数)
    Robot.prototype		//Object { age: 12, sex: "boy" }

2.访问一个实例的原型,使用__proto__属性.(注:访问实例对象的原型时,使用的__proto__不是标准属性，但是被大多数浏览器支持.)

    var Robot = function(name) {
                    this.name = name;
                    this.say = function(){
                                console.log(this.name)
                             }
                    };
    Robot.prototype = { age: 12, sex: "boy" }	//设置构造函数Robot的原型对象(属性值可以为函数)
    var robot = new Robot("bower")		//实例化一个对象
    robot.__proto__		//Object { age: 12, sex: "boy" }

虽然函数和对象的原型分别是"prototype"和"__proto__",但Javascript的原型链是基于 ‘__proto__’ 的,由于原型链的结构比较复杂,我们在本次学习的最后进行讲解.

