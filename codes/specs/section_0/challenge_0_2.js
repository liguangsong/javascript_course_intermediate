describe('section_0', function () {

    it("challenge_0_2", function () {

        expect(typeof logs[0]).toBe('string');
        expect(logs[0]).toBe("数组中含有奇数19个,偶数11个.");

        expect(analyse_array([1,2])).toBe("数组中含有奇数1个,偶数1个.");
        
    });

});
