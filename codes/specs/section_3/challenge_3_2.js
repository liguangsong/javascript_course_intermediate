describe('section_3', function () {

    it("challenge_3_2", function () {

        expect(super_robot.__proto__.name).toBe("atom");
        expect(super_robot.__proto__.age).toBe(5);
        expect(typeof super_robot).toBe("function");
        expect(super_robot.age).toBe(5);
        expect(logs[0]).toBe("Hello World!");
        expect(logs[1]).toBe(5);
        expect(logs[2]).toBe("function");

    });
});
