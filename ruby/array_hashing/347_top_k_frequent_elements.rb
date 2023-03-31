# @param {Integer[]} nums
# @param {Integer} k
# @return {Integer[]}
def top_k_frequent(nums, k)
  count = {}
  nums.each do |num|
    count[num] += 1 if count.key?(num)
    count[num] = 1 unless count.key?(num)
  end

  sorted_count = count.sort_by { |_, c| -c }.to_h

  sorted_count.keys.take(k)
end

# space: O(n) since we use a hash
# complexity:
#   O(n log n) sorting the hash

def test
  # Test cases

  # result: [1,2]
  puts top_k_frequent([1, 1, 1, 2, 2, 3], 2).inspect

  # result: [1]
  puts top_k_frequent([1], 1).inspect

  # result: [5,2,1]
  puts top_k_frequent([10, 1, 1, 1, 1, 1, 5, 5, 5, 5, 2, 2, 2, 1, 0], 3).inspect
end

test
