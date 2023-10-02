import { describe, it, expect, beforeAll } from 'vitest';
import Trie from '../208_implement_trie';

describe.concurrent('Implement Trie', () => {
  let trie = new Trie();

  beforeAll(() => {
    trie.insert('apple');
  });

  it("Returns true when searching 'apple'", async () => {
    expect(trie.search('apple')).toBeTruthy();
  });

  it("Returns false when searching 'app'", async () => {
    expect(trie.search('app')).toBeFalsy();
  });

  it("Returns true when checking if a word startsWith 'app'", () => {
    expect(trie.startsWith('app')).toBeTruthy();
    trie.insert('app');
  });

  it("Returns true when searching 'app'", () => {
    expect(trie.search('app')).toBeTruthy();
  });
});
