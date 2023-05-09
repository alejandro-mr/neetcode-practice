# @param {Integer[]} height
# @return {Integer}
def max_area(height)
  i = 0
  k = height.size - 1

  max = 0

  while i < k
    b = k - i
    h = [height[i], height[k]].min
    a = b * h

    max = a > max ? a : max

    k -= 1 and next if height[k] <= h
    i += 1 and next if height[i] == h
  end

  max
end

def test
  # Test cases

  # result: 49
  puts max_area [1, 8, 6, 2, 5, 4, 8, 3, 7]

  # resut: 1
  puts max_area [1, 1]
end

test
