function lowestCommonAncestor(root, node1, node2) {
    // instantiate 2 arrays to keep track of paths
    const path1 = [];
    const path2 = [];
  
    // obtain the paths of each node from root
    if (!getPath(root, path1, node1) || !getPath(root, path2, node2)) {
      return false;
    }
  
    let i = 0;
    // compare the two until they differentiate or we hit the end
    while (i < path1.length && i < path2.length) {
      if (path1[i] != path2[i]) {
        break;
      }
      i++;
    }
  
    return path1[i - 1];
  
    function getPath(root, path, k) {
      if (!root) {
        return false;
      }
  
      // basic DFS
      path.push(root.val);
  
      if (root.val == k) {
        return true;
      }
  
      if (
        (root.left && getPath(root.left, path, k)) ||
        (root.right && getPath(root.right, path, k))
      ) {
        return true;
      }
  
      path.pop();
      return false;
    }
  }
  
  function Node(val) {
    this.val = val;
    this.left = this.right = null;
  }
  
  //       7
  //      / \
  //     4   8
  //    / \
  //   1  5
  
  const root = new Node(7);
  root.left = new Node(4);
  root.left.left = new Node(1);
  root.left.right = new Node(5);
  root.right = new Node(8);
  
  console.log(lowestCommonAncestor(root, 1, 5));
  