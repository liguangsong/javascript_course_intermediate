传统函数以参数形式输入数据，并且使用返回语句返回值。理论上，在函数结尾处有一个return返回语句，结构上就是：一个输入点和一个输出点。这比较容易理解，函数本质上就是输入和输出之间实现过程的映射。

下面有个更加全面的使用AJAX加载XML文件的示例，并且使用了call()函数，在请求对象（requested object）上下文中调用回调函数。

    function fn(url, callback){
        var httpRequest;　　　　		//创建XHR
        httpRequest = window.XMLHttpRequest ? new XMLHttpRequest() : window.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : undefined;//针对IE进行功能性检测

        httpRequest.onreadystatechange = function(){
          if(httpRequest.readystate === 4
                    && httpRequest.status === 200){　　//状态判断
              callback.call(httpRequest.responseXML);
           }
        };
        httpRequest.open("GET", url);
        httpRequest.send();
    }

    fn("http://www.codefordream.com/ajax_data.xml", function(){　　　　//调用函数
       console.log("content:"+this); 　　//此语句后输出
    });

    console.log("this will run before the above callback.");　　//此语句先输出

我们请求异步处理，意味着我们开始请求时，就告诉它们完成之时调用我们的函数。在实际情况中，onreadystatechange事件处理程序还得考虑请求失败的情况，这里我们是假设xml文件存在并且能被浏览器成功加载。这个例子中，异步函数分配给了onreadystatechange事件，因此不会立刻执行。

最终，第二个console.log语句先执行，因为回调函数直到请求完成才执行。
