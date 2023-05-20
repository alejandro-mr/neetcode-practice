# Definition for a binary tree node.
class TreeNode
  attr_accessor :val, :left, :right
  def initialize(val = 0, left = nil, right = nil)
    @val = val
    @left = left
    @right = right
  end
end

def build_tree(values, level = 0)
  return if values[level].nil?

  root = TreeNode.new(values[level])
  if level < values.size
    root.left = build_tree(values, 2 * level + 1)
    root.right = build_tree(values, 2 * level + 2)
  end
  root
end

def bft(root)
  [] if root.nil?

  queue = []
  queue.append root

  values = []
  while queue.size.positive?
    node = queue.shift
    next if node.nil?

    values.append node.val

    queue.append node.left
    queue.append node.right
  end

  values
end

# @param {TreeNode} root
# @return {TreeNode}
def invert_tree(root)
  return nil if root.nil?

  invert_tree(root.left)
  invert_tree(root.right)

  root.left, root.right = root.right, root.left

  root
end

def test
  # Test cases

  # result: [4, 7, 2, 9, 6, 3, 1]
  puts bft(invert_tree(build_tree([4, 2, 7, 1, 3, 6, 9]))).inspect

  # result: [2, 3, 1]
  puts bft(invert_tree(build_tree([2, 1, 3]))).inspect

  # result: []
  puts bft(invert_tree(build_tree([]))).inspect
end

test
