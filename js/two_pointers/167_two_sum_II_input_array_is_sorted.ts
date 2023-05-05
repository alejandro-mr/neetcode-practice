function twoSum(numbers: number[], target: number): number[] {
  let i = 0;
  let j = numbers.length - 1;

  let sum = numbers[i] + numbers[j];
  while (sum !== target) {
    if (sum < target) {
      i++;
    } else {
      j--;
    }
    if (i === j) {
      continue;
    }
    sum = numbers[i] + numbers[j];
  }
  return [i + 1, j + 1];
}

(() => {
  // Test cases

  // result: [1, 2]
  console.log(twoSum([2, 7, 11, 15], 9));

  // result: [1, 3]
  console.log(twoSum([2, 3, 4], 6));

  // result [1, 2]
  console.log(twoSum([-1, 0], -1));

  // result: [45, 73]
  const input = [
    117, 1076, 1332, 1338, 1341, 2417, 2912, 3141, 3368, 3766, 4071, 4488, 5413,
    5415, 5416, 5508, 6122, 6327, 7026, 7580, 7581, 8456, 8920, 9372, 9499,
    9529, 9749, 9793, 10039, 10218, 11216, 11572, 11873, 12262, 12603, 12737,
    12750, 12965, 12995, 13421, 13494, 13577, 14278, 14292, 14462, 14940, 15455,
    15553, 16054, 16229, 16574, 17043, 17213, 17496, 17578, 17860, 18082, 18202,
    18383, 18473, 18499, 18805, 18963, 19291, 19523, 19539, 19865, 20020, 20192,
    20217, 22517, 22538, 22560, 22681, 23358, 23499, 24327, 24499, 24564, 24728,
    25329, 25423, 25677, 25827, 26087, 26118, 26644, 26864, 27321, 27424, 27576,
    27644, 27951, 28021, 28073, 28280, 28545, 28718, 29180, 29231, 29995,
  ];

  console.log(twoSum(input, 37022));
})();
