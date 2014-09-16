describe('section_4', function () {
    it("challenge_4_1", function () {
        var flag =1;
        get_inputs(flag,function(data){++data;})
        expect(logs[0]).toBe("name: bower");
        expect(logs[1]).toBe("speciality: Robot");
        expect(flag).toBe(2);
        expect(info[0].name).toBe("bower");
        expect(info[0].speciality).toBe("Robot");

    });
});
