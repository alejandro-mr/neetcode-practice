import { TreeNode, appendNodes, bft } from "./lib/treenode";

function invertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) return null;

  invertTree(root.left);
  invertTree(root.right);

  [root.left, root.right] = [root.right, root.left];

  return root;
}

function testInvertTree(input: number[]): number[] {
  if (input.length <= 0) return [];
  let root = appendNodes(input);
  root = invertTree(root);

  return bft(root);
}

(() => {
  // Test cases

  // result: [4, 7, 2, 9, 6, 3, 1]
  console.log(testInvertTree([4, 2, 7, 1, 3, 6, 9]));

  // result: [2, 3, 1]
  console.log(testInvertTree([2, 1, 3]));

  // result: []
  console.log(testInvertTree([]));
})();
