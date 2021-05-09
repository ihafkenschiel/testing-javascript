const {sum, subtract} = require('./math')

test('sum adds numbers asynchronously', async () => {
    const result = await sum(3, 7);
    const expected = 10;
    expect(result).toBe(expected);
});

test('subtract subtracts numbers asynchronously', async () => {
    const result = await subtract(7, 3);
    const expected = 4;
    expect(result).toBe(expected);
});