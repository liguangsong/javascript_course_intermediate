describe('section_4', function () {
    it("challenge_4_1", function () {

        expect(logs[0]).toBe("name: bower");
        expect(logs[1]).toBe("speciality: Robot");
        expect(get_inputs(1,function(data){return ++data;})).toBe(2);
        expect(info.name).toBe("bower");
        expect(info.speciality).toBe("Robot");

    });
});
