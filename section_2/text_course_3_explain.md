由于函数display被传入的参数只有一个 words, 但从函数体可见words是一个数组格式的参数.
所以根据apply和call的使用方式有以下两种实现方法:

    display.call({name:"bower"}, ["I'm a","robot"])

    display.apply({name:"bower"}, [["I'm a","robot"]])	//在apply方法中,实际参数["I'm a","robot"]应该被放在数组中.
