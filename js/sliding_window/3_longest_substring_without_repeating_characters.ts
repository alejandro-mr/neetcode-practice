function lengthOfLongestSubstring(s: string): number {
  if (!s.length) return 0;

  let slow: number = 0;
  let fast: number = 1;
  let set: Set<string> = new Set();
  set.add(s[slow]);

  // min substr it's 1, since string can't be empty at this point
  let counter: number = 1;
  let longest: number = counter;

  while (fast < s.length) {
    if (set.has(s[fast])) {
      slow += 1;
      fast = slow + 1;

      set.clear();
      set.add(s[slow]);
      counter = 1;

      continue;
    }
    counter += 1;
    set.add(s[fast]);

    longest = counter > longest ? counter : longest;
    fast += 1;
  }

  return longest;
}

/*
 * substr is a set of subsequent characters without repeating chars
 * when we find a repeated char, we can stop the substr count and advance any pointer we are using at the moment
 * first idea: use a two pointer approach, slow and fast, slow starts at 0 and fast at 1, we advance fast until a repeated char is found (using hash to track already seen chars), if there is a repeated char, we clear the hash and move slow to fast position, repeat the process (spoiler it didn't work, but was a good starting point)
 */

(() => {
  // Test cases

  // result: 3
  console.log(lengthOfLongestSubstring("abcabcbb"));

  // result: 1
  console.log(lengthOfLongestSubstring("bbbbb"));

  // result: 3
  console.log(lengthOfLongestSubstring("pwwkew"));

  // result: 3
  console.log(lengthOfLongestSubstring("dvdf"));
})();
