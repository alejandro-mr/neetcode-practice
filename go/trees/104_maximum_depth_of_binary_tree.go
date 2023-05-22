package main

import "fmt"

func main() {
	// Test cases

	// result: 3
	tree := createTree([]int{3, 9, 20, -1, -1, 15, 7}, 0)
	fmt.Println(maxDepth(tree))

	// result: 2
	tree = createTree([]int{1, -1, 2}, 0)
	fmt.Println(maxDepth(tree))
}

var depth int

func maxDepth(root *TreeNode) int {
	if root == nil {
		return depth
	}
	totalDepth := dft(root, 1)
	depth = 0
	return totalDepth
}

func dft(root *TreeNode, level int) int {
	if level > depth {
		depth = level
	}
	if root.Left != nil {
		dft(root.Left, level+1)
	}
	if root.Right != nil {
		dft(root.Right, level+1)
	}

	return depth
}
