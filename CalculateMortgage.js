class CalculateMortgage {
    constructor(annualIncome, debt) {
        this.annualIncome = annualIncome;
        this.debt = debt;
    }
    calculate() {
        return 4 * this.annualIncome - this.debt;
    }
    calculateWithNoMoney() {
        const maximumMortgage = 4 * this.annualIncome - this.debt;
        if (maximumMortgage < 0) {
            return 0;
        }
    }
    calculateWithZeroInterest() {
        const maximumMortgage = 0 * this.annualIncome - this.debt;
        if (maximumMortgage <= 0) {
            return 0
        }
    }
    calculateWithWrongInputType() {
        const maximumMortgage = 4 * this.annualIncome - this.debt;

        return maximumMortgage;
    }

}

module.exports = CalculateMortgage;