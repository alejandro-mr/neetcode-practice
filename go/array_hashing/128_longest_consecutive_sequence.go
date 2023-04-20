package main

import "fmt"

func longestConsecutive(nums []int) int {
	if len(nums) <= 1 {
		return len(nums)
	}

	sequence := make(map[int]bool)
	for _, num := range nums {
		sequence[num] = true
	}

	count := 1
	maxSequence := 1
	for _, num := range nums {
		if sequence[num-1] == true {
			continue
		}
		for i := num + 1; i <= num+len(nums)-1; i++ {
			if sequence[i] == false {
				count = 1
				break
			}
			count += 1
			if count > maxSequence {
				maxSequence = count
			}
		}
	}
	return maxSequence
}

func main() {
	// Test cases

	// result: 4
	fmt.Println(longestConsecutive([]int{100, 4, 200, 1, 3, 2}))

	// result: 9
	fmt.Println(longestConsecutive([]int{0, 3, 7, 2, 5, 8, 4, 6, 0, 1}))

	// result: 1
	fmt.Println(longestConsecutive([]int{0}))

	// result: 0
	fmt.Println(longestConsecutive([]int{}))
}
