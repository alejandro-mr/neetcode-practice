package main

import "fmt"

type ListNode struct {
	Val  int
	Next *ListNode
}

func populateListWithCycle(values []int, cyclePos int) *ListNode {
	if len(values) == 0 {
		return nil
	}

	head := ListNode{values[0], nil}
	current := &head
	count := 0

	var cycleNode ListNode
	for _, value := range values[1:] {
		next := ListNode{value, nil}
		current.Next = &next

		if count == cyclePos {
			cycleNode = *current
		}
		count += 1

		current = current.Next

		if count == len(values)-1 {
			current.Next = &cycleNode
		}
	}

	return &head
}

func main() {
	// Test cases

	// result: true
	head := populateListWithCycle([]int{3, 2, 0, -4}, 1)
	fmt.Println(hasCycle(head))

	// result: true
	head = populateListWithCycle([]int{1, 2}, 0)
	fmt.Println(hasCycle(head))

	// result: false
	head = populateListWithCycle([]int{1}, -1)
	fmt.Println(hasCycle(head))
}

func hasCycle(head *ListNode) bool {
	if head == nil {
		return false
	}

	slow := head
	fast := head

	for slow != nil && fast != nil && fast.Next != nil {
		slow = slow.Next
		fast = fast.Next.Next

		if slow == fast {
			return true
		}
	}

	return false
}
