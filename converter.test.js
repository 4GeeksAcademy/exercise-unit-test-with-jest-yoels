const {sum, fromEuroToDollar, fromDollarToEuro} = require('./MoneyConverter.js')

test('adds 1 + 2 should be equal to 3', () => {
    expect(sum(1,2)).toBe(3);
})

test('1 euro should be 1.07 dollars', () => {
    expect(fromEuroToDollar(1)).toBe(1.07);
})

test('2 dollar should be 1.87 euros', () => {
    expect(fromDollarToEuro(2)).toBe("1.87");
})