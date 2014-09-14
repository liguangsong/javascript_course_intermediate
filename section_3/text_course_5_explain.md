
    function Robot(name){this.name = name;};	//自定义构造函数
    Robot.prototype = {age:12, sex:"boy"};		//设置将会被集成的原型对象
    var robot = new Robot("bower");			//通过构造函数实例化一个对象
    //通过__proto__寻找原型链的关系:			//所有的__proto__属性均会指向该实例对象所继承到的原型对象即*.prototype
    //robot的原型对象是Robot.prototype,即默认情况下Robot.prototype与robot.__proto__是同一个对象.
    //Robot的原型对象是Function.prototype.
    //Robot.prototype和Function.ptototype的原型对象都是Object.prototype.
    //Object.prototype的原型对象是null.
