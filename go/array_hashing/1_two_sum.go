package main

import "fmt"

func main() {
	// Test cases

	// result: [1, 2]
	fmt.Println(twoSum([]int{2, 5, 5, 11}, 10))
	// result: [2, 3]
	fmt.Println(twoSum([]int{1, 3, 4, 2}, 6))
	// result: [1, 2]
	fmt.Println(twoSum([]int{3, 2, 4}, 6))
	// result: [0, 1]
	fmt.Println(twoSum([]int{3, 3}, 6))
}

func twoSum(nums []int, target int) []int {
	rest := make(map[int]int)

	for i := 0; i < len(nums); i++ {
		diff := target - nums[i]
		if i > 0 {
			rest[nums[i-1]] = i - 1
		}

		index, exists := rest[diff]
		if exists {
			return []int{index, i}
		}
	}
	return []int{-1, -1}
}
