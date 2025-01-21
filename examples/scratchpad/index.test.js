import { test, expect, vi } from 'vitest';

// MOCKS: Function that allows you to mock a function

//SPIES: Function that allows you to spy on a function
const logSpy = vi.spyOn(console, 'log'); // It means that we are spying on the console.log function
const randomSpy = vi.spyOn(Math, 'random').mockImplementation(() => 0.5); // It means that we are spying on the Math.random function

//STUBS: Function that allows you to stub a function

test('a super simple test', () => {
  const result = randomSpy();
  expect(result).toBe(0.5);
});
