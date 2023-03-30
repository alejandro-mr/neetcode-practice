# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[]}
def two_sum(nums, target)
  rest = {}

  nums.each_with_index do |num, i|
    rest[nums[i - 1]] = i - 1 if i.positive?
    return rest[target - num], i if rest.key?(target - num)
  end
end

def test
  # Test cases

  # result: [1, 2]
  puts two_sum([2, 5, 5, 11], 10).inspect

  # result: [2, 3]
  puts two_sum([1, 3, 4, 2], 6).inspect

  # result: [1, 2]
  puts two_sum([3, 2, 4], 6).inspect

  # result: [0, 1]
  puts two_sum([3, 3], 6).inspect
end

test
