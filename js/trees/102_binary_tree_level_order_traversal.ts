import { TreeNode } from './lib/treenode';

export default function levelOrder(root: TreeNode | null): number[][] {
  return dft(root);
}

function dft(
  root: TreeNode | null,
  level = 0,
  acc: number[][] = []
): number[][] {
  if (!root) return acc;

  if (!acc[level]) {
    acc[level] = [root.val];
  } else {
    acc[level] = [...acc[level], root.val];
  }

  dft(root.left, level + 1, acc);
  dft(root.right, level + 1, acc);

  return acc;
}
