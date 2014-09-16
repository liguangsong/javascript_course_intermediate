函数在Javascript中是第一类对象，我们可以像对待对象一样对待函数，因此我们能像传递变量一样传递函数，在函数中返回函数，在其他函数中使用函数。当我们将一个回调函数作为参数传递给另一个函数时，我们仅仅传递了函数的定义,我们并没有在参数中执行该函数。我们并不传递像我们平时执行函数一样带有一对执行小括号()的函数,而只是传递函数名。

    var function_1=function(callback){
        var word_1 = "do something.";
        var word_2 = "do another thing.";
        console.log(word_1);
        (callback && typeof(callback) === "function") && callback(word_2);
    }
    var function_2=function(word){console.log(word)};
    function_1(function_2);

需要注意的很重要的一点是回调函数并不会马上被执行。它会在包含它的函数内的某个特定时间点被“回调”（就像它的名字一样）。

当我们将一个回调函数作为变量传递给另一个函数时，这个回调函数在包含它的函数内的某一点执行，就好像这个回调函数是在包含它的函数中被定义的一样。这意味着回调函数本质上是一个闭包。

闭包能够进入包含它的函数的作用域，因此回调函数能获取包含它的外层函数中的变量，以及全局作用域中的变量。

如:

    var function_1=function(callback){
        this.word_1 = "do something.";
        this.word_2 = "do another thing.";
        console.log(this.word_1);
        (callback && typeof(callback) === "function") && callback();
    }
    var function_2=function(){console.log(this.word_2)};
    function_1(function_2);

那么
