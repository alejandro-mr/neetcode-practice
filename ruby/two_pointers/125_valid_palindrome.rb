# frozen_string_literal: true

# @param {String} s
# @return {Boolean}
def is_palindrome(s)
  palindrome = s.downcase.gsub(/[^a-z0-9]/i, '')
  return true if palindrome.size <= 1

  left = 0
  right = palindrome.size - 1

  while right >= left
    return false unless palindrome[left] == palindrome[right]

    left += 1
    right -= 1
  end
  true
end

def test
  # Test cases

  # result: true
  puts is_palindrome 'A man, a plan, a canal: Panama'

  # result: false
  puts is_palindrome 'race a car'

  # result: true
  puts is_palindrome ' '

  # result: true
  puts is_palindrome 'aa'
end

test
