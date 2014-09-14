function Robot(name){
    this.name = name;
    this.say = function(){console.log(this.name)}
}
Robot.prototype.age = 12;

var robot_1 = new Robot("cup");
console.log(robot_1.age);		//12

robot_1.age = 13;		// 重写本行代码,使输出结果如注释所示..
console.log(robot_1.age);		//13

var robot_2 = new Robot("bower");
console.log(robot_2.age);		//13