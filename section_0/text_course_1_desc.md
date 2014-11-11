变量的作用是给一个数据值标注名称.像下面这样就是在为数值 5 标注了一个名称 num1.
注:JavaScript中变量名,函数名,参数名的命名规范:至少由字母,下划线,美元符号,数字其中的一种组成,但不能以数字开头.如: a , data , num1 ,  _time , $name , get_a_num 等

    var num1 = 5;

var num1  是在定义一个名为num1的变量.
num1 = 5  是在给变量num1赋值为5.

上面的表达式: var num1 = 5;可拆解为

    var num1;       //定义变量需用到关键字 var
    num1 = 5;

两个语句,拆解后和  var num1 = 5 的实际运行效果完全一致.
可以认为变量就是箱子,var num1 就是制造了一个叫做 num1 的箱子,而 num1=5 则是给这个箱子装进一个值为 5 的数据.从此之后,箱子 num1 内就有了一个实际的值 5.

变量也可以只定义,不赋值.如:

    var num1;

这时被定义的变量num1的值是 undefined .
注:变量如果仅仅被定义,而没有被赋值,则该变量的默认值为 undefined (表示没有值,是一个'空'的箱子,只是'空'以undefined来表示).
即:

    var num1;
    console.log(num1);   //打印结果为:undefined

多个变量可以通过一个 var 关键字定义,也可以分别定义.并且定义的同时可以赋值
如:

    var status = "end", time, color = "red", age = 20;

或者

    var status = "end";
    var time;
    var color = "red";
    var age = 20;

那么