describe('section_1', function () {

    beforeEach(function(done) {
        done();
    });

    it("challenge_1_2", function (done) {

        Robot.say_hello();
        expect(typeof logs[0]).toBe('string');
        expect(-1 < logs[0].search(Robot.birthday)).toBe(true);
        expect(-1 < logs[0].search(Robot.name)).toBe(true);

        done();
    });
});
