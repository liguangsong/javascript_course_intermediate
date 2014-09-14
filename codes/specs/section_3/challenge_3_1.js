describe('section_3', function () {
    it("challenge_3_1", function () {

        expect(Robot.prototype.age).toBe(13);
        expect(robot_1.age).toBe(13);
        expect(robot_2.age).toBe(13);
        expect(robot_1.name).toBe("cup");
        expect(robot_2.name).toBe("bower");
        expect(logs[0]).toBe(12);
        expect(logs[1]).toBe(13);
        expect(logs[2]).toBe(13);
        
    });
});
