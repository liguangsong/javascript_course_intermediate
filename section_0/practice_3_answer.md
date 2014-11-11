- 答案如下：

    	function scope()
        {
            var a = 1;
            var b = 2;
            function test_scope()
            {
                var a = 3;
                var b = 4;
                //打印a和b
                console.log(a);
                console.log(b);
            }
            test_scope();
            //打印a和b
            console.log(a);
            console.log(b);
        }
        scope();
