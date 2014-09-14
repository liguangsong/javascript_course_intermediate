    function Robot(name){
        this.name = name;
        this.say = function(){console.log(this.name)}
    }
    Robot.prototype.age = 12;

    var robot_1 = new Robot("cup");
    console.log(robot_1.age);		//12

    Robot.prototype.age = 13;
    console.log(robot_1.age);		//13

    var robot_2 = new Robot("bower");
    console.log(robot_2.age);		//13
