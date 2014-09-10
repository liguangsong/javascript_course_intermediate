describe('section_2', function () {
    it("challenge_2_1", function () {

        expect(cycling === undefined).toBeFalsy();
        expect(cycling.name).toBe("cycling");
        expect(cycling.usage).toBe("transport");
        expect(typeof logs[0]).toBe('string');
        expect(logs[0]).toBe("This is cycling, the usage of it is transport.");

    });
});
