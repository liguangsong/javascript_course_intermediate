robot_2.say = robot_1.say

这一行代码的作用是:定义对象robot_2的say属性,并将robot_1的say属性值赋予robot_2.say,由于该属性值是一个匿名函数,所以,robot_2.say实际上是该对象的一个方法.