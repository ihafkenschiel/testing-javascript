const assert = require('assert');
const thumbWar = require('./thumb-war');
const utils = require('./utils');

const origGetWinner = utils.getWinner;
utils.getWinner = (p1, p2) => p1;

const winner = thumbWar('Kent C. Dodds', 'Ken Wheeler');
assert.strictEqual(winner, 'Kent C. Dodds');

utils.getWinner = origGetWinner;