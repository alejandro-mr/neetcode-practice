# @param {String} s
# @param {String} t
# @return {Boolean}
def is_anagram(s, t)
  return false if s.size != t.size

  char_count = {}

  s.each_char do |c|
    if char_count.key?(c)
      char_count[c] += 1
      next
    end
    char_count[c] = 1
  end

  t.each_char do |c|
    return false unless char_count.key?(c)

    char_count[c] -= 1
  end

  char_count.each { |_, count| return false if count.positive? }

  true
end

def test
  # Test cases

  # result: true
  puts is_anagram('anagram', 'nagaram')

  # result: false
  puts is_anagram('rat', 'cat')
end

test
