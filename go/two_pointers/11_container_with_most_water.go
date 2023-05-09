package main

import (
	"fmt"
)

func main() {
	// Test cases

	// result: 49
	fmt.Println(maxArea([]int{1, 8, 6, 2, 5, 4, 8, 3, 7}))

	// result: 1
	fmt.Println(maxArea([]int{1, 1}))
}

func maxArea(height []int) int {
	i := 0
	k := len(height) - 1

	max := 0
	for i < k {
		b := k - i
		h := height[i]
		if h > height[k] {
			h = height[k]
		}
		a := b * h

		if a > max {
			max = a
		}

		if height[i] == height[k] {
			k--
			continue
		}
		if height[i] == h {
			i++
		} else {
			k--
		}
	}
	return max
}
