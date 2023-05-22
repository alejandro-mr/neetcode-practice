package main

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

func createTree(values []int, level int) *TreeNode {
	if len(values) <= 0 || level >= len(values) || values[level] == -1 {
		return nil
	}

	root := TreeNode{values[level], nil, nil}
	root.Left = createTree(values, 2*level+1)
	root.Right = createTree(values, 2*level+2)

	return &root
}
