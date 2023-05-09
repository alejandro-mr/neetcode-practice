function groupAnagrams(strs: string[]): string[][] {
  if (strs.length <= 1) {
    return [strs];
  }

  const groups: Map<string, string[]> = new Map();

  for (const str of strs) {
    const count: number[] = Array(26).fill(0);
    for (const char of str.split("")) {
      count[char.charCodeAt(0) - "a".charCodeAt(0)] += 1;
    }
    const key = count.toString();
    const existent = groups.get(key);
    if (existent && existent.length) {
      groups.set(key, [...existent, str]);
    } else {
      groups.set(key, [str]);
    }
  }
  return [...groups.values()];
}

(() => {
  // Test cases

  // result: [["bat"],["nat","tan"],["ate","eat","tea"]]
  console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

  // result: [['']]
  console.log(groupAnagrams([""]));

  // result: [['a']]
  console.log(groupAnagrams(["a"]));

  // result: [['a', 'a'], ['aa'], ['ab']]
  console.log(groupAnagrams(["a", "a", "aa", "ab"]));
})();
