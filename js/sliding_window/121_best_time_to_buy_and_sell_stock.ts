function maxProfit(prices: number[]): number {
  let [i, j]: [number, number] = [0, 1];
  let maxProfit: number = 0;

  while (j < prices.length) {
    if (prices[j] > prices[i]) {
      maxProfit = Math.max(maxProfit, prices[j] - prices[i]);
      j += 1;
    } else {
      // profit is 0 or negative
      i = j;
      j = i + 1;
    }
  }

  return maxProfit;
}

(() => {
  // Test cases

  // result: 5
  console.log(maxProfit([7, 1, 5, 3, 6, 4]));

  // result: 0
  console.log(maxProfit([7, 6, 4, 3, 1]));

  // result: 1
  console.log(maxProfit([1, 2]));
})();
