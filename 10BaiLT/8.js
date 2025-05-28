function isPalindrome(str) {
    const clean = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return clean === clean.split('').reverse().join('');
  }
  
  console.log(isPalindrome("Racecar")); // true
  console.log(isPalindrome("hello"));   // false
  