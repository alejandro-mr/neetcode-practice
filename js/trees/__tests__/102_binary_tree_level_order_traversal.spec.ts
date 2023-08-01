import { describe, it, expect } from 'vitest';
import { TreeNode, appendNodes } from '../lib/treenode';
import levelOrder from '../102_binary_tree_level_order_traversal';

describe.concurrent('levelOrder', () => {
  it('Should return [[3],[9,20],[15,7]]', async () => {
    const input: (number | null)[] = [3, 9, 20, null, null, 15, 7];
    const root: TreeNode | null = appendNodes(input);

    expect(levelOrder(root)).toStrictEqual([[3], [9, 20], [15, 7]]);
  });

  it('Should return [[1]]', async () => {
    const input: (number | null)[] = [1];
    const root: TreeNode | null = appendNodes(input);

    expect(levelOrder(root)).toStrictEqual([[1]]);
  });

  it('Should return []', async () => {
    const input: (number | null)[] = [];
    const root: TreeNode | null = appendNodes(input);

    expect(levelOrder(root)).toStrictEqual([]);
  });
});
