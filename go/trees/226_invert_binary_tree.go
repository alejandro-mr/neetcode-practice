package main

import "fmt"

/**
 * Definition for a binary tree node.
 */
type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func (t TreeNode) Bft() []int {
	queue := []*TreeNode{&t}
	result := []int{}
	for len(queue) > 0 {
		node := queue[0]
		queue = queue[1:]
		result = append(result, node.Val)
		if node.Left != nil {
			queue = append(queue, node.Left)
		}
		if node.Right != nil {
			queue = append(queue, node.Right)
		}
	}
	return result
}

func main() {
	// Test cases

	// result: [4, 7, 2, 9, 6, 3, 1]
	tree := createTree([]int{4, 2, 7, 1, 3, 6, 9}, 0)
	tree = invertTree(tree)
	fmt.Println(tree.Bft())

	// result: [2, 3, 1]
	tree = createTree([]int{2, 1, 3}, 0)
	tree = invertTree(tree)
	fmt.Println(tree.Bft())

	// result: []
	tree = createTree([]int{}, 0)
	tree = invertTree(tree)
	if tree != nil {
		fmt.Println(tree.Bft())
	} else {
		fmt.Println([]int{})
	}
}

func createTree(values []int, level int) *TreeNode {
	if len(values) <= 0 || level >= len(values) {
		return nil
	}

	root := TreeNode{values[level], nil, nil}
	root.Left = createTree(values, 2*level+1)
	root.Right = createTree(values, 2*level+2)

	return &root
}

func invertTree(root *TreeNode) *TreeNode {
	if nil == root {
		return nil
	}

	invertTree(root.Left)
	invertTree(root.Right)

	root.Left, root.Right = root.Right, root.Left

	return root
}
