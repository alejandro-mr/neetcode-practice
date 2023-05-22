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

@depth = 0
def dft(root, level = 1)
  @depth = level if level > @depth

  dft(root.left, level + 1) unless root.left.nil?
  dft(root.right, level + 1) unless root.right.nil?

  @depth
end

# @param {TreeNode} root
# @return {Integer}
def max_depth(root)
  @depth if root.nil?

  total_depth = dft(root)
  @depth = 0
  total_depth
end

def test
  # Test cases

  # result: 3
  puts max_depth(build_tree([3, 9, 20, nil, nil, 15, 7]))

  # result: 2
  puts max_depth(build_tree([1, nil, 2]))
end

test
