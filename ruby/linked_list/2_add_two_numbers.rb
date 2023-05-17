# Definition for singly-linked list.
class ListNode
  attr_accessor :val, :next
  def initialize(val = 0, _next = nil)
    @val = val
    @next = _next
  end

  def to_a
    result = []
    current = self
    until current.nil?
      result.append(current.val)
      current = current.next
    end
    result
  end
end

# @param {ListNode} l1
# @param {ListNode} l2
# @return {ListNode}
def add_two_numbers(l1, l2)
  l2 if l1.nil?
  l1 if l2.nil?

  head = nil
  prev = nil
  carrying = 0
  while !l1.nil? || !l2.nil? || carrying.positive?
    sum = (l1&.val || 0) + (l2&.val || 0) + carrying
    carrying = 0
    carrying, sum = sum.divmod(10) if sum >= 10

    node = ListNode.new(sum)
    head = node if head.nil?

    prev.next = node unless prev.nil?
    prev = node

    l1 = l1&.next
    l2 = l2&.next
  end

  head
end

def populate_list(values = [])
  return nil if values.empty?

  head = ListNode.new(values[0])
  current = head

  values[1..].each do |value|
    nxt = ListNode.new(value)
    current.next = nxt

    current = nxt
  end

  head
end

def test
  # Test cases

  # result: [7, 0, 8]
  l1 = populate_list([2, 4, 3])
  l2 = populate_list([5, 6, 4])
  puts add_two_numbers(l1, l2).to_a.inspect

  # result: [0]
  l1 = populate_list([0])
  l2 = populate_list([0])
  puts add_two_numbers(l1, l2).to_a.inspect

  # result: [8, 9, 9, 9, 0, 0, 0, 1]
  l1 = populate_list([9, 9, 9, 9, 9, 9, 9])
  l2 = populate_list([9, 9, 9, 9])
  puts add_two_numbers(l1, l2).to_a.inspect
end

test
