import maxInput from './lib/128_input';

function longestConsecutive(nums: number[]): number {
  if (nums.length <= 1) return nums.length;

  const sequence: Set<number> = new Set(nums);

  let maxSeq = 1,
    counter = 1;
  for (const num of nums) {
    if (sequence.has(num - 1)) continue;
    for (let i = num + 1; i <= num + nums.length - 1; i++) {
      if (sequence.has(i)) {
        counter++;
        if (counter > maxSeq) maxSeq = counter;
        continue;
      }
      counter = 1;
      break;
    }
  }

  return maxSeq;
}

(() => {
  // Test cases

  // result: 4
  console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));

  // result: 9
  console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));

  // result: 1
  console.log(longestConsecutive([0, 0]));

  // result: 100000
  console.log(longestConsecutive(maxInput));
})();
