package main

import "fmt"

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

func invertTree(root *TreeNode) *TreeNode {
	if nil == root {
		return nil
	}

	invertTree(root.Left)
	invertTree(root.Right)

	root.Left, root.Right = root.Right, root.Left

	return root
}
