function transferMoney(senderAccount, receiverAccount, amount)
{
    // easy to understand to be fair, if sender has less money than the amount he wants to send it would return false-
    // if he has more money it returns true (if payment is successful or not)
    if (senderAccount.balance >= amount) {
        senderAccount.balance -= amount;
        receiverAccount.balance += amount;
        return true;
    }
    else {
        return false;
    }
}

function calculateMaximumMortgage(annualIncome, debt) {
    // gross annual income
    // available own money - not using
    // debts, loans or overdrafts??? I was considering using these might or might not use

    // We gebruiken hier een eenvoudige regel, bijvoorbeeld 4 keer het inkomen min de schuld.
    const maximumMortgage = 4 * annualIncome - debt;

    // Negatief nummer zorgt voor geen hypotheek
    if (maximumMortgage < 0) {
        return 0;
    }

    return maximumMortgage;
}

class SomeClass {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
}


module.exports = { transferMoney, calculateMaximumMortgage };