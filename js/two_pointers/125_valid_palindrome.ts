function isPalindrome(s: string): boolean {
  const palindrome: string = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
  if (palindrome.length <= 1) return true;

  let left = 0;
  let right = palindrome.length - 1;

  while (right >= left) {
    if (palindrome[left] !== palindrome[right]) return false;

    left++;
    right--;
  }

  return true;
}

(() => {
  // Test cases

  // result: true
  console.log(isPalindrome('A man, a plan, a canal: Panama'));
  // result: false
  console.log(isPalindrome('race a car'));
  // result: true
  console.log(isPalindrome(' '));
  // result: true
  console.log(isPalindrome('aa'));
})();
