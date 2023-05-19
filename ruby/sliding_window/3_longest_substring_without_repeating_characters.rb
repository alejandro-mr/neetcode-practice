require "set"

# @param {String} s
# @return {Integer}
def length_of_longest_substring(s)
  return s.size if s.size <= 1

  left = 0
  set = Set[s[left]]

  longest = set.size

  (left + 1..s.length - 1).each do |right|
    while set.include? s[right]
      set.delete s[left]
      left += 1
    end

    set.add(s[right])
    longest = set.size if set.size > longest
  end

  longest
end

def test
  # Test cases

  # result: 3
  puts length_of_longest_substring("abcabcbb")

  # result: 1
  puts length_of_longest_substring("bbbbb")

  # result: 3
  puts length_of_longest_substring("pwwkew")

  # result: 3
  puts length_of_longest_substring("dvdf")
end

test
