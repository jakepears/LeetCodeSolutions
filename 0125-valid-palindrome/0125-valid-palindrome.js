/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const newString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
	const reverseString = newString.split('').reverse().join('');
	return newString === reverseString;
};