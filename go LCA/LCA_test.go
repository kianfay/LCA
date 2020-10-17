package lca

import (
	"testing"
)

/* Tests function must start with "Test" */
func TestGoLCA(t *testing.T) {
	root := Node{100, nil, nil}
	root.left = &Node{50, nil, nil}
	root.right = &Node{150, nil, nil}
	root.left.left = &Node{20, nil, nil}
	root.left.left.left = &Node{10, nil, nil}
	root.left.left.right = &Node{30, nil, nil}
	root.left.right = &Node{80, nil, nil}
	root.right.left = &Node{110, nil, nil}
	root.right.right = &Node{200, nil, nil}

	inorderRecursive(&root)
	// Assuming that both values n1 & n2 exists in Binary search tree
	var result = leastCommonAncestorInBST(&root, 10, 80)
	if result != 50 {
		t.Error("expected 50, got", result)
	}
}
