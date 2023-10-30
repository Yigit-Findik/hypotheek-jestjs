const HypotheekBerekenen = require('./hypotheekBerekenen'); // Zorg ervoor dat het juiste pad wordt gebruikt

describe('HypotheekBerekenen', () => {
    describe('bereken hypotheek', () => {
        test('Bereken hypotheek zonder studieschuld', () => {
            const hypotheekCalculator = new HypotheekBerekenen(2000, 20);
            const result = hypotheekCalculator.berekenHypotheek();

            expect(result.maandelijkseBetaling).toBeDefined();
            expect(result.totaalTerugTeBetalen).toBeDefined();
        });

        test('Geeft 0 terug als rentepercentage niet gedefinieerd is', () => {
            const hypotheekCalculator = new HypotheekBerekenen(2000, 15);
            const result = hypotheekCalculator.berekenHypotheek();

            expect(result).toBe(0);
        });
    });

    describe('bereken hypotheek met studieschuld', () => {
        test('Bereken hypotheek met studieschuld', () => {
            const hypotheekCalculator = new HypotheekBerekenen(2000, 5);
            const result = hypotheekCalculator.berekenHypotheekMetStudieschuld(5000);

            expect(result.maandelijkseBetaling).toBeDefined();
            expect(result.totaalTerugTeBetalen).toBeDefined();
        });

        test('Gooit een fout als verboden postcode wordt gebruikt', () => {
            const hypotheekCalculator = new HypotheekBerekenen(2000, 5, 9679);

            expect(() => hypotheekCalculator.berekenHypotheekPostcodeCheck()).toThrowError('Postcode niet toegestaan.');
        });

        test('Geeft null terug als rentepercentage niet gedefinieerd is', () => {
            const hypotheekCalculator = new HypotheekBerekenen(2000, 15, 1234);
            const result = hypotheekCalculator.berekenHypotheekMetStudieschuld(5000);

            expect(result).toBeNull();
        });
    });
});
