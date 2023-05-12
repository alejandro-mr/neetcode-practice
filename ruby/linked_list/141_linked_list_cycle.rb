# Definition for singly-linked list.
class ListNode
  attr_accessor :val, :next
  def initialize(val)
    @val = val
    @next = nil
  end
end

# @param {ListNode} head
# @return {Boolean}
def hasCycle(head)
  slow = head
  fast = head

  while slow && fast && fast.next
    slow = slow.next
    fast = fast.next.next

    return true if slow == fast
  end

  false
end

def populate_list_with_cycle(values = [], cycle_pos)
  return nil if values.empty?

  head = ListNode.new(values[0])
  current = head

  counter = 0
  cycle_node = nil

  values[1..].each do |value|
    nxt = ListNode.new(value)
    current.next = nxt

    cycle_node = current if counter == cycle_pos
    counter += 1

    current = nxt
    current.next = cycle_node if counter == values.size - 1
  end

  head
end

def test
  # Test cases

  # result: true
  puts hasCycle(populate_list_with_cycle([3, 2, 0, -4], 1))

  # result: true
  puts hasCycle(populate_list_with_cycle([1, 2], 0))

  # result: false
  puts hasCycle(populate_list_with_cycle([1], -1))
end

test
