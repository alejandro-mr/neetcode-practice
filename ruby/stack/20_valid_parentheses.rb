# @param {String} s
# @return {Boolean}
def is_valid(s)
  return false if s.size <= 1

  openers = ["(", "[", "{"]
  closers = ["}", "]", ")"]
  opener_to_closer = { "(" => ")", "[" => "]", "{" => "}" }

  stack = []
  s.each_char do |char|
    stack.push char and next if openers.include? char

    next unless closers.include? char

    return false if stack.nil?

    last = stack.pop
    closer = opener_to_closer[last]

    return false unless char.eql? closer
  end

  return false unless stack.empty?

  true
end

def test
  # Test cases

  # result: false
  puts is_valid "("

  # result: true
  puts is_valid "()"

  # result: true
  puts is_valid "()[]{}"

  # result: false
  puts is_valid ")(){}"
end

test
