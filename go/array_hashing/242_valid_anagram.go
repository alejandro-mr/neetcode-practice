package main

import (
	"fmt"
)

func main() {
	// test cases

	// result: true
	fmt.Println(isAnagram("anagram", "nagaram"))
	// result: false
	fmt.Println(isAnagram("rat", "car"))
}

func isAnagram(s string, t string) bool {
	// hashmap approach
	if len(s) != len(t) {
		return false
	}

	charCount := make(map[rune]int)

	// convert string to runes array
	sChars := []rune(s)
	// save runes in map with char count
	for i := 0; i < len(sChars); i++ {
		if _, exists := charCount[sChars[i]]; exists {
			charCount[sChars[i]] += 1
			continue
		}
		charCount[sChars[i]] = 1
	}

	tChars := []rune(t)
	for i := 0; i < len(tChars); i++ {
		if _, exists := charCount[tChars[i]]; exists {
			charCount[tChars[i]] -= 1
		} else {
			// if character doesn't exists in original string, it's not valid
			return false
		}
	}

	for _, v := range charCount {
		if v > 0 {
			// return false if there are still some chars with value greater than 0
			return false
		}
	}

	return true
}
