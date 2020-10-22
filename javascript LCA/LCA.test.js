const LCA = require("./LCA.js")
const NodeClass = require("./NodeClass")
/*
We use 'npm run test' to run the tests.
*/

//       7
//      /  \
//     4    8
//    / \  / \
//   1  5  3  2
//         \   \
//         10   6
//              /
//             9


const root = new NodeClass(7);
root.left = new NodeClass(4);
root.left.left = new NodeClass(1);
root.left.right = new NodeClass(5);
root.right = new NodeClass(8);
root.right.left = new NodeClass(3);
root.right.left.right = new NodeClass(10);
root.right.right = new NodeClass(2);
root.right.right.right = new NodeClass(6);
root.right.right.right.left = new NodeClass(9);


test('LCA of 1 and 5', () => {
    expect(LCA(root, 1, 5)).toBe(4);
})

test('LCA of 4 and 8', () => {
    expect(LCA(root, 4, 8)).toBe(7);
})

test('LCA of 1 and 8', () => {
    expect(LCA(root, 1, 8)).toBe(7);
})

test('LCA of 9 and 10', () => {
    expect(LCA(root, 9, 10)).toBe(8);
})

test('LCA of 3 and 2', () => {
    expect(LCA(root, 3, 2)).toBe(8);
})

test('LCA of 1 and 4', () => {
    expect(LCA(root, 1, 4)).toBe(4);
})

test('LCA of 1 and 9', () => {
    expect(LCA(root, 1, 9)).toBe(7);
})