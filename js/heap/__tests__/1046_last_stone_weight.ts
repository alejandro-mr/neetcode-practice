import { describe, it, expect } from 'vitest';
import lastStoneWeight from '../1046_last_stone_weight';

describe.concurrent('lastStoneWeight', () => {
  it('Should return 1', async () => {
    expect(lastStoneWeight([2, 7, 4, 1, 8, 1])).toBe(1);
  });

  it('Should return 1', async () => {
    expect(lastStoneWeight([1])).toBe(1);
  });

  it('Should return 2', async () => {
    expect(lastStoneWeight([1, 3])).toBe(2);
  });
});
