import { add } from './test';

describe('test test.ts', () => {
  describe('test test.ts add function', () => {
    it('1 + 2 = 3', () => {
      expect(add(1, 2)).toBe(3);
    });
  });
});
