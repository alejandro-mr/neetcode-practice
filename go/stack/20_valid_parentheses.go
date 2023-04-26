package main

import "fmt"

func main() {
	// Test cases

	// result: false
	fmt.Println(isValid("("))

	// result: true
	fmt.Println(isValid("()"))

	// result: true
	fmt.Println(isValid("()[]{}"))

	// result: false
	fmt.Println(isValid("(])"))

	// result: false
	fmt.Println(isValid(")(){}"))

	// result: true
	fmt.Println(isValid("asd()bgb[{dsd}i{}dd]"))

	// result: false
	fmt.Println(isValid("{ [ ( ] ) }"))

	// result: true
	fmt.Println(isValid("{ [ ] ( ) }"))
}

func isValid(s string) bool {
	if len(s) <= 1 {
		return false
	}

	stack := make([]rune, 0)
	for _, char := range s {
		if char == '(' || char == '[' || char == '{' {
			stack = append(stack, char)
			continue
		}

		if char == '}' || char == ']' || char == ')' {
			if len(stack) <= 0 {
				return false
			}

			last := stack[len(stack)-1]
			stack = stack[:len(stack)-1]

			if last == '{' && char != '}' {
				return false
			}
			if last == '[' && char != ']' {
				return false
			}
			if last == '(' && char != ')' {
				return false
			}
		}
	}

	if len(stack) > 0 {
		return false
	}

	return true
}
