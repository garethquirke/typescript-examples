//           .Node
// .LeftNode       .RightNode
// LN      RN      LN        RN 

class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

// The traversals:
// In-Order traversal - visit the nodes of a binary tree in order left, root, right
// Pre-Order traversal - visit the nodes of a binary tree in root, left, right
// Post-Order traversal - visit the nodes of a binary tree in left, right, root
function inOrderTraversal<T>(node: TreeNode<T> | null, visit: (value: T) => void): void {
    if (node) {
        inOrderTraversal(node.left, visit);
        visit(node.value);
        inOrderTraversal(node.right, visit);
    }
}

function preOrderTraversal<T>(node: TreeNode<T> | null, visit: (value: T) => void): void {
    if (node) {
        visit(node.value);
        preOrderTraversal(node.left, visit);
        preOrderTraversal(node.right, visit);
    }
}

function postOrderTraversal<T>(node: TreeNode<T> | null, visit: (value: T) => void): void {
    if (node) {
        postOrderTraversal(node.left, visit);
        postOrderTraversal(node.right, visit);
        visit(node.value);
    }
}

function visitLastRightNode<T>(node: TreeNode<T> | null, visit: (value: T) => void): void {
    if (!node) {
        return;
    }

    if (node.right) {
        visitLastRightNode(node.right, visit);
    }

    if (node && !node.right) {
        visit(node.value);
    }
}



const root = new TreeNode<number>(1);
root.left = new TreeNode<number>(2);
root.right = new TreeNode<number>(3);
root.left.left = new TreeNode<number>(4);
root.left.right = new TreeNode<number>(5);

console.log("In-order Traversal:");
inOrderTraversal(root, console.log); // Output: 4, 2, 5, 1, 3

console.log("Pre-order Traversal:");
preOrderTraversal(root, console.log); // Output: 1, 2, 4, 5, 3

console.log("Post-order Traversal:");
postOrderTraversal(root, console.log); // Output: 4, 5, 2, 3, 1

console.log("-----------------");
visitLastRightNode(root, console.log);