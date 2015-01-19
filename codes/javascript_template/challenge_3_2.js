function SuperRobot(data) {
    var say = function() { return "Hello World!"; };

    return say;
}

var data = { name:"atom", age: 5};
var super_robot = SuperRobot(data);

console.log(super_robot());			//Hello World!
console.log(super_robot.age);		//5
console.log(typeof super_robot); 	//function