const LCA = require("./LCA.js")
const NodeClass = require("./NodeClass")
/*
We use 'npm run test' to run the tests.
*/

//       7
//      / \
//     4   8
//    / \
//   1  5


const root = new NodeClass(7);
root.left = new NodeClass(4);
root.left.left = new NodeClass(1);
root.left.right = new NodeClass(5);
root.right = new NodeClass(8);

test('LCA of 1 and 5', () => {
    expect(LCA(root, 1, 5)).toBe(4);
})