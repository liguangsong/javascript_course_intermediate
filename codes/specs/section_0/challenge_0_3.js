describe('practice-0-3', function () {

    it("print logs are 3、4、1、2 ", function () {

        console.dir(logs);
        var v1 = logs[0] == 3;
        var v2 = logs[1] == 4;
        var v3 = logs[2] == 1;
        var v4 = logs[3] == 2;
        var v5 = logs[4] == undefined;

        expect(v1).toBe(true);
        expect(v2).toBe(true);
        expect(v3).toBe(true);
        expect(v4).toBe(true);
        expect(v5).toBe(true);
    });

});