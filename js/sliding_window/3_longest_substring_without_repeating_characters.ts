function lengthOfLongestSubstring(s: string): number {
  if (!s.length) return 0;

  let left = 0;
  const set: Set<string> = new Set();
  set.add(s[left]);

  let longest: number = set.size;

  for (let right: number = left + 1; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left += 1;
    }
    set.add(s[right]);

    longest = set.size > longest ? set.size : longest;
  }

  return longest;
}

(() => {
  // Test cases

  // result: 3
  console.log(lengthOfLongestSubstring('abcabcbb'));

  // result: 1
  console.log(lengthOfLongestSubstring('bbbbb'));

  // result: 3
  console.log(lengthOfLongestSubstring('pwwkew'));

  // result: 3
  console.log(lengthOfLongestSubstring('dvdf'));
})();
