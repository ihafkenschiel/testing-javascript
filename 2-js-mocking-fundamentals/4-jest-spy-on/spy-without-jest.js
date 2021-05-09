const assert = require('assert');
const thumbWar = require('./thumb-war');
const utils = require('./utils');

function fn(impl = () => {}) {
    const mockFn = (...args) => {
        mockFn.mock.calls.push(args);
        return impl(...args);
    }
    mockFn.mock = {calls: []}
    return mockFn;
}

function spyOn(obj, prop) {
    const originalValue = obj[prop];
    obj[prop] = fn();
    obj[prop].mockRestore = () => (obj[prop] = originalValue);
}

spyOn(utils, 'getWinner');
utils.getWinner.mockImplementation( ( p1, p2) => p1 );

const winner = thumbWar('Kent C. Dodds', 'Ken Wheeler');
assert.strictEqual(winner, 'Kent C. Dodds');
// console.log(utils.getWinner.mock.calls);
assert.deepStrictEqual(utils.getWinner.mock.calls, [
    ['Kent C. Dodds', 'Ken Wheeler'],
    ['Kent C. Dodds', 'Ken Wheeler']
])

// cleanup
utils.getWinner.mockRestore();