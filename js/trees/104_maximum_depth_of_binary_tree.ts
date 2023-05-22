import { TreeNode, appendNodes } from "./lib/treenode";

function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;

  const depth = dft(root);

  max_depth = 0;
  return depth;
}

let max_depth = 0;

function dft(root: TreeNode | null, depth: number = 1): number {
  if (!root) return max_depth;

  if (depth > max_depth) max_depth = depth;

  if (root.left) dft(root.left, depth + 1);
  if (root.right) dft(root.right, depth + 1);

  return max_depth;
}

(() => {
  // Test cases

  // result: 3
  console.log(maxDepth(appendNodes([3, 9, 20, null, null, 15, 7])));

  // result: 2
  console.log(maxDepth(appendNodes([1, null, 2])));
})();
