# Definition for singly-linked list.
class ListNode
  attr_accessor :val, :next

  def initialize(val = 0, nxt = nil)
    @val = val
    @next = nxt
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

# @param {ListNode} head
# @return {ListNode}
def reverse_list(head)
  nil if head.nil?

  current = head
  prev = nil
  until current.nil?
    nxt = current.next
    current.next = prev

    prev = current
    current = nxt
  end

  return prev
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
  #Test cases

  # result: [5, 4, 3, 2, 1]
  puts reverse_list(populate_list([1,2,3,4,5])).to_a

  # result: []
  puts reverse_list(populate_list([])).to_a

  # result: [2, 1]
  puts reverse_list(populate_list([1, 2])).to_a
end

test
