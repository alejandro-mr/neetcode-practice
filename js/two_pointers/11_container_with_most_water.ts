function maxArea(height: number[]): number {
  // we check first and last index first, while keeping a track of the max area
  // are get's calculated by the base of the container (k - i) multiplied by the lower size of both positions height[i] or height[k]
  // we advanced only the index of the lower height, when equal we decrease 'k'

  let i = 0;
  let k = height.length - 1;

  let max = 0;
  while (i < k) {
    // base of container
    const b = k - i;
    // height of container
    const h = Math.min(height[i], height[k]);
    // area of container
    const a = b * h;

    max = a > max ? a : max;

    if (height[k] <= h) {
      k--;
      continue;
    }
    if (height[i] === h) {
      i++;
    }
  }

  return max;
}

(() => {
  // Test cases

  // result: 49
  console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));

  // result: 1
  console.log(maxArea([1, 1]));
})();
