const thumbWar = require('../thumb-war');
const utils = require('../utils');

jest.mock('../utils', () => {
    return {
        getWinner: jest.fn( (p1, p2) => p2 )
    }
});

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