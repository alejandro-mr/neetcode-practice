package main

import (
	"fmt"
	"sort"
)

func main() {
	// test cases

	// result: true
	fmt.Println(isAnagram("anagram", "nagaram"))
	// result: false
	fmt.Println(isAnagram("rat", "car"))
}

func isAnagram(s string, t string) bool {
	// bruteforce approach
	if len(s) > len(t) || len(t) > len(s) {
		return false
	}
	// sort both strings
	unsorted_s := []rune(s)
	unsorted_t := []rune(t)

	sort.Slice(unsorted_s, func(i, j int) bool {
		return unsorted_s[i] < unsorted_s[j]
	})
	sort.Slice(unsorted_t, func(i, j int) bool {
		return unsorted_t[i] < unsorted_t[j]
	})
	// assuming insertion sort, worst case each string will be sorted in O(n^2)
	// if sort.Slice it's internally doing merge sort/quick sort complexity it's O(n log n)
	// but since both strings have the same length we can assume the same complexity
	// space: O(1) it's probably swapping values in the rune array

	sorted_s := string(unsorted_s)
	sorted_t := string(unsorted_t)

	// check one string against the other
	// complexity: O(n)
	// space: 0(1)
	// both strings have the same length, and we are only iterating over 1 of the strings
	for i := 0; i < len(sorted_s); i++ {
		if sorted_s[i] != sorted_t[i] {
			return false
		}
	}

	return true
}
