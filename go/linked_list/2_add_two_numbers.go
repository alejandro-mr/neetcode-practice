package main

import "fmt"

func main() {
	// Test cases

	// result: [7, 0, 8]
	l1 := populateList([]int{2, 4, 3})
	l2 := populateList([]int{5, 6, 4})
	printList(addTwoNumbers(l1, l2))

	// result: [0]
	l1 = populateList([]int{0})
	l2 = populateList([]int{0})
	printList(addTwoNumbers(l1, l2))

	// result: [8, 9, 9, 9, 0, 0, 0, 1]
	l1 = populateList([]int{9, 9, 9, 9, 9, 9, 9})
	l2 = populateList([]int{9, 9, 9, 9})
	printList(addTwoNumbers(l1, l2))
}

type ListNode struct {
	Val  int
	Next *ListNode
}

func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
	if l1 == nil {
		return l2
	}
	if l2 == nil {
		return l1
	}

	var head *ListNode
	var prev *ListNode

	carrying := 0
	for l1 != nil || l2 != nil || carrying > 0 {
		sum := carrying
		if l1 != nil {
			sum += l1.Val
		}
		if l2 != nil {
			sum += l2.Val
		}
		carrying = 0
		if sum >= 10 {
			sum -= 10
			carrying = 1
		}

		node := ListNode{sum, nil}
		if head == nil {
			head = &node
		}
		if prev != nil {
			prev.Next = &node
		}
		prev = &node

		if l1 != nil {
			l1 = l1.Next
		} else {
			l1 = nil
		}
		if l2 != nil {
			l2 = l2.Next
		} else {
			l2 = nil
		}
	}
	return head
}

func populateList(values []int) *ListNode {
	if len(values) == 0 {
		return nil
	}

	head := ListNode{values[0], nil}
	current := &head

	for _, value := range values[1:] {
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
