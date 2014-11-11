function scope()
{
    var a = 1;
    var b = 2;
    function test_scope()
    {
        var a = 3;
        var b = 4;

    }
    test_scope();

}
scope();
