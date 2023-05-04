function groupAnagrams(strs: string[]): string[][] {
  console.log(strs.length);
  if (strs.length <= 1) {
    return [strs];
  }

  let result: string[][] = [];
  let tmp: string[][][] = [];

  for (const str of strs) {
    // calculate code value of str
    const strCount = str
      .split("")
      .reduce((acc, char) => acc + char.charCodeAt(0), 0);
    // since two non anagram string can have the same count, we ensure they share the same chars
    if (tmp[strCount] && tmp[strCount].length > 0) {
      const total = tmp[strCount].length;
      let skip = false;
      for (let i = 0; i < total; i++) {
        const first = tmp[strCount][i][0];

        if (haveSameChar(str, first)) {
          tmp[strCount][i] = [...tmp[strCount][i], str];
          skip = true;
          break;
        }
      }
      if (!skip) {
        tmp[strCount] = [...tmp[strCount], [str]];
      }
      skip = false;
    } else {
      tmp[strCount] = [[str]];
    }
  }

  tmp = tmp.filter((group) => group !== null);
  console.log(tmp);
  result = tmp.reduce((acc, groups) => acc.concat(groups), []);
  return result;
}

function haveSameChar(str1: string, str2: string): boolean {
  const hashStr = new Map();
  for (let char of str1) {
    hashStr.set(char, (hashStr.get(char) || 0) + 1);
  }
  const hash = new Map();
  for (let char of str2) {
    hash.set(char, (hash.get(char) || 0) + 1);
  }

  if (hashStr.size === hash.size) {
    for (const [char, count] of hashStr) {
      if (!hash.has(char)) return false;
      if (hash.has(char) && hash.get(char) !== count) return false;
    }
  } else {
    return false;
  }

  return true;
}

(() => {
  // Test cases

  // result: [["bat"],["nat","tan"],["ate","eat","tea"]]
  console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

  // result: [['']]
  //console.log(groupAnagrams([""]));

  // result: [['a']]
  //console.log(groupAnagrams(["a"]));

  //
})();

/*
 * 26 letters from a-z
 * if we have an array with 26 position for each letter, we can check if the same letters exist in the array, this will be considered an exact match of the same length,
 * how do we group them thogether in the same space?
 *
 * eat, tea, ate
 * tan, nat,
 * bat
 *
 */
