function lowestCommonAncestor(roots, node1, node2) {
  // instantiate 2 arrays to keep track of paths
  const path1 = [];
  const path2 = [];

  var found = false;
  for(let root of roots){
    // obtain the paths of each node from roots
    if (getPath(root, path1, node1) && getPath(root, path2, node2)) {
      var mainRoot = root;
      found = true;
    }
  }
  if(!found) return false;

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

    for(let pointingTo of root.pointingTo){
      if(pointingTo && getPath(pointingTo, path, k)){
        return true;
      }
    }


    path.pop();
    return false;
  }
}

const NodeClass = require("./NodeClass")


const one   = new NodeClass(1);
const four  = new NodeClass(4);
const six   = new NodeClass(6);
const seven = new NodeClass(7);
const eight = new NodeClass(8);

const three                         = new NodeClass(3);
three.pointingTo[0]                 = new NodeClass(2);
three.pointingTo[1]                 = new NodeClass(5);
three.pointingTo[0].pointingTo[0]   = four;
three.pointingTo[1].pointingTo[0]   = four;
three.pointingTo[1].pointingTo[1]   = six;
one.pointingTo[0]                   = six;
eight.pointingTo[0]                 = seven;
six.pointingTo[0]                   = seven;
four.pointingTo[0]                  = seven;

console.log(lowestCommonAncestor([three,one,eight], 4, 6)); // should = 5

module.exports = lowestCommonAncestor;