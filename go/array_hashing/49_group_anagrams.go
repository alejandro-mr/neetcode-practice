package main

import "fmt"

func main() {
	// Test cases

	// result: [["bat"],["nat","tan"],["ate","eat","tea"]]
	fmt.Println(groupAnagrams([]string{"eat", "tea", "tan", "ate", "nat", "bat"}))

	// result: [[]]
	fmt.Println(groupAnagrams([]string{""}))

	// result: [["a"]]
	fmt.Println(groupAnagrams([]string{"a"}))

	// result: [["a", "a"], ["aa"], ["ab"]]
	fmt.Println(groupAnagrams([]string{"a", "a", "aa", "ab"}))
}

func groupAnagrams(strs []string) [][]string {
	groups := make(map[[26]int][]string)

	for _, str := range strs {
		group := [26]int{}
		for _, char := range []rune(str) {
			group[char-'a'] += 1
		}
		if _, exists := groups[group]; exists {
			groups[group] = append(groups[group], str)
		} else {
			groups[group] = []string{str}
		}
	}

	result := make([][]string, 0, len(groups))

	for _, group := range groups {
		result = append(result, group)
	}

	return result
}
