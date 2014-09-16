describe('section_4', function () {
//    get_inputs("Running...",show);
    it("challenge_4_1", function () {
        get_inputs(flag,function(data){++data;})
        expect(logs[0]).toBe("name: bower");
        expect(logs[1]).toBe("speciality: Robot");
//        expect(logs[2]).toBe("Running...");
        expect(info[0].name).toBe("bower");
        expect(info[0].speciality).toBe("Robot");

    });
});
