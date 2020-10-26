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

// testing DAG (directed acyclic graph) capabilities of LCA.js

/* 
     3
    / \
   /   5   1
  2   /\  /
   \ /   6
    4   / 8
    \  / /
     ( 7 )  
      
[[WHERE EVERY LINE IS AN ARROW POINTING DOWN]]
*/

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

test('LCA of 2 and 5', () => {
    expect(LCA(root, 2, 5)).toBe(3);
});

test('LCA of 4 and 6', () => {
    expect(LCA(root, 4, 6)).toBe(5);
});

test('LCA of 6 and 2', () => {
    expect(LCA(root, 6, 2)).toBe(3);
});

test('LCA of 7 and 4', () => {
    expect(LCA(root, 7, 4)).toBe(5);
})

/* test('LCA of 4 and 2', () => {
    expect(LCA(root, 4, 2)).toBe(3);
}) */