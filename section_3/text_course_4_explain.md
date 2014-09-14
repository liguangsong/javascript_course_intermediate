当查询robot的age属性时,先查询自有属性,如果没有则查询原型对象的age属性,如果查询没有结果,则返回结果undefined.

在执行Robot.prototype.age = 12这句代码之前,在robot的所有属性中是没有age属性的.所以本句代码执行之后,原型对象中就可以查询到age属性了.