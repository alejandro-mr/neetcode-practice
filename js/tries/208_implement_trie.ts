class TrieNode {
  key: string;
  children: Array<TrieNode | null>;
  endOfWord: boolean;
  _parent: TrieNode | null;

  constructor(char: string = '', parent: TrieNode | null = null) {
    this.key = char;
    this.children = new Array(26).fill(null);
    this.endOfWord = false;
    this._parent = parent;
  }
}

class Trie {
  _INITIAL_CHARCODE = 'a'.charCodeAt(0);
  _root: TrieNode;
  constructor() {
    this._root = new TrieNode('');
  }

  insert(word: string): void {
    if (!word.length) return;

    let current: TrieNode = this._root;
    for (let i = 0; i <= word.length - 1; i++) {
      const charIndex = word[i].charCodeAt(0) - this._INITIAL_CHARCODE;
      const exists = current.children[charIndex];
      if (exists) {
        current = exists;
        if (i === word.length - 1) {
          current.endOfWord = true;
        }
        continue;
      }

      const node = new TrieNode(word[i], current);
      current.children[charIndex] = node;
      current = node;

      if (i === word.length - 1) {
        node.endOfWord = true;
      }
    }
  }

  search(word: string): boolean {
    if (word.length <= 0) return false;

    let current = this._root;
    for (let i = 0; i <= word.length - 1; i++) {
      const charIndex = word[i].charCodeAt(0) - this._INITIAL_CHARCODE;
      const exists = current.children[charIndex];
      if (!exists) return false;
      current = exists;
      if (i === word.length - 1 && exists.endOfWord) return true;
    }

    return false;
  }

  startsWith(prefix: string): boolean {
    if (prefix.length <= 0) return false;

    let current = this._root;
    for (let i = 0; i <= prefix.length - 1; i++) {
      const charIndex = prefix[i].charCodeAt(0) - this._INITIAL_CHARCODE;
      const exists = current.children[charIndex];
      if (!exists) return false;
      current = exists;
    }

    return true;
  }
}

export default Trie;
