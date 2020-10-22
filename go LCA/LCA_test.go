package lca

// Run tests by running 'go test' from tis dir
import (
	"testing"
)

//       7
//      /  \
//     4    8
//    / \  / \
//   1  5  3  2
//         \   \
//         10   6
//              /
//             9

/* Tests function must start with "Test" */
func TestGoLCA(t *testing.T) {
	root := Node{7, nil, nil}
	root.left = &Node{4, nil, nil}
	root.right = &Node{8, nil, nil}
	root.left.left = &Node{1, nil, nil}
	root.left.right = &Node{5, nil, nil}
	root.right.left = &Node{3, nil, nil}
	root.right.left.right = &Node{10, nil, nil}
	root.right.right = &Node{2, nil, nil}
	root.right.right.right = &Node{6, nil, nil}
	root.right.right.right.left = &Node{9, nil, nil}

	inorderRecursive(&root)
	
	// Assuming that both values n1 & n2 of all the tests exists in Binary search tree
	var result = leastCommonAncestorInBST(&root, 1, 5)
	if result != 4 {
		t.Error("expected 4, got", result)
	}

	result = leastCommonAncestorInBST(&root, 1, 8)
	if result != 7 {
		t.Error("expected 7, got", result)
	}

	result = leastCommonAncestorInBST(&root, 4, 8)
	if result != 7 {
		t.Error("expected 7, got", result)
	}

}
