本节课程是由JavaScript基础课程向中级课程过度的一节,内容从基本的 运行规则 到 作用域概念 的讲解.补充了基础课程里面没有详述的部分内容,也是为正式开始中级课程做一个缓冲.

JavaScript 运行规则

(本节不考虑复杂的情况,只着重说明JavaScript语法的基本法则.)

[0]变量的定义(声明)和赋值

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
    console.log(num1);   //undefined

多个变量可以通过一个 var 关键字定义,也可以分别定义.并且定义的同时可以赋值
如:

    var status = "end", time, color = "red", age = 20;

或者

    var status = "end";
    var time;
    var color = "red";
    var age = 20;


[1]变量的引用:

数据本来不具有名称,之所以使用变量,就是为了通过某个名称来称呼这样一种不具有名称的数据.
所谓"引用",可以认为是用变量名来取出其代表的数据值.就像在许许多多的箱子里面通过箱子的名称,找到该箱子里面的内容.

    var num1 = 5;
    var num2 = num1;     // 引用变量 num1 的值(引用变量时前面不加关键字 var)

由于 num1 的实际值是 5 ,所以上面的代码实际执行时将会相当于:

    var num1 = 5;
    var num2 = 5;

将变量 num1 实际的值 5 赋给变量 num2.
如果用箱子模型来描述的话就是,将箱子num1里面的存放的内容 5 复制一份,放到箱子 num2 中.此时箱子 num1 和 num2 里面各自有一个值 5.


[2]变量值与实际值

    var num1 = 5;
    var num2 = num1;
    console.log(num1); // 5
    console.log(num2); // 5

其中 var num2 = num1 是将变量num1的实际值 5 ,赋值给新定义的变量 num2.

当 num1 的值被改变时也不会间接影响 num2 已有的值.
所以

    var num1 = 5;
    var num2 = num1;   //num被赋予和num1相同的值,但赋值之后num2和num1将不会有任何关联关系.
    num1 = 3;          //num1的值发生了变化,num2的值不会发生相应的改变.
    console.log(num1); // 3
    console.log(num2); // 5

变量传值(如: var num2 = num1)之后,相关的两个变量(num1, num2)之间不会有任何关联.所以num1重新赋值之后,num2不会产生相应的变化.
其对应的盒型演示图如下:
![define variables and set value](http://course-image.qiniudn.com/js_basic_define_variables_and_set_value.png)



[3]顺序执行:

JavaScript代码的执行顺序是按照由上到下,由左到右的顺序依次执行的.
如:

    var num1;
    var num2;
    console.log(num1);  //undefined
    console.log(num2);  //undefined
    num1 = 5;
    num2 = 3;
    console.log(num1+num2);  //8

输出依次为 undefined  undefined  8

代码会按照行数1,2,3,4,5,6,7依次执行.

[4]定义优先

但是有一种情况除外:

    console.log(num1);  //undefined
    console.log(num2);  //undefined
    var num1 = 5;
    var num2 = 3;
    console.log(num1+num2);  //8

输出仍然为 undefined  undefined  8

那是因为真正运行时在JavaScript代码中变量的定义语句(不包括赋值语句)会被提前到所有代码之前执行.所以第二段代码运行时的效果和第一段代码是等价的.
所以不会造成由于变量未定义而出错的结果.
例如:

    console.log(num1);  //Error: num1 is not defined
    console.log(num2);  //当代码运行出错时,将停止运行后续代码.所以第二行没有被执行到.

代码中用到了未定义的变量,所以会在console控制台内报错.


[4]返回值:

返回值 return
用来在函数体内向调用本函数的位置返回某些数据.
例如:

    //无返回值
    function sum(a,b){
        var result = a+b;
    }
    var sum = sum(1,2);  //undefined

当函数没有返回值的时候,会有一个默认的返回值undefined,所以上述代码执行时

    var sum = sum();

等价于

    var sum = undefined;

有返回值

    //有返回值
    function sum(a,b){
        var result = a+b;
        return result;
    }
    var sum = sum(1, 2);  //3

调用sum(1,2)时,该函数实际的结果为被返回的result的值,即3.

[5]函数的嵌套:

所谓函数的嵌套,顾名思义,就是在函数内部还可以声明和调用函数.例如

    function f1(){		//声明函数f1
        console.log("this is f1");
        function f2(){	//在函数f1内部声明函数f2
            console.log("this is f2");
        }
        f2();			//在函数f1内部调用函数f2
    }

实际输出:

    js > f1()			//调用函数f1
    this is f1
    this is f2

说明在调用函数f1时,其内部代码被运行,进行了函数f2的定义和调用.


[6]作用域:

作用域指的是名称(变量名与函数名)的有效范围.

JavaScrpit中有两种作用域:1.全局作用域 2.局部作用域
全局作用域是指在所有函数之外(即最外层代码)的作用域.在所有函数之外进行声明的变量或函数属于全局作用域,全局作用域中的变量就是全局变量,全局作用域中的函数就是全局函数.
局部作用域是指所有在函数的内部进行声明的变量或函数,这些变量(又称局部变量)或函数仅在该函数内部才有效.

    function f1(){
        var x = 1; 			//函数f1的局部变量 仅在函数f1内有效

        function f2(){
            var y = 2;		//函数f2的局部变量 仅在函数f2内有效
            console.log(x); //对函数f1的局部变量进行访问
            console.log(y); //对函数f2的局部变量进行访问
        }

        function f3(){
            console.log(x); //对函数f1的局部变量进行访问
            console.log(y); //如果不存在函数f1内的局部变量 y 或全局变量 y ,则会产生调用错误error.
        }

        f2();
        f3();
    }

运行结果:

    js > f1()
    1
    2
    1
    error: y is not defined

由于函数f2内的变量y只在该函数内有效,所以在同级的函数f3内不可用,又因为没有可供函数f3调用的变量 y,所以在函数f3内执行 console.log(y) 时,变量y被认为是没有定义的.
函数的参数变量在该函数内部也属于局部变量.

现在我们给上面的代码添加一个全局变量 var y = 0,那此时

    var y = 0;				//定义一个全局变量 y ,赋值为 0.
    function f1(){
        var x = 1;

        function f2(){
            var y = 2;		//定义一个全局变量 y ,赋值为 2.
            console.log(x);
            console.log(y); //此时局部变量y和全局变量y同时存在,将会访问谁??
        }

        function f3(){
            console.log(x);
            console.log(y); //对全局变量y进行访问.
        }

        f2();
        f3();
    }

运行结果:

    js > f1()
    1
    2
    1
    0

可见,当一个变量名既是局部变量又是全局变量时,会优先访问局部变量.也就是说,局部变量在其作用域内的优先级高于外层作用域的同名变量.
