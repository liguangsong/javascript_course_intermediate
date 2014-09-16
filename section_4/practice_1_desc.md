当你使用类似于function\_1(function\_2)方法的时候函数function\_2就成了回调函数，而你还可以使用function\_1(function\_3)这个时候，函数function\_3就成了回调函数。如果你写成了

    function function_1(
        .....;
        function_2()
    )

就失去了变量的灵活性。所以回调函数的使用可以给我们的代码带来极大的灵活性,而良好的灵活性会给编码人员带来更有想象力的空间去发挥创意.