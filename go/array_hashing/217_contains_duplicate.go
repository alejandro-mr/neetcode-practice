package main

import "fmt"

func main() {
	// Test cases

	// result: true
	fmt.Println(containsDuplicate([]int{1, 2, 3, 1}))
	// result: false
	fmt.Println(containsDuplicate([]int{1, 2, 3, 4}))
	// result: true
	fmt.Println(containsDuplicate([]int{1, 1, 1, 3, 3, 4, 3, 2, 4, 2}))
}

func containsDuplicate(nums []int) bool {
	dups := make(map[int]bool)

	for i := 0; i < len(nums); i++ {
		if dups[nums[i]] {
			return true
		}
		dups[nums[i]] = true
	}

	return false
}
