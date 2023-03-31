# @param {Integer[]} nums
# @param {Integer} k
# @return {Integer[]}
def top_k_frequent(nums, k)
  num_count = {}
  nums.each do |num|
    num_count[num] += 1 if num_count.key?(num)
    num_count[num] = 1 unless num_count.key?(num)
  end

  frequency = Array.new(nums.size + 1, [])
  num_count.each { |num, count| frequency[count] += [num] }

  top = []
  frequency.reverse_each do |f|
    break if k <= 0

    k -= f.size and top += f unless f.empty?
  end

  top
end

def test
  # result: [1, 2]
  puts top_k_frequent([1, 1, 1, 2, 2, 3], 2).inspect

  # result: [1]
  puts top_k_frequent([1], 1).inspect

  # result: [5, 2, 1]
  puts top_k_frequent([10, 1, 1, 1, 1, 1, 5, 5, 5, 5, 2, 2, 2, 1, 0], 3).inspect
end

test
