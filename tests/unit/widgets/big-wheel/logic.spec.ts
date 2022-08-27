import { rotatePlateToPrize } from '@/widgets/big-wheel/logic';

describe('logic.ts', () => {
  it('rotatePlateToPrize', () => {
    expect(rotatePlateToPrize(6, 8)).toBe(0.25);
    expect(rotatePlateToPrize(4, 8)).toBe(0.5);
  });
});
