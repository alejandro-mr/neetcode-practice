import { describe, it, expect } from 'vitest';
import groupAnagrams from './49_group_anagrams';

describe.concurrent('groupAnagrams', () => {
  it("Should return [['bat'],['nat','tan'],['ate','eat','tea']]", async () => {
    const anagrams = groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);

    expect(anagrams).toContainEqual(['tan', 'nat']);
    expect(anagrams).toContainEqual(['eat', 'tea', 'ate']);
    expect(anagrams).toContainEqual(['bat']);
  });

  it("Should return [['']]", async () => {
    const anagrams = groupAnagrams(['']);

    expect(anagrams).toStrictEqual([['']]);
  });

  it("Should return [['a']]", async () => {
    const anagrams = groupAnagrams(['a']);

    expect(anagrams).toStrictEqual([['a']]);
  });

  it("Should return [['a, a'], ['aa'], ['ab']]", async () => {
    const anagrams = groupAnagrams(['a', 'a', 'aa', 'ab']);

    expect(anagrams).toStrictEqual([['a', 'a'], ['aa'], ['ab']]);
  });
});
