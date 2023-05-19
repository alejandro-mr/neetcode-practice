package main

import (
	"fmt"
	"strings"
)

func main() {
	// Test cases

	// result: 3
	fmt.Println(lengthOfLongestSubstring("abcabcbb"))

	// result: 1
	fmt.Println(lengthOfLongestSubstring("bbbbb"))

	// result: 3
	fmt.Println(lengthOfLongestSubstring("pwwkew"))

	// result: 3
	fmt.Println(lengthOfLongestSubstring("dvdf"))
}

func lengthOfLongestSubstring(s string) int {
	if len(s) <= 1 {
		return len(s)
	}

	sChars := strings.Split(s, "")

	left := 0
	set := make(map[string]bool)
	set[sChars[left]] = true
	longest := len(set)

	for right := left + 1; right < len(s); right++ {
		for {
			if _, exist := set[sChars[right]]; !exist {
				break
			} else {
				delete(set, sChars[left])
				left += 1
			}
		}
		set[sChars[right]] = true
		if len(set) > longest {
			longest = len(set)
		}
	}

	return longest
}
