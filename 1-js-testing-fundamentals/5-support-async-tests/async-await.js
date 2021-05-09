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

async function test(title, callback) {
    try {
        await callback();
        console.log(`✅ ${title}`);

    } catch (error) {
        console.error(`❌ ${title}`)
        console.error(" - " + error);
    }
}

function expect(actual) {
    return {
        toBe(expected) {
            if (actual !== expected) {
                throw new Error(`${result} is not equal to ${expected}`);
            }
        }
    }
}

console.log("Completed.")