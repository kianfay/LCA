package lca

type Node struct {
	val   int
	left  *Node
	right *Node
}

func inorderRecursive(root *Node) {
	if root == nil {
		return
	}

	inorderRecursive(root.left)
	inorderRecursive(root.right)
}

func leastCommonAncestorInBST(root *Node, n1 int, n2 int) int {
	if root == nil {
		return -1
	}

	if n1 > root.val && n2 > root.val {
		return leastCommonAncestorInBST(root.right, n1, n2)
	}

	if n1 < root.val && n2 < root.val {
		return leastCommonAncestorInBST(root.left, n1, n2)
	}

	return root.val
}
