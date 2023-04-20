# frozen_string_literal: true

# @param {Integer[]} nums
# @return {Integer}
def longest_consecutive(nums)
  return nums.size unless nums.size > 1

  sequence = Hash.new(false).tap { |h| nums.each { |num| h[num] = true } }

  count = 1
  max_sequence = 1

  nums.each do |num|
    next if sequence[num - 1]

    (1..nums.size - 1).each do |i|
      unless sequence[num + i]
        count = 1
        break
      end
      count += 1
      max_sequence = count if count > max_sequence
    end
  end
  max_sequence
end

def test
  # Test cases

  # result: 4
  puts longest_consecutive [100, 4, 200, 1, 3, 2]

  # result: 9
  puts longest_consecutive [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]

  # result: 1
  puts longest_consecutive [0]

  # result: 0
  puts longest_consecutive []
end

test
