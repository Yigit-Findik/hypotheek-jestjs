// moneyTransfer.test.js
const { transferMoney, calculateMaximumMortgage } = require('./index'); // Import from index.js
jest.mock('./');

describe("Money Transfer", () => {
  test("Transfers money correctly", () => {
    // if more money then send
    const senderAccount = { balance: 100 };
    const receiverAccount = { balance: 50 };

    const result = transferMoney(senderAccount, receiverAccount, 30);

    // Use expect to check if the result is as expected
    expect(result).toBe(true);
    expect(senderAccount.balance).toBe(70); // does change
    expect(receiverAccount.balance).toBe(80); // does change
  });

  test("Insufficient funds", () => {
    // if less money then wanting to send error
    const senderAccount = { balance: 20 };
    const receiverAccount = { balance: 50 };

    const result = transferMoney(senderAccount, receiverAccount, 30);

    expect(result).toBe(false);
    expect(senderAccount.balance).toBe(20); // Shouldn't change
    expect(receiverAccount.balance).toBe(50); // Shouldn't change
  });
});

describe('bereken maximale hypotheek', () => {
  test('Bereken maximale hypotheek voor inkomsten en schuld', () => {
    expect(calculateMaximumMortgage(60000, 20000)).toBe(400000);
  });

  test('Bereken maximale hypotheek voor lage inkomsten', () => {
    expect(calculateMaximumMortgage(25000, 10000)).toBe(150000);
  });

  test('Bereken maximale hypotheek voor hoge inkomsten', () => {
    expect(calculateMaximumMortgage(100000, 5000)).toBe(800000);
  });
});

it('works', () => {
  const obj = new SomeClass(1, 2);
  expect(obj.a).toBe(1);
  expect(obj.b).toBe(2);
});
