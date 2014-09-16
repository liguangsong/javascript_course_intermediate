//全局变量
var info = [];

//普通的show函数，将数据的内容打印到控制台
function show(data){
    info.push(data)
    //如果是可以直接输出的字符串则直接输出
    if ( typeof data === "string")
    {
        console.log(data);
    }
    else if ( typeof data === "object"){
        //遍历data
        for(var item in data){
            console.log(item + ": " + data[item]);
        }
    }
}

//定义一个接收两个参数的函数，参数中后面一个是回调函数, 在函数体中调用回调函数,并将第一个参数传入回调函数.




//当我们调用get_inputs函数时，我们将show函数作为一个参数传递给它     
//因此show将会在get_inputs函数内被回调（或者执行）     
get_inputs({name:"bower",speciality:"Robot"}, show);
//name:bower
//speciality:Robot