/**
 * Definition for singly-linked list.
 */
package main

import "fmt"

type ListNode struct {
	Val  int
	Next *ListNode
}

func reverseList(head *ListNode) *ListNode {
	if head == nil {
		return head
	}

	var prev *ListNode
	current := head
	for current != nil {
		next := current.Next
		current.Next = prev

		prev = current
		current = next
	}

	return prev
}

func populateList(values []int) *ListNode {
	if len(values) == 0 {
		return nil
	}

	head := ListNode{values[0], nil}
	current := &head

	for _, value := range values[1:len(values)] {
		next := ListNode{value, nil}
		current.Next = &next
		current = current.Next
	}

	return &head
}

func printList(head *ListNode) {
	current := head
	for current != nil {
		fmt.Println(current.Val)
		current = current.Next
	}
}

func main() {
	// Test cases

	// result: [4, 3, 2, 1]
	printList(reverseList(populateList([]int{1, 2, 3, 4, 5})))

	// result: nil
	printList(reverseList(populateList([]int{})))

	// result: [2, 1]
	printList(reverseList(populateList([]int{1, 2})))
}
