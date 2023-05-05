# @param {String[]} strs
# @return {String[][]}
def group_anagrams(strs)
  return [strs] if strs.size <= 1

  result = Hash.new([])
  count = Array.new(26, 0)

  strs.each do |str|
    str.each_char { |char| count[char.ord - "a".ord] += 1 }
    if result.key?(count)
      result[count].push(str)
    else
      result[count] = [str]
    end
    count = Array.new(26, 0)
  end

  result.values
end

def test
  puts group_anagrams(%w[eat tea tan ate nat bat]).inspect

  puts group_anagrams([""]).inspect

  puts group_anagrams(["a"]).inspect

  puts group_anagrams(%w[a a aa ab]).inspect
end

test
