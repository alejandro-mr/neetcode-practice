# @param {Integer[]} nums
# @return {Boolean}
def contains_duplicate(nums)
  dups = {}
  nums.each do |num|
    return true if dups.key?(num)

    dups[num] = true
  end

  false
end

def test
  # Test cases

  # result: true
  puts contains_duplicate([1, 2, 3, 1])

  # result: false
  puts contains_duplicate([1, 2, 3, 4])

  # result: true
  puts contains_duplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])
end

test
