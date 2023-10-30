class HypotheekBerekenen {
    constructor(maandelijksInkomen, renteVastPeriode, maandelijksInkomenPartner, postcode) {
        this.maandelijksInkomen = maandelijksInkomen;
        this.renteVastPeriode = renteVastPeriode;
        this.rentePercentages = {
            1: 2,
            5: 3,
            10: 3.5,
            20: 4.5,
            30: 5
        };
        this.maandelijksInkomenPartner = maandelijksInkomenPartner;
        this.postcode = postcode;
    }

    berekenHypotheek() {
        const rentePercentage = this.rentePercentages[this.renteVastPeriode];

        if (rentePercentage !== undefined) {
            // Aannemen dat de hypotheeksom 4.5 keer het jaarinkomen is
            const hypotheekSom = this.maandelijksInkomen * 12 * 4.5;

            // Maandelijks rentepercentage
            const maandelijksRentePercentage = rentePercentage / 100 / 12;

            // Aantal termijnen (maanden)
            const aantalTermijnen = this.renteVastPeriode * 12;

            // Maandelijkse betaling
            const maandelijkseBetaling = (hypotheekSom * maandelijksRentePercentage) / (1 - Math.pow(1 + maandelijksRentePercentage, -aantalTermijnen));

            // Totaal terug te betalen bedrag
            const totaalTerugTeBetalen = maandelijkseBetaling * aantalTermijnen;

            console.log('hypotheek som', hypotheekSom);
            console.log('maandelijkse betaling', maandelijkseBetaling);
            console.log('totaal terug te betalen', totaalTerugTeBetalen);

            return {
                maandelijkseBetaling: maandelijkseBetaling.toFixed(2),
                totaalTerugTeBetalen: totaalTerugTeBetalen.toFixed(2)
            };
        }

        return 0;
    }

    berekenHypotheekMetPartner() {
        const totaalInkomen = this.maandelijksInkomen + this.maandelijksInkomenPartner;
        const rentePercentage = this.rentePercentages[this.renteVastPeriode];

        if (rentePercentage !== undefined) {
            // Aannemen dat de hypotheeksom 4.5 keer het jaarinkomen is
            const hypotheekSom = totaalInkomen * 12 * 4.5;

            // Maandelijks rentepercentage
            const maandelijksRentePercentage = rentePercentage / 100 / 12;

            // Aantal termijnen (maanden)
            const aantalTermijnen = this.renteVastPeriode * 12;

            // Maandelijkse betaling
            const maandelijkseBetaling = (hypotheekSom * maandelijksRentePercentage) / (1 - Math.pow(1 + maandelijksRentePercentage, -aantalTermijnen));

            // Totaal terug te betalen bedrag
            const totaalTerugTeBetalen = maandelijkseBetaling * aantalTermijnen;

            console.log('hypotheek som', hypotheekSom);
            console.log('maandelijkse betaling', maandelijkseBetaling);
            console.log('totaal terug te betalen', totaalTerugTeBetalen);

            return {
                maandelijkseBetaling: maandelijkseBetaling.toFixed(2),
                totaalTerugTeBetalen: totaalTerugTeBetalen.toFixed(2)
            };
        }
        return 0;
    }

    berekenHypotheekMetStudieschuld() {
        const rentePercentage = this.rentePercentages[this.renteVastPeriode];

        if (rentePercentage !== undefined) {
            // Aannemen dat de hypotheeksom 4.5 keer het jaarinkomen is
            const hypotheekSom = this.maandelijksInkomen * 12 * 4.5;

            // 25% van hypotheekSom
            const studieschuldAftrek = hypotheekSom * 0.25;

            // Bereken de 25% van de hypotheeksom af
            const hypotheekNaStudieschuld = hypotheekSom - studieschuldAftrek;

            // Maandelijks rentepercentage
            const maandelijksRentePercentage = rentePercentage / 100 / 12;

            // Aantal termijnen (maanden)
            const aantalTermijnen = this.renteVastPeriode * 12;

            // Maandelijkse betaling
            const maandelijkseBetaling = (hypotheekNaStudieschuld * maandelijksRentePercentage) / (1 - Math.pow(1 + maandelijksRentePercentage, -aantalTermijnen));

            // Totaal terug te betalen bedrag
            const totaalTerugTeBetalen = maandelijkseBetaling * aantalTermijnen;

            console.log('hypotheek som', hypotheekSom);
            console.log('maandelijkse betaling', maandelijkseBetaling);
            console.log('totaal terug te betalen', totaalTerugTeBetalen);

            return {
                maandelijkseBetaling: maandelijkseBetaling.toFixed(2),
                totaalTerugTeBetalen: totaalTerugTeBetalen.toFixed(2)
            };
        }
        return null;
    }

    berekenHypotheekPostcodeCheck() {
        const verbodenPostcodes = [9679, 9681, 9682];

        if (verbodenPostcodes.includes(this.postcode)) {
            throw new Error("Postcode niet toegestaan.");
        } else {
            const rentePercentage = this.rentePercentages[this.renteVastPeriode];

            if (rentePercentage !== undefined) {
                // Aannemen dat de hypotheeksom 4.5 keer het jaarinkomen is
                const hypotheekSom = this.maandelijksInkomen * 12 * 4.5;

                // Maandelijks rentepercentage
                const maandelijksRentePercentage = rentePercentage / 100 / 12;

                // Aantal termijnen (maanden)
                const aantalTermijnen = this.renteVastPeriode * 12;

                // Maandelijkse betaling
                const maandelijkseBetaling = (hypotheekSom * maandelijksRentePercentage) / (1 - Math.pow(1 + maandelijksRentePercentage, -aantalTermijnen));

                // Totaal terug te betalen bedrag
                const totaalTerugTeBetalen = maandelijkseBetaling * aantalTermijnen;

                console.log('hypotheek som', hypotheekSom);
                console.log('maandelijkse betaling', maandelijkseBetaling);
                console.log('totaal terug te betalen', totaalTerugTeBetalen);

                return {
                    maandelijkseBetaling: maandelijkseBetaling.toFixed(2),
                    totaalTerugTeBetalen: totaalTerugTeBetalen.toFixed(2)
                };
            }
            return null;
        }
    }

    //here extra
}

module.exports = HypotheekBerekenen;