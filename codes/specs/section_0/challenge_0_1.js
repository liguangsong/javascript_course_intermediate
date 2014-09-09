describe('section_0', function () {
    it("challenge_0_1", function () {

        expect(typeof logs[0]).toBe('string');
        expect(logs[0]).toBe("数组中含有奇数19个,偶数11个.");
        data = [1,2];
        expect(analyse_array()).toBe("数组中含有奇数1个,偶数1个.");
        
    });
});

