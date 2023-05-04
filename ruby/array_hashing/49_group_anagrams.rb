# @param {String[]} strs
# @return {String[][]}
def group_anagrams(strs)
  return [] if strs.empty?

  result = Hash.new([])

  until strs.empty?
    strs_copy = strs.clone
    current = strs.shift
    strs_copy.shift

    current_count = 0
    # this solution won't work for all strings, since two string not anagrams can have the same count
    # what i can do is have a multi index array at each count, and look for the internal array where the anagram is valid to push
    current.each_char { |char| current_count += char.ord - "a".ord }
    puts current_count
    result[current_count] = [].push(current)
    strs_copy.each do |str|
      index = strs.find_index(str)
      if anagram?(current, str)
        p str, current_count
        result[current_count].push(str) and strs.delete_at(index)
        p result
      end
    end
  end
  p result
  result.values
end

def anagram?(str1, str2)
  char_count = Hash.new(0)
  str1.each_char { |char| char_count[char] += 1 }

  str2.each_char do |char|
    return false unless char_count.key? char

    char_count[char] -= 1
  end
  char_count.values.sum.zero?
end

def test
  #puts group_anagrams(%w[eat tea tan ate nat bat]).inspect

  #puts group_anagrams([""]).inspect

  #puts group_anagrams(["a"]).inspect

  puts group_anagrams(%w[a a aa ab]).inspect
end

test
