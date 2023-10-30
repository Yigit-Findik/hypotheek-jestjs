const CalculateMortgage = require("./CalculateMortgage");

describe('Calculate Mortgage', () => {
    it('should calculate mortgage', () => {
        const calculateMortgage = new CalculateMortgage(60000, 20000);
        const calculation = calculateMortgage.calculate()

        expect(calculation).toBe(220000);
    });
})

describe('Calculate Mortgage With No Money', () => {
    it('should not calculate mortgage and return 0', () => {
        const calculateMortgageWithNoMoney = new CalculateMortgage(0, 20000);
        const calculationWithNoMoney = calculateMortgageWithNoMoney.calculateWithNoMoney();

        expect(calculationWithNoMoney).toBe(0);
    });
})

describe('Calculate Mortgage with zero interest', () => {
    it('should expect 0 or less since its calculated with zero interest', () => {
        const calculateMortgageWithZeroInterest = new CalculateMortgage(0, 20000);
        const calculationWithZeroInterest = calculateMortgageWithZeroInterest.calculateWithZeroInterest();

        expect(calculationWithZeroInterest).toBe(0);
    });
})

describe('Calculate Mortgage with wrong data type', () => {
    it('should not work since we are giving wrong data type', () => {
        const calculateMortgageWithWrongDataType = new CalculateMortgage("hello sir", true);
        const calculationWithWrongDataType = calculateMortgageWithWrongDataType.calculateWithWrongInputType();

        expect(calculationWithWrongDataType).toBeFalsy();
    });
})

describe("Mortgage calculater with spy function", () => {
    it('should calculate the mortgage amount with spy on function', () => {
        const calculateMortgage = new CalculateMortgage(60000, 20000);

        const spyOnCalculate = jest.spyOn(calculateMortgage, 'calculate');

        const result = calculateMortgage.calculate();

        expect(result).toBe(220000);

        expect(spyOnCalculate).toHaveBeenCalled();

        expect(spyOnCalculate).toHaveBeenCalledWith();

        spyOnCalculate.mockRestore();
    });
})
