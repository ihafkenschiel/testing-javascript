const thumbWar = require('../thumb-war');
const utils = require('../utils');

jest.mock('../utils'); // will pick it up from __mocks__/utils.js

test('returns winner', () => {

    const winner = thumbWar('Ken Wheeler', 'Kent C. Dodds');
    
    expect(winner).toBe('Kent C. Dodds');
    expect(utils.getWinner.mock.calls).toEqual([
        ['Ken Wheeler', 'Kent C. Dodds'],
        ['Ken Wheeler', 'Kent C. Dodds']
    ]);

    // cleanup
    utils.getWinner.mockReset();
});