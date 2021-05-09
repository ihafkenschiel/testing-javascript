function fn(impl = () => {}) {
    const mockFn = (...args) => {
        mockFn.mock.calls.push(args);
        return impl(...args);
    }
    mockFn.mock = {calls: []}
    mockFn.mockImplementation = newImpl => (impl = newImpl);
    return mockFn;
}

// console.log(require.cache)
const utilsPath = require.resolve('./utils');
require.cache[utilsPath] = {
    id: utilsPath,
    filename: utilsPath,
    loaded: true,
    exports: {
        getWinner: fn( (p1, p2) => p1 )
    }
}

const assert = require('assert');
const thumbWar = require('./thumb-war');
const utils = require('./utils');


const winner = thumbWar('Kent C. Dodds', 'Ken Wheeler');
assert.strictEqual(winner, 'Kent C. Dodds');
// console.log(utils.getWinner.mock.calls);
assert.deepStrictEqual(utils.getWinner.mock.calls, [
    ['Kent C. Dodds', 'Ken Wheeler'],
    ['Kent C. Dodds', 'Ken Wheeler']
])

// cleanup
delete require.cache[utilsPath];