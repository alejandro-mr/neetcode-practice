package main

import (
	"fmt"
	"regexp"
	"strings"
)

func main() {
	// Test cases

	// result: true
	fmt.Println(isPalindrome("A man, a plan, a canal: Panama"))

	// result: false
	fmt.Println(isPalindrome("race a car"))

	// result: true
	fmt.Println(isPalindrome(" "))

	// result: true
	fmt.Println(isPalindrome("aa"))
}

func isPalindrome(s string) bool {
	nonAlphanumeric := regexp.MustCompile("[^a-z0-9]+")
	palindrome := nonAlphanumeric.ReplaceAllString(strings.ToLower(s), "")

	if len(palindrome) <= 1 {
		return true
	}

	left := 0
	right := len(palindrome) - 1

	for right >= left {
		if string(palindrome[left]) != string(palindrome[right]) {
			return false
		}
		left += 1
		right -= 1
	}
	return true
}
