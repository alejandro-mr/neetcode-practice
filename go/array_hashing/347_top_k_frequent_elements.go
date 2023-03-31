package main

import "fmt"

func main() {
	// Test cases
	// result: [1, 2]
	fmt.Println(topKFrequent([]int{1, 1, 1, 2, 2, 3}, 2))

	// result: [1]
	fmt.Println(topKFrequent([]int{1}, 1))

	// result: [5, 2, 1]
	fmt.Println(topKFrequent([]int{10, 1, 1, 1, 1, 1, 5, 5, 5, 5, 2, 2, 2, 1, 0}, 3))
}

func topKFrequent(nums []int, k int) []int {
	count := make(map[int]int)
	for i := 0; i < len(nums); i++ {
		count[nums[i]] += 1
	}

	frequency := make([][]int, len(nums)+1)

	for num, count := range count {
		frequency[count] = append(frequency[count], num)
	}

	result := make([]int, 0, k)
	for i := len(frequency) - 1; i >= 0; i-- {
		if k <= 0 {
			return result
		}
		if len(frequency[i]) <= 0 {
			continue
		}
		k -= len(frequency[i])
		result = append(result, frequency[i]...)
	}

	return result
}
