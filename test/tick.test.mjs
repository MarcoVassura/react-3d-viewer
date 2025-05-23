import assert from 'node:assert/strict';
import Tick from '../src/tick.js';

global.requestAnimationFrame = () => {};

let called = 0;
const first = Tick(() => { called++; }, 'first');
assert.strictEqual(called, 1);
assert.strictEqual(first.name, 'first');
assert.strictEqual(first.animate, true);

const second = Tick(() => {}, 'second');
assert.notStrictEqual(second, first);
assert.strictEqual(second.name, 'second');
assert.strictEqual(second.animate, true);

console.log('tick test passed');
