package main

import "fmt"

func main() {
	// Test cases

	// result: 5
	fmt.Println(maxProfit([]int{7, 1, 5, 3, 6, 4}))

	// result: 0
	fmt.Println(maxProfit([]int{7, 6, 4, 3, 1}))

	// result: 1
	fmt.Println(maxProfit([]int{1, 2}))
}

func maxProfit(prices []int) int {
	i := 0
	j := 1

	profit := 0
	for j < len(prices) {
		if prices[j] > prices[i] {
			if profit < (prices[j] - prices[i]) {
				profit = prices[j] - prices[i]
			}
			j += 1
		} else {
			i = j
			j += 1
		}
	}

	return profit
}
